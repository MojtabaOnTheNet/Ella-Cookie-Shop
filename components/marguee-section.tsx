import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const sweets = [
  "شکلات",
  "کیک",
  "سن سباستین",
  "کوکی",
  "نون خامه‌ای",
  "کیک خامه‌ای",
  "رد ولوت",
  "براونی",
  "بیسکویت",
  "شکلات",
  "کیک",
  "سن سباستین",
  "کوکی",
  "نون خامه‌ای",
  "کیک خامه‌ای",
  "رد ولوت",
  "براونی",
  "بیسکویت",
]

const middle = Math.ceil(sweets.length / 2)

const firstRow = sweets.slice(0, middle)
const secondRow = sweets.slice(middle)

export function MargueeSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-foreground">
      <Marquee className="[--duration:40s]">
        {firstRow.map((sweet) => (
          <span
            key={sweet}
            className="flex items-center gap-10 p-2 text-2xl font-black text-primary"
          >
            {sweet}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:45s]">
        {secondRow.map((sweet) => (
          <span
            key={sweet}
            className="flex items-center gap-10 p-2 text-2xl font-black text-primary"
          >
            {sweet}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-foreground"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-foreground"></div>
    </div>
  )
}
