export default function TokensAndPoints() {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#161b22] rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
              <span className="text-black">🪙</span>
            </div>
            <div>
              <div className="text-sm text-gray-400">Your tokens</div>
              <div className="text-xl font-bold">1,2324</div>
            </div>
          </div>
          <button className="mt-4 w-full bg-yellow-500 text-black rounded px-4 py-2 text-sm font-medium">
            Exchange your tokens
          </button>
        </div>
        <div className="bg-[#161b22] rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="#f97316" className="w-full h-full">
                  <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z" />
                </svg>
              </div>
              <span className="text-2xl font-bold">3456</span>
            </div>
            <button className="text-sm text-blue-400 hover:underline">How to earn more points?</button>
          </div>
          <div className="mt-4 space-y-2">
            <div className="text-sm text-gray-400">Recent transactions</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Completed task "Profile"</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Completed task "Dashboard design"</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  