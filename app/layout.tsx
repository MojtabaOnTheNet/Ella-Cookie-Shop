import { Vazirmatn } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontPersian = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-persian",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      suppressHydrationWarning
      className={cn("antialiased", fontPersian.className)}
    >
      <body dir="rtl">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
