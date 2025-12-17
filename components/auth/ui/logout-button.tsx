import { signOut } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";

import { LogOutIcon } from "lucide-react";

export function LogOutButton() {
  return (
    <Button onClick={signOut} className="cursor-pointer">
      <LogOutIcon />
    </Button>
  );
}
