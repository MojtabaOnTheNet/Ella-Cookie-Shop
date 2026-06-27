import { Vazirmatn } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

const fontPersian = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-persian",
})

export const metadata: Metadata = {
  title: "کوکی‌های الا",
  description: "...",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      suppressHydrationWarning
      className={cn("scroll-smooth antialiased", fontPersian.className)}
    >
      <body dir="rtl">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
