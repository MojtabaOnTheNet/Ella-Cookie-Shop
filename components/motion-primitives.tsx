"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform, type MotionStyle } from "motion/react"

/**
 * Reveal children with a soft fade + rise when they scroll into view.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * A decorative sweet (cookie/cake/etc.) that drifts and rotates as the page
 * scrolls, creating a parallax "floating dessert" effect.
 */
export function FloatingSweet({
  src,
  alt,
  className,
  speed = 120,
  rotate = 40,
  style,
}: {
  src: string
  alt: string
  className?: string
  /** how many px the sweet travels over the scroll range (positive = up) */
  speed?: number
  /** degrees of rotation over the scroll range */
  rotate?: number
  style?: MotionStyle
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed])
  const r = useTransform(scrollYProgress, [0, 1], [-rotate, rotate])

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{ y, rotate: r, ...style }}
    >
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="h-full w-full select-none object-contain drop-shadow-[0_18px_22px_rgba(80,45,20,0.25)]"
        draggable={false}
      />
    </motion.div>
  )
}
