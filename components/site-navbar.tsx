"use client"

import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import "hamburgers/dist/hamburgers.min.css"

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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 m-5 h-15 rounded-3xl transition-all duration-300 md:mx-auto md:max-w-[90vw] lg:max-w-[75vw] ${
          scrolled
            ? "bg-background/50 ring-2 ring-border backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-full items-center justify-between px-4 py-6 sm:px-6">
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

          <div className="z-50 flex items-center justify-center md:hidden">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className={`hamburger hamburger--collapse ${open ? "is-active" : ""} flex scale-60 items-center justify-center rounded-full p-0`}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <div className="z-50 flex items-center justify-center gap-2 md:hidden">
            Logo
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-x-0 top-20 z-50 m-5 rounded-3xl bg-background/50 px-4 py-6 ring-2 ring-border backdrop-blur-lg transition-all duration-300 md:hidden"
          >
            <div className="flex flex-col-reverse items-center justify-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg text-center text-2xl font-medium text-foreground hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
