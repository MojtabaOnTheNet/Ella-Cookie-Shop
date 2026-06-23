"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { Cookie, ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { label: "سفارش", href: "#order" },
  { label: "آماده‌سازی", href: "#process" },
  { label: "شیرینی‌ها", href: "#sweets" },
  { label: "خانه", href: "#home" },
]

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
        <div className="mx-auto hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-md relative font-medium text-foreground/80 transition-colors hover:text-primary"
              onClick={() => setActive(l.label)}
            >
              {l.label}
              {active === l.label && (
                <motion.div
                  layoutId="chocolate-underline"
                  className="absolute right-0 left-0 h-[4px] rounded-full bg-linear-to-r from-amber-800 via-amber-900 to-yellow-700 blur-[0.3px]"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="z-50 flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex size-10 items-center justify-center rounded-full text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="duration-300border-t fixed inset-x-0 top-0 z-50 border-border bg-background px-4 py-4 transition-all md:hidden">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex size-10 items-center justify-center rounded-full text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <X className="size-5" />
          </button>
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-base font-medium text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
