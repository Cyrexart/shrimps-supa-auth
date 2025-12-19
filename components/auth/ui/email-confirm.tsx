import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Clock, Mail } from "lucide-react";

interface OTPFieldProps {
  code: string;
  codeError?: string;
  codeLength: number;
  isLoading: boolean;
  onCodeChange: (code: string) => void;
  onResend?: () => void;
  resendCooldown: number;
}

export default function EmailConfirm({
  code,
  codeError,
  codeLength,
  isLoading,
  onCodeChange,
}: OTPFieldProps) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Verify your email</CardTitle>

            <CardDescription className="text-sm text-balance">
              We&apos;ve sent a 6-digit code to user@example.com
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex size-20 items-center justify-center rounded-full bg-muted mx-auto mb-6">
              <Field data-invalid={!!codeError}>
                <FieldLabel htmlFor="otp-code">
                  Verification code
                  <span aria-label="required" className="text-destructive">
                    *
                  </span>
                </FieldLabel>
                <FieldContent>
                  <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  {codeError && <FieldError id="otp-code-error">{codeError}</FieldError>}
                  <div className="flex flex-col gap-2 text-muted-foreground text-xs sm:flex-row sm:items-center sm:justify-between">
                    <span>Enter the {codeLength}-digit code</span>
                  </div>
                </FieldContent>
              </Field>
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
