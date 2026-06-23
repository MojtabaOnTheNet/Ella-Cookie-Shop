"use client"

import { motion } from "motion/react"
import { Star, ShoppingBag, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingSweet } from "@/components/motion-primitives"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-28 pb-20 sm:px-6 sm:pt-32"
    >
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-secondary-foreground"
        >
          <Heart className="size-4 fill-accent text-accent" />
          تهیه شده با عشق
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="bg-linear-to-l from-primary to-primary/70 bg-clip-text pt-6 text-5xl leading-[1.02] font-black tracking-tight text-balance text-transparent sm:text-6xl md:text-7xl"
        >
          شیرینی‌های خانگی، از نوعی که عاشقش میشی!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-col items-center justify-center gap-3"
        >
          <Button
            size="lg"
            variant="outline"
            className="peer w-full rounded-full border-primary/30 bg-transparent px-7 text-primary sm:w-auto"
          >
            مشاهده منو
          </Button>
          <div className="flex flex-col items-center justify-center transition-all duration-200 ease-in-out peer-hover:translate-y-2">
            <ChevronDown className="h-6 w-6 text-primary" />
            <ChevronDown className="h-4 w-4 text-accent-foreground" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
