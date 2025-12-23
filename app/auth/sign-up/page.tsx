import { SignUpForm } from "@/components/auth/ui/sign-up-form";
import { signInAsAnonymous, signInWithOAuth, signUp } from "@/lib/actions/auth";
import { showAnonymousLogin, showSocialLogin, socialProviders } from "@/lib/settings/auth";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm
          onSubmit={signUp}
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
