// lib/store/cart.ts
import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "@/mock/products"

type CartItem = { product: Product; quantity: number }

type CartState = {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productName: string) => void
  updateQuantity: (productName: string, quantity: number) => void
  clearCart: () => void
  totalCount: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.product.name === product.name
          )
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.name === product.name
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            }
          }
          return { items: [...state.items, { product, quantity: 1 }] }
        }),
      removeItem: (productName) =>
        set((state) => ({
          items: state.items.filter((i) => i.product.name !== productName),
        })),
      updateQuantity: (productName, quantity) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.product.name === productName ? { ...i, quantity } : i
            )
            .filter((i) => i.quantity > 0),
        })),
      clearCart: () => set({ items: [] }),
      totalCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: () =>
        get().items.reduce(
          (sum, i) => sum + Number(i.product.price) * i.quantity,
          0
        ),
    }),
    { name: "cart-storage" } // localStorage key
  )
)
