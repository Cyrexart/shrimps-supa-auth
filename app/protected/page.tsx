"use client"

// ------------ Utils ------------
import { useUserProfile } from "@/lib/hooks/use-user-profile";

// ------------ Components ------------
import ProfileSettings from "@/components/ui/profile";

// ------------ Icons ------------

export default function Page() {
  const data = useUserProfile()

  const profileImage = data?.avatar
  const name = data?.name
  const initials = name
    ?.split(' ')
    ?.map((word) => word[0])
    ?.join('')
    ?.toUpperCase()

  return (
    <main className="overflow-hidden pt-24 lg:pt-48 ">
      <div className="m-24 flex mx-auto justify-center">
        <ProfileSettings
          profile={{ name: "Cyrex", email: "cyrex@gmail.com" }}
        />
      </div>
    </main >
  )
}
