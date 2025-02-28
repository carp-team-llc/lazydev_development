import type React from "react"
interface SectionProps {
  title: string
  viewAll?: boolean
  children: React.ReactNode
}

export default function Section({ title, viewAll = false, children }: SectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-lg font-medium">{title}</h2>
        {viewAll && (
          <a href="#" className="text-[#2F81F7] hover:text-[#409FFF] text-sm">
            View all
          </a>
        )}
      </div>
      {children}
    </div>
  )
}

