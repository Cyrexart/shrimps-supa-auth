'use client'

import { cn } from "@/lib/utils"
import { useUserProfile } from "@/lib/hooks/use-user-profile"

interface userNameProps {
  className?: string,
  text?: string,
}

export function UserName({ className, text }: userNameProps) {
  const data = useUserProfile()

  const firstName = data?.name.split(' ')[0]
  return (
    <h1 className={cn(className)}>
      {text}{firstName}
    </h1>
  )
}
