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

// ------------ Components ------------
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { ProviderLogin } from "./provider-login";
import { AuthFormField } from "./input";
import {
  Form,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

// ------------ Icons ------------
import { AlertCircle, Lock, Mail } from "lucide-react";

const DEFAULT_SOCIAL_PROVIDERS: socialProvidersProps[] = [{ id: "google", name: "Google", icon: null }]

export interface loginFormProps {
  onSubmit?: (data: LoginInput) => void
  onSocialLogin?: (provider: Provider) => void
  onAnonymousLogin?: () => void
  showSocialLogin?: boolean
  showAnonymousLogin?: boolean
  socialProviders?: socialProvidersProps[]
  className?: string
}

export function LoginForm(
  { onSubmit,
    onSocialLogin,
    onAnonymousLogin,
    showSocialLogin = true,
    showAnonymousLogin = false,
    socialProviders = DEFAULT_SOCIAL_PROVIDERS,
    className
  }: loginFormProps
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = useCallback(async (data: LoginInput) => {
    try {
      setLoading(true);
      setError(null);
      onSubmit?.(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [onSubmit]
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">
          Sign in
        </CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProviderLogin
          onAnonymousLogin={onAnonymousLogin}
          onSocialLogin={onSocialLogin}
          showAnonymousLogin={showAnonymousLogin}
          showSocialLogin={showSocialLogin}
          socialProviders={socialProviders}
        />

        <div>
          <Form {...form}>
            <form className={cn(className)} onSubmit={form.handleSubmit(handleSubmit)}>
              {error && (
                <Alert variant={"destructive"}>
                  <AlertCircle className="h-4 w-4"></AlertCircle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex flex-col gap-4 py-2 my-4">
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

              <div className="mx-auto flex flex-col gap-3" >
                <Button className="text-base font-semibold" type="submit" cursor="pointer" disabled={loading}>
                  {loading && <Spinner />}
                  {"Login"}
                </Button>
              </div>
              <div className="text-muted-foreground text-center text-[0.775rem] space-y-1 mt-4">
                <p>
                  <Link className="underline" href="/auth/sign-up">
                    Forgot your password?
                  </Link>
                </p>
                <p>
                  <Link className="underline" href="/auth/sign-up">
                    Don`t have an account? Sign up
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
