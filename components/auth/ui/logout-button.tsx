import { signOut } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";

import { LogOutIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface logOutButtonProps {
  className?: string,
}

export function LogOutButton({ className }: logOutButtonProps) {
  return (
    <Button cursor="pointer" className={cn(className)} onClick={signOut} >
      <LogOutIcon />
    </Button>
  );
}
