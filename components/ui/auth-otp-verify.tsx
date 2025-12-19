"use client";

import { confirmEmail } from "@/lib/actions/auth";
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Alert, AlertDescription } from "./alert";

import { AlertCircle } from "lucide-react";

export default function EmailConfirm({ pendingEmail }: { pendingEmail: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: { email: string, token: string }) => {
    try {
      setLoading(true);
      setError(null);
      await confirmEmail(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  function handleChange(code: string) {
    if (code.length === 6) {
      handleSubmit({ email: pendingEmail, token: code })
    }
  }

  return (
    <Card className="w-full max-w-sm shadow-xs">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Verify your email
        </CardTitle>
        <CardDescription>
          We&apos;ve sent a 6-digit code to{" "} <span className="font-medium">{pendingEmail}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          {error && (
            <Alert variant={"destructive"}>
              <AlertCircle className="h-4 w-4"></AlertCircle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Field data-invalid={!!error}>
            <FieldLabel htmlFor="otp-code">
              Verification code
              <span aria-label="required" className="text-destructive">*</span>
            </FieldLabel>
            <FieldContent>
              <InputOTP disabled={loading} maxLength={6} pattern={REGEXP_ONLY_DIGITS} onChange={(value) => handleChange(value)}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <span>Enter the 6-digit code</span>
              </div>
            </FieldContent>
          </Field>
        </div>
      </CardContent>
    </Card >
  );
}
