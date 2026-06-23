import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type variant = "image" | "link"

interface logoProps {
  className?: string
  variant?: variant
  image: string
  imageDark?: string
  link?: string
  alt?: string
  width?: number
  height?: number
}

export function Logo({
  className,
  variant = "image",
  image,
  imageDark = image,
  link = "/",
  alt = "logo",
  width = 150,
  height = 150,
}: logoProps) {

  const renderImages = (
    <>
      <Image
        className={cn(className, "block dark:hidden")}
        src={image}
        alt={alt}
        width={width}
        height={height}
        priority
      />
      <Image
        className={cn(className, "hidden dark:block")}
        src={imageDark}
        alt={alt}
        width={width}
        height={height}
        priority
      />
    </>
  )

  if (variant === "image") {
    return renderImages
  }

  return (
    <Link href={link} target="_blank">
      {renderImages}
    </Link>
  )
}
