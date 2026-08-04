import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import Image from "next/image"
import CategoryNavbar from "./category-navbar"
import products from "@/mock/products"

const getData = () => {
  console.log(products)
  return products
}

const MenuSection = async () => {
  const data = await getData()
  const categories = data.categories

  return (
    <div className="relative mt-5 flex flex-col items-center justify-start gap-3">
      <h1 className="absolute -top-2 border-b-2 bg-background px-5 pb-2 text-2xl font-black text-foreground md:text-3xl">
        شیرینیجات الا
      </h1>
      <div className="w-full px-2 pt-30 lg:w-[80%] xl:w-[60%]">
        <CategoryNavbar categories={categories} />
        <div className="mt-1 space-y-10">
          {categories.map((category) => (
            <section
              key={category.name}
              id={category.id}
              className="scroll-mt-25"
            >
              <h2 className="mb-3 text-2xl font-black">
                {category.emoji} {category.name}
              </h2>

              <ItemGroup className="grid h-full w-full grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                {category.products.map((product) => (
                  <Item key={product.name} variant="outline">
                    <ItemMedia variant={"image"} className="size-15">
                      <Image
                        src="/ella.png"
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
                          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
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
                ))}
              </ItemGroup>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuSection
