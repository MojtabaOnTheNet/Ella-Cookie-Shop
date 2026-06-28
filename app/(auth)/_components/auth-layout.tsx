import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AuthLayoutProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export function AuthLayout({ children, className, ...props }: AuthLayoutProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          {children}

          <div className="relative hidden bg-muted md:block">
            <img
              src="/hero-cookies-plate.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
