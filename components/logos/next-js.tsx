'use client'

import Image from "next/image"
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils"

interface logoProps {
  className?: string
}

export function NextJsLogo(
  { className }: logoProps
) {

  const { theme } = useTheme();

  return (
    <Image
      className={cn(className)}
      src={theme === "dark" ? "/next-logo-wordmark--dark.svg" : "/next-logo-wordmark--light.svg"}
      alt="next.js logo"
      width={150}
      height={150}
    />
  )
} 
