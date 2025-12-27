import { cn } from "@/lib/utils"
import { Logo } from "../ui/logo"

interface footerProps {
  className?: string
}

export function Footer(
  {
    className
  }: footerProps
) {
  return (
    <footer id="footer" className={cn(className, "w-full border-t-2 absolute")}>
      <div className="py-10 px-4 mx-auto  max-w-5xl">
        <div className="flex justify-between gap-4">
          <Logo
            variant="link"
            link="https://supabase.com/"
            alt="supabase logo"
            image="/supabase-logo-wordmark--light.svg"
            imageDark="/supabase-logo-wordmark--dark.svg"
          />

          <div>
            <h2 className="font-semibold">
              Contacts
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              shrimps.cyrex@gmail.com
            </p>
          </div>
          <div>
            <h2 className="font-semibold">
              Last update
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              31.12.2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
