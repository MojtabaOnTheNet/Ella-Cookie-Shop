import { Vazirmatn } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"

const fontPersian = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-persian",
})

export const metadata: Metadata = {
  title: "کوکی‌های الا",
  description: "...",
  robots: {
    index: false,
    follow: false,
  },
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
        <NextTopLoader color="#b67d43" showSpinner={false} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
