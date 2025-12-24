"use client"

// ------------ Utils ------------
import { useUserProfile } from "@/lib/hooks/use-user-profile";

// ------------ Components ------------
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ------------ Icons ------------

export default function Page() {
  const data = useUserProfile()

  const name = data?.name
  const firstName = name?.split(' ')[0]
  return (
    <main className="overflow-hidden pt-12 lg:pt-24 ">
      <div className="w-9/10 m-24 flex flex-wrap mx-auto justify-center text-center">
        <div className="w-full">
          <div className="my-4 grid grid-cols-5 gap-4">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl font-extrabold tracking-tight">
                  Hello, {firstName}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>
                  Lorem Ipsum
                </CardTitle>
              </CardHeader>
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>
                  File Tree #1
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-3 text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </div>
                  <div className="col-span-2">

                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>
                  File Tree #2
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-3 text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </div>
                  <div className="col-span-2">

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main >
  )
}
