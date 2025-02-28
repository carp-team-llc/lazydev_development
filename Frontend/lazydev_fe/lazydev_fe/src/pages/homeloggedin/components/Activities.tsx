export default function Activities() {
    const activities = [
      {
        date: "Yesterday",
        commits: 32,
        repository: "JHA Toolkits",
        timeRange: "22:03:20 - 01/17/2025",
      },
      {
        date: "2 days ago",
        commits: 32,
        repository: "JHA Toolkits",
        timeRange: "22:03:20 - 01/17/2025",
      },
      {
        date: "2 days ago",
        commits: 22,
        repository: "Redbook",
        timeRange: "22:03:20 - 01/17/2025",
      },
    ]
  
    return (
      <div className="w-96 border-l border-[#30363D] p-4">
        <h2 className="text-lg font-medium mb-6">Activities</h2>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="relative pl-6 pb-6">
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#238636]" />
              {index !== activities.length - 1 && <div className="absolute left-[5px] top-4 w-0.5 h-full bg-[#30363D]" />}
              <div className="text-sm text-gray-400">{activity.date}</div>
              <div className="mt-1">
                Created {activity.commits} commits in <span className="text-[#58A6FF]">{activity.repository}</span>
              </div>
              <div className="text-sm text-gray-400 mt-1">{activity.timeRange}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  