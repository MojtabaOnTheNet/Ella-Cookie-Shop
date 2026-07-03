import React from "react"
import { FloatingDock } from "@/components/ui/floating-dock"
import {
  IconBasket,
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconSearch,
  IconTerminal2,
  IconUser,
} from "@tabler/icons-react"

export function BottomNavbar() {
  const links = [
    {
      title: "خانه",
      icon: <IconHome className="h-full w-full" />,
      href: "/home",
    },
    {
      title: "جستجو",
      icon: <IconSearch className="h-full w-full" />,
      href: "/search",
    },
    {
      title: "سبد خرید",
      icon: <IconBasket className="h-full w-full" />,
      href: "/cart",
    },
    {
      title: "اکانت",
      icon: <IconUser className="h-full w-full" />,
      href: "/me",
    },
  ]
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 m-5 mx-auto h-15 max-w-[90%] rounded-3xl transition-all duration-300 md:max-w-sm">
      <FloatingDock items={links} />
    </div>
  )
}
