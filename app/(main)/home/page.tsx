import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"
import {
  IconCategory2,
  IconChevronLeft,
  IconHeart,
  IconSearch,
} from "@tabler/icons-react"
import Image from "next/image"

const Page = () => {
  return (
    <div className="relative mt-5 flex h-[calc(100dvh-60px)] flex-col items-center justify-start gap-3">
      <h1 className="absolute -top-2 border-b-2 bg-background px-5 pb-2 text-2xl font-black text-foreground md:text-3xl">
        شیرینیجات الا
      </h1>
      <div className="w-full px-2 pt-15 lg:w-[80%] xl:w-[60%]">
        <InputGroup className="bg-card ring-1 ring-border md:w-sm">
          <InputGroupInput placeholder="جستجو بین محصولات..." />
          <InputGroupAddon>
            <IconSearch />
          </InputGroupAddon>
        </InputGroup>
        <div className="flex items-center justify-between pt-5 md:justify-start md:gap-8">
          <div className="flex size-15 flex-col items-center justify-center rounded-4xl bg-primary text-primary-foreground">
            <IconCategory2 />
            <span>همه</span>
          </div>
          <div className="flex size-15 flex-col items-center justify-center rounded-4xl bg-card text-card-foreground">
            <span>🍩</span>
            <span>دونات</span>
          </div>
          <div className="flex size-15 flex-col items-center justify-center rounded-4xl bg-card text-card-foreground">
            <span>🍰</span>
            <span>کیک</span>
          </div>
          <div className="flex size-15 flex-col items-center justify-center rounded-4xl bg-card text-card-foreground">
            <span>🍪</span>
            <span>کوکی</span>
          </div>
          <div className="flex size-15 flex-col items-center justify-center rounded-4xl bg-card text-card-foreground">
            <span>🍫</span>
            <span>شکلات</span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between pt-7">
            <div className="flex items-center justify-center gap-1">
              <IconHeart className="size-5 text-red-400" />
              <span className="font-extrabold">محبوب‌ترین‌ها</span>
            </div>
            <div className="flex items-center justify-center text-primary">
              <span className="text-sm">مشاهده همه</span>
              <IconChevronLeft className="size-4" />
            </div>
          </div>
          <ItemGroup className="grid h-full w-full grid-cols-2 pt-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
            <Item variant="outline" className="flex bg-card">
              <ItemHeader>
                <Image
                  src="/pink-donut.png"
                  alt="Image of a donut"
                  width={140}
                  height={140}
                  className="aspect-square w-full rounded-sm bg-muted object-cover"
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle className="mx-auto text-lg font-extrabold">
                  دونات شکلاتی
                </ItemTitle>
                <ItemDescription className="text-center text-lg font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</ItemDescription>
              </ItemContent>
              <ItemFooter>
                <Button className="mx-auto w-full bg-primary">
                  <span>افزودن</span>
                  <span>+</span>
                </Button>
              </ItemFooter>
            </Item>
            <Item variant="outline" className="flex bg-card">
              <ItemHeader>
                <Image
                  src="/pink-donut.png"
                  alt="Image of a donut"
                  width={140}
                  height={140}
                  className="aspect-square w-full rounded-sm bg-muted object-cover"
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle className="mx-auto text-lg font-extrabold">
                  دونات شکلاتی
                </ItemTitle>
                <ItemDescription className="text-center text-lg font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</ItemDescription>
              </ItemContent>
              <ItemFooter>
                <Button className="mx-auto w-full bg-primary">
                  <span>افزودن</span>
                  <span>+</span>
                </Button>
              </ItemFooter>
            </Item>
            <Item variant="outline" className="flex bg-card">
              <ItemHeader>
                <Image
                  src="/pink-donut.png"
                  alt="Image of a donut"
                  width={140}
                  height={140}
                  className="aspect-square w-full rounded-sm bg-muted object-cover"
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle className="mx-auto text-lg font-extrabold">
                  دونات شکلاتی
                </ItemTitle>
                <ItemDescription className="text-center text-lg font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</ItemDescription>
              </ItemContent>
              <ItemFooter>
                <Button className="mx-auto w-full bg-primary">
                  <span>افزودن</span>
                  <span>+</span>
                </Button>
              </ItemFooter>
            </Item>
            <Item variant="outline" className="flex bg-card">
              <ItemHeader>
                <Image
                  src="/pink-donut.png"
                  alt="Image of a donut"
                  width={140}
                  height={140}
                  className="aspect-square w-full rounded-sm bg-muted object-cover"
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle className="mx-auto text-lg font-extrabold">
                  دونات شکلاتی
                </ItemTitle>
                <ItemDescription className="text-center text-lg font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</ItemDescription>
              </ItemContent>
              <ItemFooter>
                <Button className="mx-auto w-full bg-primary">
                  <span>افزودن</span>
                  <span>+</span>
                </Button>
              </ItemFooter>
            </Item>
            <Item variant="outline" className="flex bg-card">
              <ItemHeader>
                <Image
                  src="/pink-donut.png"
                  alt="Image of a donut"
                  width={140}
                  height={140}
                  className="aspect-square w-full rounded-sm bg-muted object-cover"
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle className="mx-auto text-lg font-extrabold">
                  دونات شکلاتی
                </ItemTitle>
                <ItemDescription className="text-center text-lg font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</ItemDescription>
              </ItemContent>
              <ItemFooter>
                <Button className="mx-auto w-full bg-primary">
                  <span>افزودن</span>
                  <span>+</span>
                </Button>
              </ItemFooter>
            </Item>
          </ItemGroup>
        </div>
      </div>
    </div>
  )
}

export default Page
