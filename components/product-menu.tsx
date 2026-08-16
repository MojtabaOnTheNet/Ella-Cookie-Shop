"use client"

import { useState } from "react"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import Image from "next/image"
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer"
import type { Category, Product } from "@/mock/products"
import { Cookie, icons, Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { useCartStore } from "@/hooks/useCartStore"

type ProductMenuProps = {
  categories: Category[]
}

const ProductMenu = ({ categories }: ProductMenuProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const addItem = useCartStore((s) => s.addItem)
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const items = useCartStore((s) => s.items)

  const cartItem = selectedProduct
    ? items.find((i) => i.product.name === selectedProduct.name)
    : undefined
  const quantityInCart = cartItem?.quantity ?? 0

  return (
    <>
      <div className="mt-1 space-y-10">
        {categories.map((category, index) => {
          const Icon = icons[category.icon as keyof typeof icons]
          return (
            <figure
              key={category.id}
              id={category.id}
              className="relative flex scroll-mt-27 flex-col items-center"
            >
              <h2 className="mb-3 border-b-2 px-2 pb-2.5 text-3xl font-black">
                {category.name}
              </h2>

              <div
                className={cn(
                  "absolute -z-10 text-primary opacity-15",
                  index % 2 === 0 ? "left-0" : "right-0"
                )}
              >
                <Icon size={200} />
              </div>

              <ItemGroup className="grid h-full w-full grid-cols-1 gap-3">
                {category.products.map((product) => (
                  <button
                    key={product.name}
                    type="button"
                    className="w-full text-right"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Item
                      variant="outline"
                      className="bg-linear-to-t from-secondary/60 to-secondary/20 shadow-xs"
                    >
                      <ItemMedia variant="image" className="size-15">
                        <Image
                          src={product.image || "/ella.png"}
                          alt={product.name}
                          width={100}
                          height={100}
                          className="bg-muted object-cover"
                        />
                      </ItemMedia>

                      <ItemContent>
                        <ItemTitle className="text-md font-extrabold">
                          {product.name}
                        </ItemTitle>

                        {product.tag && (
                          <ItemDescription>
                            <span className="rounded-full bg-accent px-3 text-xs font-semibold text-accent-foreground">
                              {product.tag}
                            </span>
                          </ItemDescription>
                        )}

                        {product.description && (
                          <ItemDescription className="text-md">
                            {product.description}
                          </ItemDescription>
                        )}

                        <ItemDescription className="text-md text-left font-bold">
                          {Number(product.price).toLocaleString("fa-IR")} تومان
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                  </button>
                ))}
              </ItemGroup>
            </figure>
          )
        })}
      </div>
      <Drawer
        open={selectedProduct !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProduct(null)
          }
        }}
      >
        <DrawerContent className="sm:mx-auto sm:w-xl">
          {selectedProduct && (
            <>
              <DrawerHeader>
                <Image
                  src={selectedProduct.image || "/ella.png"}
                  alt={selectedProduct.name}
                  width={300}
                  height={300}
                  className="mx-auto rounded-md bg-muted object-cover"
                />
                <DrawerTitle className="mx-auto mt-3 flex w-fit flex-col gap-2 text-xl font-bold">
                  <span>{selectedProduct.name}</span>
                  <span className="rounded-full bg-accent py-1 text-xs font-semibold text-accent-foreground">
                    {selectedProduct.tag}
                  </span>
                </DrawerTitle>
              </DrawerHeader>
              <div className="px-6">
                <div className="relative">
                  <hr className="absolute top-5 -z-10 w-full" />
                  <Cookie
                    size={40}
                    className="mx-auto bg-card px-2 text-accent"
                  />
                </div>
                <div className="mb-8 text-center">کوکی شکلات نرم و تازه!</div>
                <span className="space-x-1 text-xl font-semibold">
                  <span>
                    {Number(selectedProduct.price).toLocaleString("fa-IR")}
                  </span>
                  <span className="text-base">تومان</span>
                </span>
              </div>
              <DrawerFooter>
                {quantityInCart > 0 ? (
                  <div className="flex items-center justify-around gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        updateQuantity(selectedProduct.name, quantityInCart - 1)
                      }
                    >
                      <Minus className="size-4" />
                    </Button>
                    <span className="min-w-6 text-center font-bold">
                      {quantityInCart.toLocaleString("fa-ir")}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        updateQuantity(selectedProduct.name, quantityInCart + 1)
                      }
                    >
                      <Plus className="size-4" />
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => addItem(selectedProduct)}>
                    افزودن به سبد خرید
                  </Button>
                )}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ProductMenu
