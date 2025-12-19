import { LogOutButton } from "@/components/auth/ui/logout-button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getUser } from "@/lib/actions/auth";

export default async function Page() {
  const user = await getUser()

  return (
    <main className="overflow-hidden pt-24 lg:pt-48 ">
      <div className="m-24 flex mx-auto justify-center">
        <Card>
          <CardTitle>Hello, {user?.email}</CardTitle>
          <CardContent>
            <LogOutButton />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
