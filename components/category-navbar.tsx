"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Category } from "@/mock/products"

interface Props {
  categories: Category[]
}

export default function CategoryNavbar({ categories }: Props) {
  const [active, setActive] = useState(categories[0]?.id)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)

        if (visible) {
          setActive(visible.target.id)
        }
      },
      {
        threshold: 0.5,
      }
    )

    categories.forEach((category) => {
      const element = document.getElementById(category.id)

      if (element) observer.observe(element)
    })

    // Detecting if page is scrolled
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [categories])

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 top-3 z-50 mx-5 mt-14 rounded-2xl p-1 transition-all duration-300",
          scrolled &&
            "mt-0 bg-background/50 ring-2 ring-border backdrop-blur-md"
        )}
      >
        {/* <InputGroup className="bg-card ring-1 ring-border md:w-sm">
          <InputGroupInput placeholder="جستجو بین محصولات..." />
          <InputGroupAddon>
            <IconSearch />
          </InputGroupAddon>
        </InputGroup> */}
        <div className="flex items-center justify-around gap-5 md:justify-start md:gap-8">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`#${category.id}`}
              // onClick={() => setActive(category.id)}
              className={
                "flex size-15 flex-col items-center justify-center rounded-4xl bg-card text-card-foreground"
              }
            >
              <span>{category.emoji}</span>
              <span>{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
