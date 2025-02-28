"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"

const chartData = [
  { name: "Mon", PRs: 5, MRs: 2, BsF: 1 },
  { name: "Tue", PRs: 15, MRs: 8, BsF: 5 },
  { name: "Wed", PRs: 20, MRs: 12, BsF: 8 },
  { name: "Thu", PRs: 25, MRs: 15, BsF: 10 },
  { name: "Fri", PRs: 45, MRs: 25, BsF: 15 },
  { name: "Sat", PRs: 40, MRs: 22, BsF: 12 },
  { name: "Sun", PRs: 35, MRs: 20, BsF: 10 },
]

interface AreaChartProps {
  className?: string
}

export function LineChart({ className }: AreaChartProps) {
  return (
    <div className={`border border-gray-700 rounded-xl bg-[#1F2937] p-4 ${className}`} >
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="PRs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="MRs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="BsF" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22C55E" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="0" stroke="#30363D" horizontal={true} vertical={true} />
          <XAxis
            dataKey="name"
            stroke="#6B7280"
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={{ stroke: "#30363D" }}
            tickLine={{ stroke: "#30363D" }}
          />
          <YAxis
            stroke="#6B7280"
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={{ stroke: "#30363D" }}
            tickLine={{ stroke: "#30363D" }}
            domain={[0, 60]}
            ticks={[0, 20, 40, 60]}
          />
          <Area
            type="monotone"
            dataKey="PRs"
            stroke="#6366F1"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#PRs)"
            dot={{ fill: "#6366F1", r: 3 }}
          />
          <Area
            type="monotone"
            dataKey="MRs"
            stroke="#0EA5E9"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#MRs)"
            dot={{ fill: "#0EA5E9", r: 3 }}
          />
          <Area
            type="monotone"
            dataKey="BsF"
            stroke="#22C55E"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#BsF)"
            dot={{ fill: "#22C55E", r: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 justify-end mt-2 pr-2 ">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
          <span className="text-xs text-gray-400">PRs</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
          <span className="text-xs text-gray-400">MRs</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
          <span className="text-xs text-gray-400">BsF</span>
        </div>
      </div>
    </div>
  )
}

