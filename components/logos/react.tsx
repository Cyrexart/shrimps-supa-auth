'use client'

import Image from "next/image"
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils"

interface logoProps {
  className?: string
}

export function ReactLogo(
  { className }: logoProps
) {

  const { theme } = useTheme();

  return (
    <Image
      className={cn(className)}
      src={theme === "dark" ? "/react-logo-wordmark--dark.svg" : "/react-logo-wordmark--light.svg"}
      alt="react logo"
      width={150}
      height={150}
    />
  )
}
