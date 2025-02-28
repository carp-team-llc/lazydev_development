export default function ActivityFeed() {
  const activities = [
    {
      id: 1,
      title: "Astralis/wheelchair-automation-controller",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stats: {
        views: "3,202",
        comments: "4,432",
        likes: "843"
      },
      tags: ["Auto", "API", "Webhook"],
      updated: "Dec 13 2025",
      author: "Astralis"
    },
    ...Array(4).fill(null).map((_, i) => ({
      id: i + 2,
      title: "Astralis/wheelchair-automation-controller",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stats: {
        views: "3,202",
        comments: "4,432",
        likes: "843"
      },
      tags: ["Auto", "API", "Webhook"],
      updated: "Dec 13 2025",
      author: "Astralis"
    }))
  ];

  const topContributors = [
    { name: "Calangthang", stats: "4,432 • 843" },
    { name: "Calangthang1312", stats: "4,432 • 843" },
    { name: "CalangthangG6456", stats: "4,432 • 843" },
    { name: "rh-284h", stats: "4,432 • 843" },
    { name: "wibu slayer", stats: "4,432 • 843" },
    { name: "sang ngu", stats: "4,432 • 843" },
  ];

  const topTags = [
    "Backend",
    "Blockchain",
    "Frontend",
    "IOT"
  ];

  return (
    <section className="py-4">
      <div className="px-4 md:px-6">
        {/* Tabs */}
        <div className="flex gap-4 mb-6 bg-[#151725] inline-flex rounded-full p-1 border border-[#ffc400]/20">
          <button className="text-white bg-[#ffc400] px-4 py-1 rounded-full font-medium">Hot</button>
          <button className="text-gray-400 hover:text-white px-4 py-1">New</button>
          <button className="text-gray-400 hover:text-white px-4 py-1">Top month</button>
          <button className="text-gray-400 hover:text-white px-4 py-1">Top week</button>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-full">
          {/* Activity List */}
          <div className="md:col-span-3 flex flex-col min-h-full">
            <div className="space-y-4 flex-1">
              {activities.map((activity) => (
                <div key={activity.id} className="bg-[#151725] rounded-xl p-4 border border-[#ffc400]/20">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-400">
                        <path fill="currentColor" d="M19 20H5v-2h14v2zM12 2c-4.42 0-8 3.58-8 8 0 2.84 1.5 5.33 3.73 6.73L9 18h6l1.27-1.27C18.5 15.33 20 12.84 20 10c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-[#ffc400] font-medium">{activity.title}</h3>
                        <span className="text-gray-400 text-xs">Updated: {activity.updated}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{activity.description}</p>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <span>👁 {activity.stats.views}</span>
                          <span>💬 {activity.stats.comments}</span>
                          <span>⭐ {activity.stats.likes}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {activity.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-[#ffc400] text-black rounded text-xs">
                            {tag}
                          </span>
                        ))}
                        <span className="text-gray-400 text-sm">• {activity.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 flex flex-col min-h-full">
            <div className="bg-[#151725] p-6 rounded-xl border border-[#ffc400]/20 flex-1">
              <h3 className="text-white font-semibold mb-6">Top contributor</h3>
              <div className="space-y-4">
                {topContributors.map((user, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                    <div className="flex-1">
                      <div className="text-gray-300 text-sm">{user.name}</div>
                      <div className="text-gray-500 text-xs">👁 {user.stats}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#151725] p-6 rounded-xl border border-[#ffc400]/20 flex-1">
              <h3 className="text-white font-semibold mb-4">Top Tags</h3>
              <div className="flex flex-col gap-2">
                {topTags.map((tag) => (
                  <div key={tag} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                    <div className="flex-1">
                      <div className="text-gray-300 text-sm">{tag}</div>
                      <div className="text-gray-500 text-xs">👁 1,500 💬 4,432 ⭐ 843</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
