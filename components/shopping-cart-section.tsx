"use client"
import { useCartStore } from "@/hooks/useCartStore"
import { ShoppingCart } from "lucide-react"

export function ShoppingCartSection() {
  const count = useCartStore((s) => s.totalCount())
  return (
    <>
      <div className="fixed right-5 bottom-5">
        <button className="relative rounded-full bg-card p-3">
          <ShoppingCart size={30} />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              {count.toLocaleString("fa-ir")}
            </span>
          )}
        </button>
      </div>
    </>
  )
}
