import type { Transaction } from "./type"
import { ArrowRight } from "lucide-react"

interface TransactionListProps {
  transactions: Transaction[]
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="mt-8">
      <h2 className="mb-4 bg-[#4C7BFF] px-6 py-3 text-lg font-medium text-white">Transactions</h2>
      <div className="space-y-2">
        {transactions.map((tx, index) => (
          <div key={index} className="rounded-lg bg-[#0B1221] p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col space-y-2">
                  <span className="font-mono text-sm text-gray-300">{tx.fromAddress}</span>
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-sm text-gray-300">{tx.toAddress}</span>
                    <ArrowRight className="h-4 w-4 text-[#00E8D4]" />
                    <span className="font-mono text-sm text-gray-300">{tx.toAddress}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className="text-sm text-gray-400">{tx.timestamp}</span>
                <span className="text-sm text-gray-300">{tx.amount} BTC</span>
                <div className="flex space-x-2">
                  <span className="rounded-full bg-[#4C7BFF] px-3 py-1 text-xs text-white">
                    {tx.confirmations} Confirmation
                  </span>
                  <span className="rounded-full bg-[#00E8D4] px-3 py-1 text-xs text-white">{tx.btcAmount} BTC</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

