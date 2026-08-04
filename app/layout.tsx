import { Vazirmatn } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

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
      <body dir="rtl">{children}</body>
    </html>
  )
}
