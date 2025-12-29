// ------------ Utils ------------
import { IconName } from "@/components/ui/info-card";
// ------------ Components ------------

import { UserName } from "@/components/ui/user-name";
import { InfoCard } from "@/components/ui/info-card";
// ------------ Icons ------------
import { ExternalLink, Layers, Terminal } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Clone or Download",
    text: "Get the template code into your project ",
    code: "git clone https://github.com/Cyrexart/shrimps-supa-auth my-app \ncd my-app"
  },
  {
    title: "Install Dependencies",
    text: "Install all required packages",
    code: "pnpm install \n# or npm install / yarn install"
  },
  {
    title: "Set up Supabase",
    text: "Create a new project at supabase.com and copy your project URL and anon key to .env.local",
    code: "# Create .env.local file with your Supabase credentials: \nNEXT_PUBLIC_SUPABASE_URL=<your-project-url> \nNEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key> \nNEXT_PUBLIC_SITE_URL=http://localhost:3000"
  },
  {
    title: "Run Development Server",
    text: "Start building your app",
    code: "pnpm dev \n# or npm run dev"
  },
]

const files: { title: string, text: string, icon: IconName }[] = [
  {
    title: "app/layout.tsx",
    text: "Root layout with fonts (Geist, Geist Mono), metadata, and global providers. Wraps all pages.",
    icon: "settings"
  },
  {
    title: "app/globals.css",
    text: "Global styles with Tailwind CSS v4 config and design tokens. Includes light/dark theme variables.",
    icon: "palette"
  },
  {
    title: "components/*",
    text: "Reusable shadcn/ui (Button, Card, Input, etc.) and custom components. Pre-configured and theme-aware.",
    icon: "filecode"
  },
  {
    title: "lib/actions/auth.ts",
    text: "Auth-related actions for signing in, registering users, and handling third-party login flows. Centralizes auth logic and keeps UI components clean.",
    icon: "settings"
  },
  {
    title: "lib/hooks/use-user-profile.ts",
    text: "Custom hook for retrieving and managing the current user’s profile state. Simplifies user-aware UI and reactive updates.",
    icon: "database"
  },
  {
    title: "lib/settings/auth.ts",
    text: "Configuration for authentication UI behavior and appearance. Defines how auth flows look and behave across the app.",
    icon: "settings2"
  },
  {
    title: "lib/supabase/client.ts",
    text: "Browser-side Supabase client using @supabase/ssr. Used in Client Components for auth.",
    icon: "database"
  },
  {
    title: "lib/supabase/server.ts",
    text: "Server-side Supabase client for Server Components, Route Handlers and Route Handlers.",
    icon: "database"
  },
  {
    title: "lib/supabase/proxy.ts",
    text: "Abstraction layer for database calls. Encapsulates queries and access rules to keep data access predictable and maintainable.",
    icon: "database"
  },
  {
    title: "lib/types/*",
    text: "Shared types, constants, and validation schemas used across the app. Ensures consistent data shapes and reduces runtime errors.",
    icon: "settings2"
  },
  {
    title: "lib/utils.ts",
    text: "Helper utilities including cn() for conditional class names with clsx and tailwind-merge.",
    icon: "settings"
  },
]

const links = [
  {
    name: "Supabase Auth Documentation",
    link: "https://supabase.com/docs/guides/auth"
  },
  {
    name: "Next.js App Router Guide",
    link: "https://nextjs.org/docs/app"
  },
  {
    name: "shadcn/ui Components",
    link: "https://ui.shadcn.com/"
  },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden lg:py-16">
      <div className="border-b">
        <div className="mx-auto w-9/10 max-w-4xl px-4 py-16">
          <UserName className="mb-8 text-5xl font-bold" text="Hello, " />
          <p className="max-w-xl text-base text-balance text-muted-foreground">
            A production-ready Next.js starter with Supabase authentication, shadcn/ui components, and TypeScript. Get started in minutes.
          </p>
        </div>
      </div>
      <div className="mx-auto w-9/10 max-w-4xl py-12 px-4">
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-3xl font-semibold mb-6">
            <Terminal className="h-7 w-7" />
            Quick Start
          </h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <InfoCard
                key={index}
                className=""
                number={index + 1}
                title={step.title}
                text={step.text}
                code={step.code}
              />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-3xl font-semibold mb-6">
            <Layers className="h-7 w-7" />
            File Structure Guide
          </h2>
          <div className="space-y-4">
            {files.map((file, index) => (
              <InfoCard
                key={index}
                className=""
                size="small"
                icon={file.icon}
                title={file.title}
                text={file.text}
              />
            ))}
          </div>
        </section>
        <section className="mt-16 p-6 bg-muted/30 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span className="group-hover:underline">{link.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main >
  )
}
