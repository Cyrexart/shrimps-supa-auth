import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SignUpButton({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <Button
      className={className}
      variant="outline"
      cursor="pointer"
      asChild
      {...props}
    >
      <Link href="/auth/sign-up">Sign up</Link>
    </Button>
  );
}
