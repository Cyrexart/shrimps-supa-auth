import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface errorMessageProps {
  className?: string,
  error: string,
}

export function ErrorMessage({ className, error }: errorMessageProps) {
  return (
    <Alert variant={"destructive"} className={cn(className)}>
      <AlertCircle className="h-4 w-4"></AlertCircle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  )
}
