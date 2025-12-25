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
  Component,
  Database,
  Paintbrush,
  Rocket,
  ShieldCheck,
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

const iconSize = 64

const cards = [
  {
    name: "Polished UI",
    description: "A clean, modern interface out of the box. Easy to customize, easy to extend — focused on shipping, not styling from scratch.",
    icon: <Paintbrush size={iconSize} />
  }, {
    name: "Flexible components",
    description: "Accessible, scalable, reusable components you own — integrate them into any app in minutes.",
    icon: <Component size={iconSize} />
  }, {
    name: "Type Safety",
    description: "Schemas define validation for forms and API calls — fewer bugs, no guesswork.",
    icon: <BadgeCheck size={iconSize} />
  }, {
    name: "PostgreSQL Database",
    description: "A powerful, open-source backend-as-a-service database with built-in auth, real-time subscriptions, and migrations — ideal for fast building and scaling.",
    icon: <Database size={iconSize} />
  }, {
    name: "Secure by default",
    description: "Built-in authentication flows with row-level security, server-side confirmation, and session handling — keeping your data safe without the struggle.",
    icon: <ShieldCheck size={iconSize} />
  },
]

export default function Home() {
  return (
    <>
      <main className="overflow-hidden pt-24 lg:pt-36 ">
        <div className="mx-auto flex w-9/10 flex-wrap justify-center text-center lg:max-w-4xl">
          <div className="w-full justify-between">
            <section id="hero">
              <h1 className="my-6 text-5xl text-ellipsis font-extrabold tracking-tight text-balance md:text-7xl">
                Authentication<span className="text-primary"> built for developers </span>
              </h1>
              <p className="my-4 mx-auto max-w-2/3 text-lg font-semibold text-pretty text-muted-foreground">
                Stop configuring and start innovating. Securely build, deploy and scale authentication with <span className="text-foreground">row-level security</span>, <span className="text-foreground">type safety </span> and <span className="text-foreground"> React-friendly </span> components.
              </p>

              <div className="flex justify-center gap-4 ">
                <Button className="text-base font-semibold" cursor="pointer" asChild>
                  <Link href="#">
                    <Rocket />
                    Get started
                  </Link>
                </Button>
                <Button className="text-base" variant="outline" cursor="pointer" asChild>
                  <Link href="#">
                    <CodeXml />
                    View code
                  </Link>
                </Button>
              </div>
            </section>

            <section id="tools">
              <div className="my-16 flex items-center justify-around">
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

              <div className="my-16 space-y-4">
                <h6 className="text-5xl font-bold text-balance tracking-tight">
                  Everything you need to ship fast
                </h6>
                <p className="text-sm font-semibold text-muted-foreground">
                  Production-ready authentication with all the features developers need
                </p>
              </div>

              <div className="mx-auto my-6 grid gap-2 grid-cols-6 ">
                {cards.map((card, i) => (
                  <Card key={card.name}
                    className={`col-span-full border-3 md:hover:shadow-md md:hover:shadow-primary bg-transparent duration-300 hover:border-primary lg:col-span-2 ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                    <CardHeader className="flex flex-col items-center justify-center text-center text-2xl font-extrabold" >
                      <div className="mt-2 mb-4 text-primary">{card.icon} </div>
                      {card.name}
                    </CardHeader>
                    <CardContent className="text-pretty">
                      {card.description}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main >
    </>
  )
} 
