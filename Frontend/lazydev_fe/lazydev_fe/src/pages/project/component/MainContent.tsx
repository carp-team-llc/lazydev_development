"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const hiringData = [
  { month: "Jan", ui: 40, app: 40, qa: 40, web: 40 },
  { month: "Feb", ui: 25, app: 20, qa: 25, web: 15 },
  { month: "March", ui: 35, app: 25, qa: 30, web: 30 },
  { month: "Apr", ui: 20, app: 25, qa: 20, web: 15 },
  { month: "May", ui: 25, app: 20, qa: 20, web: 15 },
  { month: "Jun", ui: 40, app: 35, qa: 45, web: 35 },
  { month: "July", ui: 35, app: 30, qa: 35, web: 20 },
  { month: "Aug", ui: 30, app: 25, qa: 20, web: 15 },
  { month: "Sept", ui: 25, app: 20, qa: 20, web: 15 },
  { month: "Oct", ui: 60, app: 35, qa: 45, web: 35 },
  { month: "Nov", ui: 30, app: 25, qa: 30, web: 20 },
  { month: "Dec", ui: 25, app: 30, qa: 25, web: 15 },
];

const performers = [
  {
    name: "Luke Short",
    username: "@Short",
    percentage: 80,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "John Hard",
    username: "@rdacre",
    percentage: 70,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Paul Rees",
    username: "@Rees",
    percentage: 77,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Rachel Parr",
    username: "@Parr",
    percentage: 85,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Eric Reid",
    username: "@Eric",
    percentage: 95,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Jan Ince",
    username: "@Ince",
    percentage: 97,
    avatar: "/placeholder.svg?height=80&width=80",
  },
];

export default function MainContent() {
  return (
    <div className="p-6 space-y-6">
      {/* Hiring Chart */}
      <div className="bg-[#0a061f] rounded-lg p-6">
        <h2 className="text-gray-500 text-xl mb-6">Top Hiring Sources</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={hiringData}
              margin={{ top: 40, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#222"
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={{ stroke: "#222" }}
                tick={{ fill: "#666", fontSize: 12 }}
              />
              <YAxis
                axisLine={{ stroke: "#222" }}
                tick={{ fill: "#666", fontSize: 12 }}
                ticks={[0, 40, 80, 120, 160, 200]}
              />
              <Legend
                align="left"
                verticalAlign="top"
                iconType="circle"
                wrapperStyle={{
                  paddingBottom: "20px",
                  fontSize: "12px",
                  color: "#666",
                }}
              />
              <Bar
                dataKey="ui"
                stackId="a"
                fill="#6366f1"
                name="UI/UX Designer"
              />
              <Bar
                dataKey="app"
                stackId="a"
                fill="#f97316"
                name="App Development"
              />
              <Bar
                dataKey="qa"
                stackId="a"
                fill="#ec4899"
                name="Quality Assurance"
              />
              <Bar
                dataKey="web"
                stackId="a"
                fill="#38bdf8"
                name="Web Developer"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-pink-100/5 rounded-lg p-8">
        <div className="grid grid-cols-[300px,1fr] gap-12">
          <div className="flex flex-col items-start w-full">
            <div className="flex justify-between w-full items-center">
              <h2 className="text-gray-400 text-xl">Top Performers</h2>
              <p className="text-pink-300/90 text-sm">
                You have 140 influencers in your company
              </p>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-200">350</div>
                <div className="text-pink-300/90 text-sm mt-1">New Task</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-200">130</div>
                <div className="text-pink-300/90 text-sm mt-1">
                  Task Completed
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4"></div>

        <div className="grid grid-cols-6 gap-4 p-6 ">
          {performers.map((performer, index) => (
            <div
              key={performer.name}
              className="bg-[#0a061f] rounded-lg p-4 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={
                    performer.avatar ||
                    "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg"
                  }
                  alt={performer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-gray-200 font-medium text-sm mb-1">
                {performer.name}
              </div>
              <div className="text-gray-500 text-xs mb-4">
                {performer.username}
              </div>
              <div
                className="text-3xl font-bold"
                style={{
                  color: `hsl(${220 + index * 8}, 80%, ${65 + index * 3}%)`,
                }}
              >
                {performer.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
