"use client";

// ------------ Utils ------------
import { loginSchema, type LoginInput } from "@/lib/types/validation";
import { socialProvidersProps } from "@/lib/settings/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Provider } from "@supabase/supabase-js";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import dynamic from "next/dynamic";

// ------------ Components ------------
import { Turnstile } from "@marsidev/react-turnstile"; // 👈 Turnstile import moved here
import { Separator } from "@/components/ui/separator"; // 👈 Separator import moved here
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { AuthFormField } from "./input";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

// ------------ Icons ------------
import { Lock, Mail } from "lucide-react";
import { ErrorMessage } from "@/components/custom/error";

const ProviderLogin = dynamic(
  () => import("./provider-login").then((mod) => mod.ProviderLogin),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col gap-3 w-full my-4 animate-pulse">
        <div className="h-10 bg-muted rounded-md w-full" />
      </div>
    ),
  }
);

export interface loginFormProps {
  onSubmit?: (data: LoginInput, captchaToken: string) => void
  onSocialLogin?: (provider: Provider, captchaToken: string) => void
  onAnonymousLogin?: (captchaToken: string) => void
  showSocialLogin?: boolean
  showAnonymousLogin?: boolean
  socialProviders?: socialProvidersProps[]
  className?: string
}

export function LoginForm({
  onSubmit,
  onSocialLogin,
  onAnonymousLogin,
  showSocialLogin = true,
  showAnonymousLogin = false,
  socialProviders,
  className
}: loginFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null); // 👈 Master source of truth

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = useCallback(async (data: LoginInput) => {
    if (!captchaToken) {
      setError("Please complete captcha protection verification.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await onSubmit?.(data, captchaToken); // 👈 Forwards token flawlessly to server action
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [onSubmit, captchaToken]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">Sign in</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>

        {/* 1. Provider buttons container */}
        <ProviderLogin
          captchaToken={captchaToken}
          onAnonymousLogin={onAnonymousLogin}
          onSocialLogin={onSocialLogin}
          showAnonymousLogin={showAnonymousLogin}
          showSocialLogin={showSocialLogin}
          socialProviders={socialProviders}
        />

        {/* 2. Global Captcha Widget (Serves both Email and Social states) */}
        <div className="flex justify-center items-center py-2 my-4 border rounded-lg bg-muted/20">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            options={{ size: "normal" }}
            onSuccess={(token) => setCaptchaToken(token)}
            onExpire={() => setCaptchaToken(null)}
            onError={() => setCaptchaToken(null)}
          />
        </div>

        {/* 3. Layout Separator */}
        {(showSocialLogin || showAnonymousLogin) && (
          <div className="mt-6 mb-4 relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-card px-2 text-muted-foreground text-xs">
                Or continue with email
              </span>
            </div>
          </div>
        )}

        {/* 4. Credentials Form Wrapper */}
        <Form {...form}>
          <form className={cn(className)} onSubmit={form.handleSubmit(handleSubmit)}>
            {error && <ErrorMessage error={error} />}

            <div className="flex flex-col gap-4 py-2 mb-4">
              <AuthFormField
                name="email"
                title="Email"
                placeholder="primeagen@example.com"
                isOptional={false}
                Icon={Mail}
                loading={loading}
              />
              <AuthFormField
                name="password"
                title="Password"
                placeholder="************"
                isOptional={false}
                Icon={Lock}
                loading={loading}
              />
            </div>

            <Button
              className="text-base font-semibold w-full"
              type="submit"
              disabled={loading || !captchaToken} // 👈 Extra frontend protection toggle
            >
              {loading && <Spinner />}
              {"Login"}
            </Button>

            <div className="flex flex-col text-muted-foreground text-center text-[0.775rem] space-y-1 mt-4">
              <Link className="underline" href="/auth/sign-up">Forgot your password?</Link>
              <Link className="underline" href="/auth/sign-up">Don`t have an account? Sign up</Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
