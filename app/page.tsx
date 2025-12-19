'use client'

// ------------ Utils ------------
import Link from "next/link";

// ------------ Components ------------
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

// ------------ Icons ------------
import {
  BadgeCheck,
  CodeXml,
  FingerprintPattern,
  Rocket,
  Usb
} from "lucide-react";


const logos = [
  {
    link: "https://nextjs.org/",
    name: "next.js",
    image: "/next-logo-wordmark--light.svg",
    imageDark: "/next-logo-wordmark--dark.svg"
  },
  {
    link: "https://supabase.com/",
    name: "supabase",
    image: "/supabase-logo-wordmark--light.svg",
    imageDark: "/supabase-logo-wordmark--dark.svg"
  },
  {
    link: "https://tailwindcss.com/",
    name: "tailwindcss",
    image: "/tailwindcss-logo-wordmark--light.svg",
    imageDark: "/tailwindcss-logo-wordmark--dark.svg"
  },
  {
    link: "https://react.com/",
    name: "react",
    image: "/react-logo-wordmark--light.svg",
    imageDark: "/react-logo-wordmark--dark.svg"
  },
]

export default function Home() {
  return (
    <>
      <main className="overflow-hidden pt-24 lg:pt-36 ">
        <div className="mx-auto flex w-9/10 flex-wrap justify-center text-center lg:max-w-4xl">
          <div className="w-full justify-between">
            <section id="hero">
              <h1 className="my-6 text-5xl font-extrabold tracking-tight text-balance md:text-7xl">
                Production-ready Supabase Authentication
              </h1>
              <p className="my-4 text-lg font-light text-balance">
                A complete, customizable authentication system built for security, scalability, and great user experience — out of the box.
              </p>

              <div className="flex justify-center gap-4 ">
                <Button className="text-base" cursor="pointer" asChild>
                  <Link
                    href="#">
                    <Rocket />
                    Get started
                  </Link>
                </Button>
                <Button className="text-base" variant="outline" cursor="pointer" asChild>
                  <Link
                    href="#">
                    <CodeXml />
                    View code
                  </Link>
                </Button>
              </div>
            </section>

            <section id="tools">
              <div className="items-center my-16 flex justify-around">
                {logos.map((logo) => (
                  <Logo
                    key={logo.name}
                    variant="link"
                    link={logo.link}
                    image={logo.image}
                    imageDark={logo.imageDark}
                    alt={logo.name + " logo"}
                  />
                ))}
              </div>
            </section>

            <section id="solutions">
              <Separator className="my-12 w-1/4" />

              <h6 className="m-4 text-2xl font-semibold text-balance">
                Everything you need — out of the box
              </h6>

              <div className="mx-auto my-6 grid max-w-xl gap-6 lg:max-w-full lg:grid-cols-3 ">
                <Card>
                  <CardHeader className="text-xl font-extrabold">
                    Secure authorization
                  </CardHeader>
                  <CardContent className="lg:mx-4">Built-in authentication flows with row-leves security, server-side confirmation, session handling, and Supabase best practices — secure by default.</CardContent>
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
            </section>
          </div>
        </div>
      </main >
    </>
  )
} 
