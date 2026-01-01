import { Logo } from "@/components/custom/logo"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { socialProvidersProps } from "@/lib/settings/auth"
import { cn } from "@/lib/utils"
import { Provider } from "@supabase/supabase-js"
import { HatGlasses } from "lucide-react"

interface providerLoginProps {
  onAnonymousLogin?: () => void,
  onSocialLogin?: (provider: Provider) => void,
  showAnonymousLogin?: boolean
  showSocialLogin?: boolean
  showSeparator?: boolean
  socialProviders?: socialProvidersProps[]
  className?: string
}

const DEFAULT_SOCIAL_PROVIDERS: socialProvidersProps[] = [{ id: "google", name: "Google", icon: null }]

export function ProviderLogin(
  {
    onAnonymousLogin,
    onSocialLogin,
    showAnonymousLogin = false,
    showSocialLogin = true,
    showSeparator = true,
    socialProviders = DEFAULT_SOCIAL_PROVIDERS,
    className,
  }: providerLoginProps
) {
  return (
    <div className={cn(className)}>
      <div className="mx-auto flex flex-col gap-3 my-2">
        {showAnonymousLogin && (
          <Button
            variant="outline"
            cursor="pointer"
            onClick={() => onAnonymousLogin?.()}>
            <HatGlasses />
            Continue as Anonymous
          </Button>
        )}

        {showSocialLogin && socialProviders.map((provider) => {
          return (
            <Button
              key={provider.id}
              variant="outline"
              cursor="pointer"
              onClick={() => onSocialLogin?.(provider.id)}>
              {provider.icon && (
                <Logo
                  image={provider.icon.image}
                  imageDark={provider.icon.imageDark}
                  alt={provider.icon.alt}
                  width={20}
                />
              )}
              Continue with {provider.name}
            </Button>
          );
        })}
      </div >

      {(showSeparator && (showSocialLogin || showAnonymousLogin)) && (
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
    </div>
  )
}


