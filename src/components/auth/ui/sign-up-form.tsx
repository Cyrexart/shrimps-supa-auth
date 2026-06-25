"use client";

// ------------ Utils ------------
import { signUpSchema, type SignUpInput } from "@/lib/types/validation";
import { socialProvidersProps } from "@/lib/settings/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Provider } from "@supabase/supabase-js";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import dynamic from "next/dynamic";

// ------------ Components ------------
import { Turnstile } from "@marsidev/react-turnstile";
import { Separator } from "@/components/ui/separator";
import { ErrorMessage } from "@/components/custom/error";
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

// Dynamically imported to ensure client-server render matching
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

export interface signUpFormProps {
  onSubmit?: (data: SignUpInput, captchaToken: string) => void
  onSocialLogin?: (provider: Provider, captchaToken: string) => void
  onAnonymousLogin?: (captchaToken: string) => void
  showSocialLogin?: boolean
  showAnonymousLogin?: boolean
  socialProviders?: socialProvidersProps[]
  className?: string
}

export function SignUpForm({
  onSubmit,
  onSocialLogin,
  onAnonymousLogin,
  showSocialLogin = true,
  showAnonymousLogin = false,
  socialProviders,
  className
}: signUpFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const form = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: ""
    },
  });

  const handleSubmit = useCallback((data: SignUpInput) => {
    if (!captchaToken) {
      setError("Please complete captcha protection verification.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      onSubmit?.(data, captchaToken);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [onSubmit, captchaToken]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">Sign Up</CardTitle>
        <CardDescription>Enter credentials to create new account</CardDescription>
      </CardHeader>
      <CardContent>
        {/* 1. Provider Actions */}
        <ProviderLogin
          captchaToken={captchaToken}
          onAnonymousLogin={onAnonymousLogin}
          onSocialLogin={onSocialLogin}
          showAnonymousLogin={showAnonymousLogin}
          showSocialLogin={showSocialLogin}
          socialProviders={socialProviders}
        />

        {/* 2. Unified Captcha Challenge */}
        <div className="flex justify-center items-center py-2 my-4 border rounded-lg bg-muted/20">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            options={{ size: "normal" }}
            onSuccess={(token) => setCaptchaToken(token)}
            onExpire={() => setCaptchaToken(null)}
            onError={() => setCaptchaToken(null)}
          />
        </div>

        {/* 3. Visual Separation Block */}
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

        {/* 4. Core Form Submission Layout */}
        <Form {...form}>
          <form className={cn(className)} onSubmit={form.handleSubmit(handleSubmit)}>
            {error && <ErrorMessage error={error} />}
            <div className="my-4 flex flex-col gap-4 py-2">
              <AuthFormField
                name="email"
                title="Email"
                type="email"
                placeholder="primeagen@example.com"
                Icon={Mail}
                loading={loading}
              />
              <AuthFormField
                name="password"
                title="Password"
                placeholder="************"
                hidden
                Icon={Lock}
                loading={loading}
              />
              <AuthFormField
                name="confirm"
                title="Repeat your password"
                placeholder="************"
                hidden
                Icon={Lock}
                loading={loading}
              />
            </div>
            <Button
              className="w-full text-base font-semibold"
              type="submit"
              disabled={loading || !captchaToken}
            >
              {loading && <Spinner />}
              {"Sign up"}
            </Button>
            <p className="mt-4 text-center text-[0.775rem] text-muted-foreground">
              <Link className="underline" href="/auth/login">
                Already have an account? Login
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
