"use client";

// ------------ Utils ------------
import { signUp, signInWithOAuth, signInAsAnonymous } from "@/lib/actions/auth";
import { signUpSchema, type SignUpInput } from "@/lib/types/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from 'next/navigation'
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useState } from "react";
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
import { AlertCircle, HatGlasses, Lock, Mail } from "lucide-react";
import { GoogleLogo } from "@/components/logos/google";
import { GithubLogo } from "@/components/logos/github";


interface signUpFormProps {
  className?: string,
}

export function SignUpForm({ className }: signUpFormProps) {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(searchParams.get("error"));

  const form = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: SignUpInput) => {
    try {
      setLoading(true);
      setError(null);
      await signUp(data);
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
          Sign Up
        </CardTitle>
        <CardDescription>
          Enter credentials to create new account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mx-auto flex flex-col gap-3 my-2" >
          <Button variant="outline" cursor="pointer" onClick={() => signInAsAnonymous()}> <HatGlasses />Continue as Anonymous</Button>
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
                  {"Sign up"}
                </Button>
              </div>

              <div className="text-muted-foreground text-center text-[0.775rem] space-y-1 mt-4">
                <p>
                  <Link className="underline" href="/auth/login">
                    Already have an account? Login
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
