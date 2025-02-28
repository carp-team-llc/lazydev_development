import { BarChart2 } from "lucide-react"
import type { TransactionStats } from "./type"

interface TransactionStatsPanelProps {
  stats: TransactionStats
}

export function TransactionStatsPanel({ stats }: TransactionStatsPanelProps) {
  return (
    <div className=" bg-[#0B1221] p-6 h-[200px] rounded-2xl">
      <h2 className="mb-4 text-lg font-medium text-white">Transactions</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className=" text-gray-400">No. Transactions</span>
          <div className="flex items-center space-x-2">
            <span className=" text-[#00E8D4]">{stats.totalTransactions}</span>
            <BarChart2 className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className=" text-gray-400">Total Received</span>
          <div className="flex items-center space-x-2">
            <span className=" text-[#00E8D4]">{stats.totalReceived} BTC</span>
            <BarChart2 className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className=" text-gray-400">Total Balance</span>
          <div className="flex items-center space-x-2">
            <span className=" text-[#00E8D4]">{stats.totalBalance} BTC</span>
            <BarChart2 className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

