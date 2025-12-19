"use client"

// ------------ Utils ------------
import { useUserProfile } from "@/lib/hooks/use-user-profile";

// ------------ Components ------------
import { Card, CardContent } from "@/components/ui/card";
import { LogOutButton } from "@/components/auth/ui/logout-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
        <Card>
          <CardContent>
            Hello, {data?.name}
            <Avatar>
              {profileImage && <AvatarImage src={profileImage} alt={initials} />}
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <LogOutButton />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
