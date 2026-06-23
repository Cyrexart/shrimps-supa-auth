"use client"

import type React from "react";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface ThemeSwitcherProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function ThemeSwitcher({
  className,
  ...props
}: ThemeSwitcherProps) {
  const { setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      className={cn("relative overflow-hidden cursor-pointer", className)}
      {...props}
    >
      <SunIcon
        className="w-4 h-4 transition-all duration-300 dark:rotate-90 dark:scale-0 dark:opacity-0 rotate-0 scale-100 opacity-100"
      />
      <MoonIcon
        className="absolute w-4 h-4 transition-all duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100 -rotate-90 scale-0 opacity-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

