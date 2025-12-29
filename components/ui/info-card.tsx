'use client'

import { Check, Copy, Palette, FileCode, Database, FileText, Rocket, Settings, Terminal, Settings2 } from "lucide-react"
import { Button } from "./button"
import { Card } from "./card"
import { cn } from "@/lib/utils"
import { useState } from "react"

type Sizes = "small" | "medium" | "big"
export type IconName = "terminal" | "palette" | "filecode" | "file" | "database" | "rocket" | "settings" | "settings2"

const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  terminal: Terminal,
  palette: Palette,
  filecode: FileCode,
  file: FileText,
  database: Database,
  rocket: Rocket,
  settings: Settings,
  settings2: Settings2,
}

interface infoCardProps {
  className?: string,
  size?: Sizes
  number?: number
  icon?: IconName
  title?: string
  text?: string
  code?: string
}

const sizeConfig = {
  small: {
    card: "p-4 hover:border-primary/50 transition-colors",
    container: "flex items-start gap-3",
    cardSpacing: "space-y-1",
    titleSize: "text-base font-mono font-semibold",
    description: "text-sm text-muted-foreground",
    iconSize: "h-6 w-6",
    iconContainer: "h-7 w-7"
  },
  medium: {
    card: "p-6",
    container: "flex items-start gap-4",
    cardSpacing: "space-y-2",
    titleSize: "text-xl",
    description: "text-sm text-muted-foreground mb-3",
    iconSize: "h-5 w-5",
    iconContainer: "h-8 w-8"
  },
  big: {
    card: "p-8",
    container: "flex items-start gap-3",
    cardSpacing: "space-y-3",
    titleSize: "text-2xl",
    description: "text-sm text-muted-foreground",
    iconSize: "h-6 w-6",
    iconContainer: "h-10 w-10"
  }
} as const

export function InfoCard({ className, size = "medium", number, icon, title, text, code }: infoCardProps) {
  const styles = sizeConfig[size]
  const Icon = icon ? iconMap[icon] : null

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (code) {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  return (
    <Card className={cn(`${styles.card}`, className)} >
      <div className={cn(`${styles.container}`)}>
        {number ? (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{number}</div>
        ) : Icon && (
          <div className="shrink-0 mt-1 text-muted-foreground">
            <Icon className={styles.iconSize} />
          </div>
        )}
        <div className={`min-w-0 flex-1 ${styles.cardSpacing}`}>
          <h3 className={`${styles.titleSize}`}>{title}</h3>
          <p className={cn(styles.description)}>{text}</p>
          {code && (
            <div className="group relative">
              <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm">
                <code>{code}</code>
              </pre>

              <Button
                size="sm"
                variant="ghost"
                onClick={handleCopy}
                className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer hover:bg-background/80"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card >

  )
}
