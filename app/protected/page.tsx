"use client"

// ------------ Utils ------------
import { useUserProfile } from "@/lib/hooks/use-user-profile";

// ------------ Components ------------
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

// ------------ Icons ------------

export default function Page() {
  const data = useUserProfile()

  const profileImage = data?.avatar
  const name = data?.name
  const firstName = name?.split(' ')[0]
  const initials = name
    ?.split(' ')
    ?.map((word) => word[0])
    ?.join('')
    ?.toUpperCase()

  return (
    <main className="overflow-hidden pt-24 lg:pt-48 ">
      <div className="m-24 flex mx-auto justify-center">
        <h1>
          Hello, {firstName}
        </h1>
        <Card>
          <CardHeader>
            <CardTitle>

            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </main >
  )
}
