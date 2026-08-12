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
import { icons } from "lucide-react"
import { cn } from "@/lib/utils"

type ProductMenuProps = {
  categories: Category[]
}

const ProductMenu = ({ categories }: ProductMenuProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

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
                      className="bg-secondary/30 shadow-xs"
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
        <DrawerContent>
          {selectedProduct && (
            <>
              <DrawerHeader>
                <DrawerTitle className="mb-3 font-bold">
                  {selectedProduct.name}
                </DrawerTitle>

                <Image
                  src={selectedProduct.image || "/ella.png"}
                  alt={selectedProduct.name}
                  width={400}
                  height={400}
                  className="mx-auto rounded-md bg-muted object-cover"
                />
              </DrawerHeader>

              <div className="flex-1 p-4">
                <div className="rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full" />
              </div>
              <DrawerFooter>
                <span className="mx-auto text-xl font-semibold">
                  {Number(selectedProduct.price).toLocaleString("fa-IR")} تومان
                </span>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ProductMenu
