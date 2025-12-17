import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LoginButton({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <Button
      className={className}
      variant="default"
      cursor="pointer"
      asChild
      {...props}
    >
      <Link href="/auth/login">Login</Link>
    </Button>
  );
}
