"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/lib/types/validation";
import { signIn, signInWithOAuth } from "@/lib/actions/auth";

import { useSearchParams } from 'next/navigation'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Lock, Mail } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { GoogleLogo } from "@/components/logos/google";
import { GithubLogo } from "@/components/logos/github";

interface loginFormProps {
  className?: string,
}

export function LoginForm({ className }: loginFormProps) {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(searchParams.get("error"));

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: LoginInput) => {
    try {
      setLoading(true);
      setError(null);
      await signIn(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };
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

          <Button variant="outline" cursor="pointer" onClick={() => signInWithOAuth("google")}><GoogleLogo /> Continue with Google</Button>
          <Button variant="outline" cursor="pointer" onClick={() => signInWithOAuth("github")}><GithubLogo /> Continue with GitHub</Button>

        </div>
        <div className="mt-8 relative">
          <Separator />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-card px-2 text-muted-foreground text-xs">
              Or continue with email
            </span>
          </div>
        </div>
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
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
