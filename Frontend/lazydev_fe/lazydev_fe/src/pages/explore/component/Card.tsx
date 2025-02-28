interface CardProps {
    icon: string
    title: string
    description: string
    verified?: boolean
    official?: boolean
    stats?: {
      stars?: string
      downloads?: string
    }
  }
  
  export default function Card({ icon, title, description, verified, official, stats }: CardProps) {
    return (
      <div className="rounded-xl bg-[#0D1117] border border-[#30363D] p-4 hover:border-[#6E7681] transition-colors">
        <div className="flex gap-3">
          <img src={icon || "/placeholder.svg"} alt="" className="w-8 h-8 rounded bg-white/5" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white truncate">{title}</span>
              {verified && (
                <div className="w-4 h-4 rounded-full bg-[#6E40C9] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                </div>
              )}
              {official && (
                <div className="w-4 h-4 rounded-full bg-[#238636] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                </div>
              )}
            </div>
            <p className="mt-1 text-sm text-[#7D8590] line-clamp-2">{description}</p>
            {stats && (
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#7D8590]" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                  </svg>
                  <span className="text-xs text-[#7D8590]">{stats.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#7D8590]" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2.75 14A1.75 1.75 0 011 12.25v-2.5a.75.75 0 011.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25v-2.5a.75.75 0 011.5 0v2.5A1.75 1.75 0 0113.25 14H2.75z" />
                    <path d="M7.25 7.689V2a.75.75 0 011.5 0v5.689l2.97-2.97a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 5.78a.75.75 0 111.06-1.06l2.97 2.97z" />
                  </svg>
                  <span className="text-xs text-[#7D8590]">{stats.downloads}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
  
  