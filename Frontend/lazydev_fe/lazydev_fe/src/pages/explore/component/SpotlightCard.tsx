interface SpotlightCardProps {
    category: string
    title: string
    description: string
    image: string
  }
  
  export default function SpotlightCard({ category, title, description, image }: SpotlightCardProps) {
    return (
      <div className="rounded-xl overflow-hidden bg-[#0D1117] border border-[#30363D] hover:border-[#6E7681] transition-colors">
        <div className="p-4 pb-3 space-y-1.5">
          <div className="text-xs font-medium text-[#7D8590] uppercase tracking-wide">{category}</div>
          <h3 className="text-base font-semibold text-white leading-snug">{title}</h3>
          <p className="text-sm text-[#7D8590] leading-snug">{description}</p>
        </div>
        <div className="aspect-video relative bg-[#1B1F24]">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-contain" />
        </div>
      </div>
    )
  }
  
  