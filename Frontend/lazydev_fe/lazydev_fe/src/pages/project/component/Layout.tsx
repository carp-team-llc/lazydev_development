import type React from "react"
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex h-screen bg-[#1C1C1C] text-white">{children}</div>
}

