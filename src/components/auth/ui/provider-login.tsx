"use client"

import { Logo } from "@/components/custom/logo"
import { Button } from "@/components/ui/button"
import { socialProvidersProps } from "@/lib/settings/auth"
import { cn } from "@/lib/utils"
import { Provider } from "@supabase/supabase-js"
import { HatGlasses } from "lucide-react"

interface providerLoginProps {
  captchaToken: string | null // 👈 Direct state dependency passed down
  onAnonymousLogin?: (captchaToken: string) => void
  onSocialLogin?: (provider: Provider, captchaToken: string) => void
  showAnonymousLogin?: boolean
  showSocialLogin?: boolean
  socialProviders?: socialProvidersProps[]
  className?: string
}

const DEFAULT_SOCIAL_PROVIDERS: socialProvidersProps[] = [{ id: "google", name: "Google", icon: null }]

export function ProviderLogin({
  captchaToken,
  onAnonymousLogin,
  onSocialLogin,
  showAnonymousLogin = false,
  showSocialLogin = true,
  socialProviders = DEFAULT_SOCIAL_PROVIDERS,
  className,
}: providerLoginProps) {

  const isVerified = !!captchaToken

  return (
    <div className={cn("mx-auto flex flex-col gap-3 w-full my-2", className)}>
      {showAnonymousLogin && (
        <Button
          variant="outline"
          className="w-full"
          disabled={!isVerified}
          onClick={() => {
            if (captchaToken) onAnonymousLogin?.(captchaToken)
          }}
        >
          <HatGlasses className="mr-2 h-4 w-4" />
          Continue as Anonymous
        </Button>
      )}

      {showSocialLogin &&
        socialProviders.map((provider) => (
          <Button
            key={provider.id}
            variant="outline"
            className="w-full"
            disabled={!isVerified}
            onClick={() => {
              if (captchaToken) {
                onSocialLogin?.(provider.id as Provider, captchaToken)
              }
            }}
          >
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
        ))}
    </div>
  )
}
