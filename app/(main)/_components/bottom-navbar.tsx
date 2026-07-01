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
      icon: <IconHome className="h-full w-full text-muted-foreground" />,
      href: "#",
    },
    {
      title: "جستجو",
      icon: <IconSearch className="h-full w-full text-muted-foreground" />,
      href: "#",
    },
    {
      title: "سبد خرید",
      icon: <IconBasket className="h-full w-full text-muted-foreground" />,
      href: "#",
    },
    {
      title: "اکانت",
      icon: <IconUser className="h-full w-full text-muted-foreground" />,
      href: "#",
    },
  ]
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 m-5 mx-auto h-15 max-w-[90%] rounded-3xl transition-all duration-300 md:max-w-sm">
      <FloatingDock items={links} />
    </div>
  )
}
