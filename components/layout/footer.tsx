import { cn } from "@/lib/utils"
import { Separator } from "../ui/separator"

interface footerProps {
  className?: string
}

export function Footer(
  {
    className
  }: footerProps
) {
  return (
    <footer className={cn(className, "w-full border-t px-16")}>
      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          <h1 className="text-xl font-bold">
            Shrimps.com
          </h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <h2>
              Lorem
            </h2>
            <ul>
              <li>Ipsum</li>
              <li>Ipsum</li>
              <li>Ipsum</li>
              <li>Ipsum</li>
            </ul>
          </div>
          <div>
            <h2>
              Lorem
            </h2>
            <ul>
              <li>Ipsum</li>
              <li>Ipsum</li>
              <li>Ipsum</li>
              <li>Ipsum</li>
            </ul>
          </div>
          <div>
            <h2>
              Lorem
            </h2>
            <ul>
              <li>Ipsum</li>
              <li>Ipsum</li>
              <li>Ipsum</li>
              <li>Ipsum</li>
            </ul>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex justify-between my-4 text-muted-foreground">
        <p>
          © 2024 Shadcnblocks.com. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
