"use client";

// ------------ Utils ------------
import { loginSchema, type LoginInput } from "@/lib/types/validation";
import { socialProvidersProps } from "@/lib/settings/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import Link from "next/link";

// ------------ Components ------------
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ------------ Icons ------------
import { AlertCircle, HatGlasses, Lock, Mail } from "lucide-react";// ------------ Social Providers ------------


const DEFAULT_SOCIAL_PROVIDERS: socialProvidersProps[] = [{ id: "google", name: "Google", icon: null }]

export interface loginFormProps {
  onSubmit?: (data: LoginInput) => void
  onSocialLogin?: (provider: string) => void
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
        <div className="mx-auto flex flex-col gap-3 my-2" >
          {showAnonymousLogin && (
            <Button
              variant="outline"
              cursor="pointer"
              onClick={() => onAnonymousLogin?.()}
            >
              <HatGlasses />
              Continue as Anonymous
            </Button>
          )}

          {showSocialLogin && socialProviders.map((provider) => {
            const Icon = provider.icon;
            return (
              <Button
                key={provider.id}
                variant="outline"
                cursor="pointer"
                onClick={() => onSocialLogin?.(provider.id)}
              >
                {Icon && <Icon />}
                Continue with {provider.name}
              </Button>
            );
          })}
        </div>

        {(showSocialLogin || showAnonymousLogin) && (
          <div className="mt-8 relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-card px-2 text-muted-foreground text-xs">
                Or continue with email
                {showAnonymousLogin}
              </span>
            </div>
          </div>
        )}

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
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold">
                        Email <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            placeholder="primeagen@example.com"
                            disabled={loading}
                            className="peer block w-full rounded-md border py-2.25 pl-10 text-sm"
                          />
                          <Mail className="pointer-events-none absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold">
                        Password <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            placeholder="************"
                            disabled={loading}
                            className="peer block w-full rounded-md border py-2.25 pl-10 text-sm"
                          />
                          <Lock className="pointer-events-none absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
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
