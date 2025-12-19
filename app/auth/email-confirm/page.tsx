import EmailConfirm from "@/components/ui/auth-otp-verify";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies()
  const email = cookieStore.get('pending_email')?.value || '';

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <EmailConfirm
          pendingEmail={email}
        />
      </div>
    </div>
  )
}
