import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function Page() {
  return (
    <div className="m-24 mx-auto flex flex-col gap-4 w-fit items-center justify-center">
      <h1 className="text-4xl">An Unknown Error occured</h1>
      <Alert variant={"destructive"}>
        <AlertCircle className="h-6 w-6"></AlertCircle>
        <AlertDescription className="text-base">
          Try to:
          <ul className="list-disc">
            <li>Check your credential</li>
            <li>Check your nternet connection </li>
            <li>Try again later</li>
          </ul>

        </AlertDescription>
      </Alert>
    </div>
  )
}
