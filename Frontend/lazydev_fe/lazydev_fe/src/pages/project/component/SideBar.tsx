import { ChevronDown } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#373B53] p-6">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <span className="font-semibold text-lg">My.Task</span>
      </div>

      <nav className="space-y-1">
        <div className="group">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10">
            <span className="flex-1 text-left text-sm">Dashboard</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className="pl-10 mt-1 space-y-1">
            <button className="w-full text-left py-1 text-sm text-gray-400 hover:text-white"> Leader Board</button>
            <button className="w-full text-left py-1 text-sm text-gray-400 hover:text-white">Project Dashboard</button>
          </div>
        </div>
        {[
          "Projects",
          "Tickets",
          "Our Clients",
          "Employees",
          "Accounts",
          "Payroll",
          "App",
          "Other Pages",
          "UI Components",
        ].map((item) => (
          <button
            key={item}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
          >
            <span className="flex-1 text-left text-sm">{item}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-600 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
          </label>
          <span className="text-sm text-gray-300">Enable Dark Mode!</span>
        </div>
      </div>
    </div>
  )
}

