import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center gap-5">
      <h2 className="text-3xl font-black text-primary md:text-4xl">
        صفحه مورد نظر پیدا نشد!
      </h2>
      <Link href="/">
        <Button
          size="lg"
          variant="outline"
          className="peer w-full rounded-full border-primary/30 bg-transparent px-7 text-primary sm:w-auto"
        >
          بازگشت به خانه
        </Button>
      </Link>
      <h2 className="absolute -z-20 text-[10rem] font-black text-muted opacity-60 md:text-[15rem]">
        {(404).toLocaleString("fa-IR")}
      </h2>
    </div>
  )
}
