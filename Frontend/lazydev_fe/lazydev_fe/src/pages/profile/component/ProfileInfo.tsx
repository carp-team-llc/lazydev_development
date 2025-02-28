export default function ProfileInfo() {
    return (
      <div className="w-[300px] min-h-screen border-r border-[#30363d] p-6 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-red-500 overflow-hidden">
            <img
              src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold mt-4">Calangthang</h1>
          <p className="text-sm text-gray-400">Nguyễn Văn Né Gà • he/him</p>
          <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
  
        {/* Stats */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-1">
            <span>10</span>
            <span className="text-gray-400">friends</span>
            <span className="mx-1">•</span>
            <span>10</span>
            <span className="text-gray-400">following</span>
          </div>
          <div>
            <span>10</span>
            <span className="text-gray-400"> projects participated in</span>
          </div>
          <div>
            <span>1,392</span>
            <span className="text-gray-400"> contributions</span>
          </div>
          <div>
            <span>1,213</span>
            <span className="text-gray-400"> merged requests</span>
          </div>
          <div>
            <span>762</span>
            <span className="text-gray-400"> bugs fixed</span>
          </div>
        </div>
  
        {/* Links */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>/carp-the-calangthang</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
            </svg>
            <span>https://calangthang.net</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.37V7z" />
            </svg>
            <span>12/23 - 01/09/2025</span>
          </div>
        </div>
  
        {/* Achievements */}
        <div>
          <h2 className="text-sm font-medium mb-2">Achievements</h2>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center"
              >
                <span className="text-xl">🏆</span>
              </div>
            ))}
          </div>
        </div>
  
        {/* Medals */}
        <div>
          <h2 className="text-sm font-medium mb-2">Medals</h2>
          <div className="grid grid-cols-4 gap-2">
            {[
              { year: "2024", medal: "🏆" },
              { year: "03/24", medal: "🥇" },
              { year: "MTA 24", medal: "🥈" },
              { year: "04/24", medal: "🥉" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 rounded-lg bg-[#21262d] flex items-center justify-center mx-auto">
                  <span className="text-xl">{item.medal}</span>
                </div>
                <div className="text-[10px] mt-1 text-gray-400">{item.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  