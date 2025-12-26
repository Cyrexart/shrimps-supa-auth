"use client"

// ------------ Utils ------------
import { useUserProfile } from "@/lib/hooks/use-user-profile";

// ------------ Components ------------
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

// ------------ Icons ------------

const steps = [
  {
    title: "Clone or Download",
    text: "Get the template code into your project ",
    code: "git clone your-repo-url my-app /n cd my-app"
  },
  {
    title: "Clone or Download",
    text: "Get the template code into your project ",
    code: "git clone your-repo-url my-app /n cd my-app"
  },
  {
    title: "Clone or Download",
    text: "Get the template code into your project ",
    code: "git clone your-repo-url my-app /n cd my-app"
  },
]

export default function Page() {
  const data = useUserProfile()

  const firstName = data?.name.split(' ')[0]
  return (
    <main className="min-h-screen overflow-hidden pt-12 lg:pt-24 ">
      <div className="border-b py-16 container">
        <div className="w-9/10 max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">
            Hello, {firstName}
          </h1>
          <p className="text-sm text-muted-foreground text-pretty max-w-xl">
            A production-ready Next.js starter with Supabase authentication, shadcn/ui components, and TypeScript. Get started in minutes.
          </p>
        </div>
      </div>
      <div className="w-9/10 max-w-5xl mx-auto py-8">
        <div className="flex">
          <h2 className="flex items-center text-2xl font-semibold gap-2">
            <Terminal className="w-6 h-6" />
            Quick Start
          </h2>
        </div>
        <div className="py-8 space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6" >
              <div className="flex items-start gap-4">
                <div className="flex shrink-0 font-bold items-center justify-center rounded-full w-8 h-8 bg-primary">{index + 1}</div>
                <div className="flex-1 min-w-0 space-y-2">
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                  <div className="relative group">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm border">
                      <code>{step.code}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="default"
                      cursor="pointer"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => navigator.clipboard.writeText(step.code)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}

        </div>
      </div>
    </main >
  )
}
