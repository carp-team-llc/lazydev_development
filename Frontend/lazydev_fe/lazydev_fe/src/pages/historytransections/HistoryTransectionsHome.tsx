import Header from "../../components/homepageloggedin/Header"
import Footer from "../../components/homepagenonlogin/Footer"
import { TransactionTables } from "./component/TransactionTables"

export default function Page() {
  const latestTransactions = [
    {
      hash: "7d2c7b06afa0...",
      btc: "1.0126281",
      time: "2 minutes ago",
      minerPreference: "medium" as const,
      status: "Confirmed" as const,
    },
    {
      hash: "5de67405bfc6...",
      btc: "0.10522881",
      time: "2 minutes ago",
      minerPreference: "high" as const,
      status: "Unconfirmed" as const,
    },
    {
      hash: "583de1b0cec...",
      btc: "0.40622033",
      time: "2 minutes ago",
      minerPreference: "high" as const,
      status: "Confirmed" as const,
    },
    {
      hash: "5493bcfa5f7f...",
      btc: "4.43670578",
      time: "2 minutes ago",
      minerPreference: "high" as const,
      status: "Cancelled" as const,
    },
  ]

  const recentTransactions = [
    {
      id: "145236",
      time: "59 seconds ago",
      transactions: 2122,
      sent: "16,819.638",
      fees: "1.796",
      blockSize: 546573,
    },
    {
      id: "145237",
      time: "10 minutes ago",
      transactions: 1807,
      sent: "6,410.154",
      fees: "0.982",
      blockSize: 458027,
    },
    {
      id: "145238",
      time: "13 minutes ago",
      transactions: 1980,
      sent: "16,541.708",
      fees: "1.855",
      blockSize: 458440,
    },
    {
      id: "145239",
      time: "21 minutes ago",
      transactions: 1781,
      sent: "12,009.855",
      fees: "1.963",
      blockSize: 515484,
    },
  ]

  return (
    <div className="">
        <Header />
        <div className="p-6 bg-[#060B17]">
      <TransactionTables latestTransactions={latestTransactions} recentTransactions={recentTransactions} />
      </div>
      <Footer   />
    </div>
  )
}

