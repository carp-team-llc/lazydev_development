import type { Transaction } from "./Types";

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full">
        <thead>
          <h1 className="text-2xl text-gray-400">AnaLyst</h1>
          <tr className="text-left text-sm text-gray-400">
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Date & Time</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Fee</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td
                className={`px-4 py-3 ${
                  tx.type === "Buy" ? "text-green-400" : "text-red-400"
                }`}
              >
                {tx.type}
              </td>
              <td className="px-4 py-3 text-gray-300">{tx.dateTime}</td>
              <td className="px-4 py-3 text-gray-300">{tx.amount}</td>
              <td className="px-4 py-3 text-gray-300">{tx.price}</td>
              <td className="px-4 py-3 text-gray-300">{tx.fee.toFixed(2)}</td>
              <td className="px-4 py-3 text-gray-300">{tx.total.toFixed(2)}</td>
              <td className="px-4 py-3">
                <button className="text-blue-400 hover:text-blue-300">
                  {tx.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
