

export default function HeroSection() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-gradient-to-b from-yellow-500 via-yellow-400 to-gray-900">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Discover and collect rare artworks by world class artists
        </h1>
        <div className="w-full max-w-md">
          <div className="relative">
            <input
              type="search"
              placeholder="Search for NFT item"
              className="w-full rounded-full bg-white/10 py-3 pl-12 pr-4 text-white placeholder-white backdrop-blur-sm"
            />
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          
        </div>
      </div>
    </div>
  )
}

