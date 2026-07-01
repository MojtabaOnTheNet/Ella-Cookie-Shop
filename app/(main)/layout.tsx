import { BottomNavbar } from "./_components/bottom-navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-3">
      {children}
      <BottomNavbar />
    </div>
  )
}
