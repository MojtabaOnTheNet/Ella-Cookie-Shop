"use client"

import { motion } from "motion/react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion-primitives"
import Image from "next/image"

const MotionImage = motion.create(Image)

const treats = [
  {
    name: "کوکی نیویورکی",
    desc: "ترد از بیرون، نرم و شکلاتی از درون",
    price: 200000,
    img: "/chocolate-chip-cookie.png",
    tag: "محبوب",
  },
  {
    name: "کوکی نیویورکی",
    desc: "ترد از بیرون، نرم و شکلاتی از درون",
    price: 200000,
    img: "/strawberry-cake-slice.png",
    tag: "فصلی",
  },
  {
    name: "کوکی نیویورکی",
    desc: "ترد از بیرون، نرم و شکلاتی از درون",
    price: 200000,
    img: "/macaron-stack.png",
    tag: null,
  },
  {
    name: "کوکی نیویورکی",
    desc: "ترد از بیرون، نرم و شکلاتی از درون",
    price: 200000,
    img: "/pink-donut.png",
    tag: null,
  },
  {
    name: "کوکی نیویورکی",
    desc: "ترد از بیرون، نرم و شکلاتی از درون",
    price: 200000,
    img: "/fudge-brownie.png",
    tag: "محبوب",
  },
  {
    name: "کوکی نیویورکی",
    desc: "ترد از بیرون، نرم و شکلاتی از درون",
    price: 200000,
    img: "/cinnamon-roll.png",
    tag: "جدید",
  },
]

export function MiniMenuSection() {
  return (
    <section id="sweets" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-accent-foreground uppercase">
            یک منوی شیرین
          </span>
          <h2 className="mt-3 text-4xl font-black text-balance text-primary sm:text-5xl">
            عصرانه‌هایی که بیخیالشون نمیشی
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            همه‌چیز تهیه شده طبق استانداردهای بهداشتی و کاملا خانگی
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treats.map((t, i) => (
            <Reveal key={`${t.name}-${i}`} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6"
              >
                <div className="relative mx-auto flex h-40 w-40 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-secondary/70 transition-transform duration-300 group-hover:scale-105" />
                  <MotionImage
                    src={t.img || "/placeholder.svg"}
                    alt={t.name}
                    width={144}
                    height={144}
                    className="relative h-36 w-36 object-contain drop-shadow-[0_12px_16px_rgba(80,45,20,0.25)]"
                    whileHover={{ rotate: 8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 250, damping: 12 }}
                  />
                  {t.tag && (
                    <span className="absolute top-0 right-0 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {t.tag}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-primary">
                  {t.name}
                </h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">
                    {t.price.toLocaleString("fa-IR")} تومان
                  </span>
                  <Button size="sm" className="rounded-full">
                    <Plus className="size-4" />
                    اضافه
                  </Button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
