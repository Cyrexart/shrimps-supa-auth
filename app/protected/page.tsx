// ------------ Utils ------------
import { IconName } from "@/components/ui/info-card";
// ------------ Components ------------

import { UserName } from "@/components/ui/user-name";
import { InfoCard } from "@/components/ui/info-card";
// ------------ Icons ------------
import { Layers, Terminal } from "lucide-react";

const steps = [
  {
    title: "Clone or Download",
    text: "Get the template code into your project ",
    code: "git clone your-repo-url my-app \ncd my-app"
  },
  {
    title: "Install Dependencies",
    text: "Install all required packages",
    code: "pnpm install \n# or npm install / yarn install"
  },
  {
    title: "Set up Supabase",
    text: "Create a new project at supabase.com and copy your project URL and anon key to .env.local",
    code: "# Create .env.local file with your Supabase credentials: \nNEXT_PUBLIC_SUPABASE_URL=<your-project-url> \nNEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key> \nNEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000"
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
    title: "components/ui/*",
    text: "Reusable shadcn/ui components (Button, Card, Input, etc.). Pre-configured and theme-aware.",
    icon: "filecode"
  },
  {
    title: "lib/utils.ts",
    text: "Helper utilities including cn() for conditional class names with clsx and tailwind-merge.",
    icon: "settings"
  },
  {
    title: "lib/supabase/client.ts",
    text: "Browser-side Supabase client using @supabase/ssr. Used in Client Components for auth.",
    icon: "database"
  },
  {
    title: "lib/supabase/server.ts",
    text: "Server-side Supabase client for Server Components, Route Handlers, and Server Actions.",
    icon: "database"
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
      </div>
    </main >
  )
}
