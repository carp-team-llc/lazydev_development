
import { SummaryPanel } from "./component/SummaryPanel"
import { TransactionStatsPanel } from "./component/TransactionStatsPanel"
import { QRCode } from "./component/QRCode"
import { TransactionList } from "./component/TransactionList"
import Header from "../../components/homepageloggedin/Header"
import Footer from "../../components/homepagenonlogin/Footer"

export default function Page() {
  const summaryInfo = {
    address: "2dxg254548411324572f2156441321d35d5zxd54d545dv4v34d54v5d4v5d4x54d",
    hash160: "3df2dfd524478454d445d5f454df545d",
    tools: ["Related Tags", "Unspent Outputs"],
  }

  const transactionStats = {
    totalTransactions: 54,
    totalReceived: "95.123456789",
    totalBalance: "0",
  }

  const transactions = [
    {
      fromAddress: "2dxg254548411324572f2156441321d35d5zxd54d545dv4v34d54v5d4v5d4x54d",
      toAddress: "1c5656464644x456464s664444vg4646z84df4v4654c6vdsf446x4cv8df",
      timestamp: "2017-12-03 13:57:30",
      amount: "0.35473875",
      confirmations: 12,
      btcAmount: "1.12458756",
    },
    {
        fromAddress: "2dxg254548411324572f2156441321d35d5zxd54d545dv4v34d54v5d4v5d4x54d",
        toAddress: "1c5656464644x456464s664444vg4646z84df4v4654c6vdsf446x4cv8df",
        timestamp: "2017-12-03 13:57:30",
        amount: "0.35473875",
        confirmations: 12,
        btcAmount: "1.12458756",
      },
      {
        fromAddress: "2dxg254548411324572f2156441321d35d5zxd54d545dv4v34d54v5d4v5d4x54d",
        toAddress: "1c5656464644x456464s664444vg4646z84df4v4654c6vdsf446x4cv8df",
        timestamp: "2017-12-03 13:57:30",
        amount: "0.35473875",
        confirmations: 12,
        btcAmount: "1.12458756",
      },
    // Add more transactions as needed
  ]

  return (
    <div className="min-h-screen bg-[#060B17] p-1">
      <Header />
      <div className="mt-6 grid grid-cols-3 gap-6 lg:grid-cols-[2fr,1fr,auto]">
        <SummaryPanel info={summaryInfo} />
        <TransactionStatsPanel stats={transactionStats} />
        <QRCode value={summaryInfo.address} />
      </div>
      <TransactionList transactions={transactions} />
      <Footer/>
    </div>
  )
}

