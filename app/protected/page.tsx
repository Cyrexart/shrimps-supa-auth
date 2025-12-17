import { Card, CardTitle } from "@/components/ui/card";
import { getUser } from "@/lib/actions/auth";


export default async function Page() {
  const user = await getUser()


  return (
    <div className="m-24 flex mx-auto justify-center">
      <Card>
        <CardTitle>Hello, {user?.email}</CardTitle>
      </Card>
    </div>
  )
}
