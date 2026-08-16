import CategoryNavbar from "./category-navbar"
import ProductMenu from "./product-menu"
import products from "@/mock/products"
import { ShoppingCartSection } from "./shopping-cart-section"

const getData = async () => {
  return await products
}

const MenuSection = async () => {
  const data = await getData()
  const categories = data.categories

  return (
    <>
      <div className="relative mt-5 flex flex-col items-center justify-center gap-3">
        <h1 className="absolute -top-2 border-b-2 bg-background px-5 pb-2 text-2xl font-black text-foreground md:text-3xl">
          شیرینیجات الا
        </h1>

        <div className="w-full px-2 pt-30 lg:w-[50%]">
          <CategoryNavbar categories={categories} />

          <ProductMenu categories={categories} />
        </div>
      </div>
      <ShoppingCartSection />
    </>
  )
}

export default MenuSection
