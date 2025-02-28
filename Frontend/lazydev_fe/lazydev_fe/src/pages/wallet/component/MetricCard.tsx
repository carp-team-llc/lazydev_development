import type { MetricCard as MetricCardType } from "./Types"
import { InfoIcon } from "lucide-react"

export function MetricCard({ title, value, change, suffix, info }: MetricCardType) {
  const isPositive = change && Number.parseFloat(change) > 0

  return (
    <div className="rounded-xl bg-[#1a2235] p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm text-gray-400">{title}</h3>
        {info && <InfoIcon className="h-4 w-4 text-gray-400" />}
      </div>
      <div className="mt-2 flex items-baseline space-x-2">
        <span className="text-2xl font-bold text-white">{value}</span>
        {suffix && <span className="text-gray-400">{suffix}</span>}
      </div>
      {change && (
        <div className={`mt-1 text-sm ${isPositive ? "text-green-400" : "text-red-400"}`}>
          {isPositive ? "↑" : "↓"} {change}%
        </div>
      )}
    </div>
  )
}

