"use client" // Remove later

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { IconWeight } from "@tabler/icons-react"
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
          <h1 className="absolute -top-2 rounded-2xl bg-background px-2 text-xl font-black text-foreground">
            سبد خرید
          </h1>
          <div className="flex h-[92%] w-[95%] flex-col items-center justify-start gap-3 rounded-2xl bg-secondary px-5 pt-10">
            <ScrollArea className="max-h-[83%] w-full rounded-2xl" dir="rtl">
              <div className="my-3 flex h-[15%] w-full items-center justify-start rounded-2xl bg-card p-5">
                <Image
                  src="/pink-donut.png"
                  width={90}
                  height={90}
                  alt="An image of a donut"
                  className="ml-2 rounded-2xl bg-muted"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-extrabold text-accent-foreground">
                    دونات شکلاتی
                  </h1>
                  <h2 className="text-sm">
                    <IconWeight className="ml-1 inline size-4 opacity-50" />
                    {`${(25).toLocaleString("fa-IR")} گرم`}
                  </h2>
                  <h2 className="font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</h2>
                </div>
                <div className="mr-auto flex flex-col items-center justify-center gap-2 text-2xl">
                  <span className="text-green-500">+</span>
                  <span>{(1).toLocaleString("fa-IR")}</span>
                  <span className="text-red-500">-</span>
                </div>
              </div>
              <div className="my-3 flex h-[15%] w-full items-center justify-start rounded-2xl bg-card p-5">
                <Image
                  src="/pink-donut.png"
                  width={90}
                  height={90}
                  alt="An image of a donut"
                  className="ml-2 rounded-2xl bg-muted"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-extrabold text-accent-foreground">
                    دونات شکلاتی
                  </h1>
                  <h2 className="text-sm">
                    <IconWeight className="ml-1 inline size-4 opacity-50" />
                    {`${(25).toLocaleString("fa-IR")} گرم`}
                  </h2>
                  <h2 className="font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</h2>
                </div>
                <div className="mr-auto flex flex-col items-center justify-center gap-2 text-2xl">
                  <span className="text-green-500">+</span>
                  <span>{(1).toLocaleString("fa-IR")}</span>
                  <span className="text-red-500">-</span>
                </div>
              </div>
              <div className="my-3 flex h-[15%] w-full items-center justify-start rounded-2xl bg-card p-5">
                <Image
                  src="/pink-donut.png"
                  width={90}
                  height={90}
                  alt="An image of a donut"
                  className="ml-2 rounded-2xl bg-muted"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-extrabold text-accent-foreground">
                    دونات شکلاتی
                  </h1>
                  <h2 className="text-sm">
                    <IconWeight className="ml-1 inline size-4 opacity-50" />
                    {`${(25).toLocaleString("fa-IR")} گرم`}
                  </h2>
                  <h2 className="font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</h2>
                </div>
                <div className="mr-auto flex flex-col items-center justify-center gap-2 text-2xl">
                  <span className="text-green-500">+</span>
                  <span>{(1).toLocaleString("fa-IR")}</span>
                  <span className="text-red-500">-</span>
                </div>
              </div>
              <div className="my-3 flex h-[15%] w-full items-center justify-start rounded-2xl bg-card p-5">
                <Image
                  src="/pink-donut.png"
                  width={90}
                  height={90}
                  alt="An image of a donut"
                  className="ml-2 rounded-2xl bg-muted"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-extrabold text-accent-foreground">
                    دونات شکلاتی
                  </h1>
                  <h2 className="text-sm">
                    <IconWeight className="ml-1 inline size-4 opacity-50" />
                    {`${(25).toLocaleString("fa-IR")} گرم`}
                  </h2>
                  <h2 className="font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</h2>
                </div>
                <div className="mr-auto flex flex-col items-center justify-center gap-2 text-2xl">
                  <span className="text-green-500">+</span>
                  <span>{(1).toLocaleString("fa-IR")}</span>
                  <span className="text-red-500">-</span>
                </div>
              </div>
              <div className="my-3 flex h-[15%] w-full items-center justify-start rounded-2xl bg-card p-5">
                <Image
                  src="/pink-donut.png"
                  width={90}
                  height={90}
                  alt="An image of a donut"
                  className="ml-2 rounded-2xl bg-muted"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-extrabold text-accent-foreground">
                    دونات شکلاتی
                  </h1>
                  <h2 className="text-sm">
                    <IconWeight className="ml-1 inline size-4 opacity-50" />
                    {`${(25).toLocaleString("fa-IR")} گرم`}
                  </h2>
                  <h2 className="font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</h2>
                </div>
                <div className="mr-auto flex flex-col items-center justify-center gap-2 text-2xl">
                  <span className="text-green-500">+</span>
                  <span>{(1).toLocaleString("fa-IR")}</span>
                  <span className="text-red-500">-</span>
                </div>
              </div>
              <div className="my-3 flex h-[15%] w-full items-center justify-start rounded-2xl bg-card p-5">
                <Image
                  src="/pink-donut.png"
                  width={90}
                  height={90}
                  alt="An image of a donut"
                  className="ml-2 rounded-2xl bg-muted"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-extrabold text-accent-foreground">
                    دونات شکلاتی
                  </h1>
                  <h2 className="text-sm">
                    <IconWeight className="ml-1 inline size-4 opacity-50" />
                    {`${(25).toLocaleString("fa-IR")} گرم`}
                  </h2>
                  <h2 className="font-bold">{`${(800000).toLocaleString("fa-IR")} تومان`}</h2>
                </div>
                <div className="mr-auto flex flex-col items-center justify-center gap-2 text-2xl">
                  <span className="text-green-500">+</span>
                  <span>{(1).toLocaleString("fa-IR")}</span>
                  <span className="text-red-500">-</span>
                </div>
              </div>
            </ScrollArea>
            <div className="mt-auto mb-3 flex w-full items-center justify-between gap-1 border-t-3 border-muted p-3">
              <div className="flex flex-col items-start justify-center gap-1">
                <span className="text-sm text-foreground/50">جمع سبد خرید</span>
                <span>{`${(2600000).toLocaleString("fa-IR")} تومان`}</span>
              </div>
              <Link href={"/"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="peer w-full rounded-full border-primary/30 bg-primary px-7 text-primary-foreground sm:w-auto"
                >
                  تکمیل سفارش
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Page
