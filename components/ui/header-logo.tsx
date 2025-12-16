'use client'

import Image from "next/image"
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils"

interface logoProps {
  className?: string
}

export function Logo(
  { className }: logoProps
) {

  const { theme } = useTheme();

  return (
    <Image
      className={cn(className)}
      src={theme === "dark" ? "/supabase-logo-wordmark--dark.svg" : "/supabase-logo-wordmark--light.svg"}
      alt="project logo"
      width={150}
      height={150}
    />
  )
}
