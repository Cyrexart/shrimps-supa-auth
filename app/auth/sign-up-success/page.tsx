import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Mail } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold ">Verify your email</CardTitle>

            <CardDescription className="text-sm">
              We&apos;ve sent a verification link to user@example.com. Please check your inbox and click the link to verify your email address.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex size-20 items-center justify-center rounded-full bg-muted mx-auto mb-6">
              <Mail aria-hidden="true" className="size-10 text-muted-foreground" />
            </div>
            <div className="flex items-center gap-2 rounded-lg border bg-muted/50 p-4">
              <Clock
                aria-hidden="true"
                className="size-5 shrink-0 text-muted-foreground"
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-md">Didn&apos;t receive the email?</p>
                <p className="text-muted-foreground text-xs">
                  Check your spam folder or try resending the verification link.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
