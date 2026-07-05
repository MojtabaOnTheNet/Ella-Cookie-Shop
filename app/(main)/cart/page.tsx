"use client" // Remove later

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  IconChevronLeft,
  IconLock,
  IconTrash,
  IconWeight,
} from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Page = () => {
  const [isEmpty, setIsEmpty] = useState(false) // For testing porpuses

  return (
    <>
      {isEmpty ? (
        <div className="relative flex h-[calc(100dvh-60px)] flex-col items-center justify-center">
          <Image
            src="/cart-empty.png"
            alt="An empty cart"
            width={400}
            height={400}
            loading="eager"
            className="absolute top-5"
          />
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-xl font-black text-foreground md:text-3xl">
              سبد خرید شما خالی است!
            </h1>
            <p className="text-sm text-foreground/60 md:text-xl">
              به سبد خود محصولی اضافه کنید:
            </p>
            <Link href={"/"}>
              <Button
                size="sm"
                variant="outline"
                className="peer w-full rounded-full border-primary/30 bg-transparent px-7 text-sm text-primary sm:w-auto md:text-lg"
              >
                مشاهده محصولات
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="relative mt-5 flex h-[calc(100dvh-60px)] flex-col items-center justify-start gap-3">
          <h1 className="absolute -top-2 border-b-2 bg-background px-5 pb-2 text-2xl font-black text-foreground md:text-3xl">
            سبد خرید
          </h1>
          <div className="flex h-[92%] w-full flex-col items-center justify-start gap-6 px-5 pt-15 md:h-[90%] md:w-[70%] md:justify-center xl:w-[40%]">
            <div className="flex min-h-[30%] w-full items-center justify-start rounded-3xl bg-card p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_10px_rgba(0,0,0,0.04)] md:min-h-[20%]">
              <Image
                src="/pink-donut.png"
                width={100}
                height={100}
                alt="An image of a donut"
                className="ml-2 rounded-2xl bg-accent/30 shadow-sm"
              />
              <div className="md:flex md:w-full md:gap-2">
                <div className="flex flex-col items-center justify-center gap-3 md:block md:w-full">
                  <h1 className="text-lg font-extrabold text-accent-foreground">
                    دونات شکلاتی
                  </h1>
                  <h2 className="text-sm">
                    <span className="mb-2 block w-fit rounded-3xl bg-primary/30 px-2 py-1 text-xs">
                      🍫 شکلاتی
                    </span>
                    <IconWeight className="ml-1 inline size-4 opacity-50" />
                    {`${(25).toLocaleString("fa-IR")} گرم`}
                  </h2>
                  <h2 className="font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</h2>
                </div>
                <div className="mt-5 flex items-center justify-center gap-2 rounded-full border-2 bg-muted px-3 text-xl md:mt-auto md:ml-4">
                  <span className="border-l-2 pl-3 text-green-500">+</span>
                  <span className="px-3">{(1).toLocaleString("fa-IR")}</span>
                  <span className="border-r-2 pr-3 text-red-500">-</span>
                </div>
              </div>
              <div className="mr-auto h-[8rem] border-r border-dashed pr-5 opacity-50"></div>
              <div className="flex flex-col items-center justify-start gap-2">
                <IconTrash className="text-red-500" />
                <span className="text-sm">حذف</span>
              </div>
            </div>
            <div className="mt-auto mb-3 flex w-full items-center justify-between gap-1 border-t-3 border-muted px-3 py-3 md:mt-0 md:mb-0 md:rounded-2xl md:border-0 md:bg-secondary">
              <div className="flex flex-col items-start justify-center gap-3">
                <span className="text-md font-bold text-foreground/80">
                  جمع سبد خرید
                </span>
                <span>
                  <span className="text-2xl font-black">
                    {`${(2600000).toLocaleString("fa-IR")}`}
                  </span>
                  <span className="pr-1 text-lg font-bold">تومان</span>
                </span>
              </div>
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <Link href={"/"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="peer relative w-full rounded-3xl border-primary/30 bg-primary px-11 py-6 text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:inset-shadow-sm sm:w-auto"
                  >
                    تکمیل سفارش
                    <IconChevronLeft className="absolute left-3" />
                  </Button>
                </Link>
                <div className="flex items-center justify-center gap-1 text-xs opacity-80">
                  <span>پرداخت امن و سریع</span>
                  <IconLock className="size-4 opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Page
