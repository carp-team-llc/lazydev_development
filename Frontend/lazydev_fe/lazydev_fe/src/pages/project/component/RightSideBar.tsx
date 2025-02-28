const interviews = [
    {
      name: "Natalie Gibson",
      role: "UI/UX Designer",
      time: "1:30 - 1:30",
    },
    {
      name: "Peter Piperg",
      role: "Web Designer",
      time: "9:00 - 1:30",
    },
    {
      name: "Robert Young",
      role: "PHP Developer",
      time: "1:30 - 2:30",
    },
    {
      name: "Victoria Vbell",
      role: "iOS Developer",
      time: "2:00 - 2:30",
    },
    {
      name: "Mary Butler",
      role: "Writer",
      time: "4:00 - 4:30",
    },
    {
      name: "Youn Bel",
      role: "Jump SE",
      time: "7:00 - 8:00",
    },
    {
      name: "Gibson Butler",
      role: "Interviewing",
      time: "8:00 - 9:00",
    },
  ]
  
  export default function RightSidebar() {
    return (
      <div className="w-80 border-l border-white/10 p-6 space-y-6">
        <div className="space-y-4">
          <div className="bg-[#373B53] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 010 7.75"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">1546</div>
                  <div className="text-sm text-gray-400">Applications</div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="bg-[#242424] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                    <path d="M17 6h6v6"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">246</div>
                  <div className="text-sm text-gray-400">Interviews</div>
                </div>
              </div>
              <div className="w-20 h-12 bg-[#2A2A2A] rounded" />
            </div>
          </div>
  
          <div className="bg-[#242424] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 010 7.75"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">101</div>
                  <div className="text-sm text-gray-400">Hired</div>
                </div>
              </div>
              <div className="w-20 h-12 bg-[#2A2A2A] rounded" />
            </div>
          </div>
        </div>
  
        <div>
          <h2 className="text-lg font-medium mb-4">Upcoming Interviews</h2>
          <div className="space-y-4">
            {interviews.map((interview) => (
              <div key={interview.name} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{interview.name}</div>
                  <div className="text-sm text-gray-400">{interview.role}</div>
                </div>
                <div className="text-sm text-gray-400">{interview.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  