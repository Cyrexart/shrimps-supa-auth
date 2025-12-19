'use client'

import { NextJsLogo } from "@/components/logos/next-js";
import { SupabaseLogo } from "@/components/logos/supabase";
import { TailwindcssLogo } from "@/components/logos/tailwindcss";
import { ReactLogo } from "@/components/logos/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, CodeXml, FingerprintPattern, Rocket, Usb } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden pt-24 lg:pt-36 ">
        <div className="w-9/10 lg:max-w-4xl flex flex-wrap mx-auto justify-center text-center">
          <div className="w-full justify-between">
            <section id="hero">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance my-6">
                Production-ready Supabase Authentication
              </h1>
              <p className="text-lg font-light text-balance my-4">
                A complete, customizable authentication system built for security, scalability, and great user experience — out of the box.
              </p>

              <div className="flex gap-4 justify-center ">
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
              <div className="my-16 flex justify-around">
                <NextJsLogo />
                <SupabaseLogo />
                <TailwindcssLogo />
                <ReactLogo />
              </div>

            </section>

            <section id="solutions">
              <Separator className="w-1/4 my-12" />


              <h6 className="m-4 text-2xl font-semibold 
                text-balance">
                Everything you need — out of the box
              </h6>

              <div className="mx-auto max-w-xl lg:max-w-full my-6 grid lg:grid-cols-3 gap-6 ">
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
