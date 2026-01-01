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

// ------------ Components ------------
import { ErrorMessage } from "@/components/custom/error";
import { Spinner } from "@/components/ui/spinner";
import { ProviderLogin } from "./provider-login";
import { Button } from "@/components/ui/button";
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
import { Lock, Mail } from "lucide-react";


export interface signUpFormProps {
  onSubmit?: (data: SignUpInput) => void
  onSocialLogin?: (provider: Provider) => void
  onAnonymousLogin?: () => void
  showSocialLogin?: boolean
  showAnonymousLogin?: boolean
  socialProviders?: socialProvidersProps[]
  className?: string
}

export function SignUpForm(
  { onSubmit,
    onSocialLogin,
    onAnonymousLogin,
    showSocialLogin,
    showAnonymousLogin,
    socialProviders,
    className
  }: signUpFormProps
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = useCallback(async (data: SignUpInput) => {
    try {
      setLoading(true);
      setError(null);
      onSubmit?.(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [onSubmit]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">
          Sign Up
        </CardTitle>
        <CardDescription>
          Enter credentials to create new account
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
        <Form {...form}>
          <form className={cn(className)} onSubmit={form.handleSubmit(handleSubmit)}>
            {error && <ErrorMessage error={error} />}
            <div className="my-4 flex flex-col gap-4 py-2">
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
            <Button className="w-full text-base font-semibold" type="submit" cursor="pointer" disabled={loading}>
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
