interface SpotlightCardProps {
    category: string
    title: string
    description: string
    image: string
  }
  
  export default function SpotlightCard({ category, title, description, image }: SpotlightCardProps) {
    return (
      <div className="rounded-xl overflow-hidden bg-[#1B1F24] border border-[#30363D] hover:border-[#6E7681] transition-colors">
        <div className="p-4 space-y-1">
          <div className="text-xs font-medium text-[#7D8590] uppercase">{category}</div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="text-sm text-[#7D8590]">{description}</p>
        </div>
        <div className="aspect-[16/9] relative">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    )
  }
  
  