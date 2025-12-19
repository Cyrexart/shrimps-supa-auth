'use client'

import Image from "next/image"
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils"

interface logoProps {
  className?: string
}

export function TailwindcssLogo(
  { className }: logoProps
) {

  const { theme } = useTheme();

  return (
    <Image
      className={cn(className)}
      src={theme === "dark" ? "/tailwindcss-logo-wordmark--dark.svg" : "/tailwindcss-logo-wordmark--light.svg"}
      alt="tailwindcss logo"
      width={150}
      height={150}
    />
  )
}
