"use client"

const Card = () => (
  <div className="bg-white rounded-xl shadow-2xl p-4 mb-8">
     <img src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg" alt="Your Image" className="w-full h-32 object-cover rounded-lg mb-3" />
    
    <div className="flex justify-between items-center">
      <div className="text-sm text-gray-600">
        ₹ 3,256
        <div className="text-xs text-gray-400">Pull request</div>
      </div>
      <div className="text-sm text-gray-600">
        ₹ 3,256
        <div className="text-xs text-gray-400">Pull request</div>
      </div>
    </div>
  </div>
)

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-yellow-500 via-yellow-400 to-gray-900 pt-16 pb-32">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building greatness,
              <br />
              one contribution at a time
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              Collaborate on open source, scale your project globally, and inspire innovation — powered by a thriving
              developer community.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-yellow-500">
                Join now
              </button>
              <button className="bg-white/10 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-white/20 backdrop-blur-sm">
                Explore Open Source
              </button>
            </div>
          </div>

          {/* Right Images with Animation */}
          <div className="relative lg:absolute lg:right-0 lg:top-8 w-full lg:w-1/2 xl:w-1/3 mt-8 lg:mt-0">
            <div className="relative h-[400px] sm:h-[500px] w-full overflow-visible">
              {/* Clipping and fade effect container */}
              <div className="absolute inset-0 clip-fade-container">
                <div className="absolute inset-0 origin-center custom-rotate-15 -translate-x-1/4">
                  {/* First Column - Moving Up */}
                  <div className="absolute -top-1/4 -left-[15%] sm:-left-[10%] md:-left-[5%] w-64 animate-float-up">
                    {[...Array(8)].map((_, index) => (
                      <Card key={`up-${index}`} />
                    ))}
                  </div>

                  {/* Second Column - Moving Down */}
                  <div className="absolute -top-1/4 -right-[20%] sm:-right-[15%] md:-right-[10%] w-64 animate-float-down">
                    {[...Array(8)].map((_, index) => (
                      <Card key={`down-${index}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

