import { LoginForm } from "@/components/auth/ui/login-form";

import { signIn, signInAsAnonymous, signInWithOAuth } from "@/lib/actions/auth";
import { showAnonymousLogin, showSocialLogin } from "@/lib/settings/auth";
import { socialProviders } from "@/lib/settings/auth";
export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm
          onSubmit={signIn}
          onAnonymousLogin={signInAsAnonymous}
          onSocialLogin={signInWithOAuth}
          showAnonymousLogin={showAnonymousLogin}
          showSocialLogin={showSocialLogin}
          socialProviders={socialProviders}
          className=""
        />
      </div>
    </div>
  );
}
