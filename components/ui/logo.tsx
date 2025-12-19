'use client'

import Image from "next/image"
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils"
import Link from "next/link";
import { he } from "zod/v4/locales";

type variant = "image" | "link"

interface logoProps {
  className?: string,
  variant?: variant,
  image: string,
  imageDark?: string,
  link?: string,
  alt?: string,
  width?: number,
  height?: number
}

export function Logo(
  {
    className,
    variant = "image",
    image,
    imageDark = image,
    link = "/",
    alt = "logo",
    width = 150,
    height = 150 }: logoProps
) {
  const { theme } = useTheme();

  return (
    variant === "image" ? (
      <Image
        className={cn(className)}
        src={theme === "dark" ? imageDark : image}
        alt={alt}
        width={width}
        height={height}
      />
    ) : (
      <Link href={link} target="_blank">
        <Image
          className={cn(className)}
          src={theme === "dark" ? imageDark : image}
          alt={alt}
          width={width}
          height={height}
        />
      </Link>
    )
  )
}
