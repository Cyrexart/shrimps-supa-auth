import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, FingerprintPattern, Usb } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden ">
        <div className="w-2/4 flex flex-col mx-auto pt-48 justify-center text-center">
          <h1 className="text-7xl font-extrabold tracking-tight text-balance my-6">Production-ready Supabase Authentication</h1>
          <p className="text-xl  tracking-tight text-balance my-4">A complete, customizable authentication system built for security, scalability, and great user experience — out of the box.</p>

          <div className="flex gap-4 justify-center ">
            <Button className="text-lg" asChild>
              <Link
                href="#">
                Get started
              </Link>
            </Button>
            <Button className="text-lg" variant={"outline"} asChild>
              <Link
                href="#">
                View code
              </Link>
            </Button>
          </div>

          <Separator className="w-1/4 my-12" />


          <h6 className="m-4 text-2xl font-semibold text-balance">
            Everything you need — out of the box
          </h6>

          <div className="my-6 grid grid-cols-3 gap-6 ">
            <Card>
              <CardHeader className="text-xl font-extrabold">
                Secure authorization
              </CardHeader>
              <CardContent className="mx-4">Built-in authentication flows with row-leves security, server-side confirmation, session handling, and Supabase best practices — secure by default.</CardContent>
              <CardFooter className="mt-auto">
                <FingerprintPattern size={32} />
              </CardFooter>
            </Card>

            <Card className="">
              <CardHeader className="text-xl font-extrabold">
                Auth Wrapper and Provider
              </CardHeader>
              <CardContent className="mx-4">Preconfigured provider and React-friendly wrapper that make developing auth-depend components simple, predictable, and easy to extend.</CardContent>
              <CardFooter className="mt-auto">
                <Usb size={32} />
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="text-xl font-extrabold">
                Types validation
              </CardHeader>
              <CardContent className="mx-4">Strongly typed validation for forms and API calls, reducing runtime errors and improving developer confidence.</CardContent>
              <CardFooter className="mt-auto">
                <BadgeCheck size={32} />
              </CardFooter>
            </Card>
          </div>

        </div>
      </main>
    </>
  )
} 
