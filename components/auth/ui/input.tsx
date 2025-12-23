import { UseFormReturn } from "react-hook-form"
import { cn } from "@/lib/utils"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"


interface authFormFieldProps {
  form?: UseFormReturn
  name?: string
  title?: string
  placeholder?: string
  isOptional?: boolean
  Icon?: React.ElementType
  loading?: boolean
  className?: string
}

export function AuthFormField(
  {
    form,
    name = "",
    title,
    placeholder,
    isOptional = false,
    Icon,
    loading = false,
    className,
  }: authFormFieldProps
) {
  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          {title && (
            <FormLabel className="text-base font-bold">
              {title}
              {!isOptional && (
                <span className="text-red-500">*</span>
              )}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                placeholder={placeholder}
                disabled={loading}
                className={`peer block w-full rounded-md border py-2.25 ${Icon && 'pl-10'} text-sm`}
              />
              {Icon && (
                <Icon className="pointer-events-none absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2" />
              )
              }
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
