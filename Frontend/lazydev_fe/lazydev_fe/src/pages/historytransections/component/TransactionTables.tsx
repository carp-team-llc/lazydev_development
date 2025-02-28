import type { LatestTransaction, RecentTransaction } from "./types"

interface TransactionTablesProps {
  latestTransactions: LatestTransaction[]
  recentTransactions: RecentTransaction[]
}

export function TransactionTables({ latestTransactions, recentTransactions }: TransactionTablesProps) {
  const getStatusColor = (status: LatestTransaction["status"]) => {
    switch (status) {
      case "Confirmed":
        return "bg-[#00E8D4] text-white"
      case "Unconfirmed":
        return "bg-[#FFA500] text-white"
      case "Cancelled":
        return "bg-[#FF4444] text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Latest Transactions */}
      <div className="bg-[#0B1221] rounded-2xl">
        <h2 className="px-4 py-3 text-lg text-white">Latest Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1a2235] text-left">
                <th className="px-4 py-2  font-normal text-gray-400">Transaction Hash</th>
                <th className="px-4 py-2  font-normal text-gray-400">BTC</th>
                <th className="px-4 py-2  font-normal text-gray-400">Time</th>
                <th className="px-4 py-2  font-normal text-gray-400">Miner Preference</th>
                <th className="px-4 py-2  font-normal text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {latestTransactions.map((tx) => (
                <tr key={tx.hash} className="border-b border-[#1a2235]">
                  <td className="px-4 py-3">
                    <span className="font-mono  text-[#FFA500]">{tx.hash}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono  text-gray-300">{tx.btc} BTC</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className=" text-gray-300">{tx.time}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className=" text-gray-300">{tx.minerPreference}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded px-2 py-1  ${getStatusColor(tx.status)}`}>{tx.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-[#0B1221] rounded-2xl">
        <h2 className="px-4 py-3 text-lg text-white">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#FFA500] text-left ">
                <th className="px-4 py-2  font-normal text-white">Id</th>
                <th className="px-4 py-2  font-normal text-white">Time</th>
                <th className="px-4 py-2  font-normal text-white">Transactions</th>
                <th className="px-4 py-2  font-normal text-white">Sent</th>
                <th className="px-4 py-2  font-normal text-white">Fees</th>
                <th className="px-4 py-2  font-normal text-white">Block Size</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx) => (
                <tr key={tx.id} className="border-b border-[#1a2235]">
                  <td className="px-4 py-3">
                    <span className="font-mono  text-[#FFA500]">{tx.id}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className=" text-gray-300">{tx.time}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono  text-gray-300">{tx.transactions}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono  text-gray-300">{tx.sent} BTC</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono  text-gray-300">{tx.fees} BTC</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono  text-gray-300">{tx.blockSize}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

