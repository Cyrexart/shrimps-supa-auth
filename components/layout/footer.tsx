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
      <div className="py-10 px-4 mx-auto w-9/10 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
          <Logo
            variant="link"
            link="https://github.com/Cyrexart"
            alt="app logo"
            image="/shrimps-logo-wordmark--light.svg"
            imageDark="/shrimps-logo-wordmark--dark.svg"
          />

          <div className="text-center md:text-start">
            <h2 className="font-semibold">
              Contacts
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              shrimps.cyrex@gmail.com
            </p>
          </div>
          <div className="text-center md:text-start">
            <h2 className="font-semibold">
              Last update
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              29.12.2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
