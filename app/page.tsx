import { HeroSection } from "@/components/hero-section"
import { MargueeSection } from "@/components/marguee-section"
import { MiniMenuSection } from "@/components/mini-menu-section"
import { SiteNavbar } from "@/components/site-navbar"

export default function Page() {
  return (
    <>
      <SiteNavbar />
      <HeroSection />
      <MargueeSection />
      <MiniMenuSection />
    </>
  )
}
