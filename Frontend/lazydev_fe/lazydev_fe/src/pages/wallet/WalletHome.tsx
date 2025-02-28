import { Header as Tab } from "./component/Tab"
import { TokenInfoCard } from "./component/TokenInfo"
import { MetricCard } from "./component/MetricCard"
import { TransactionTable } from "./component/TransactionTable"
import Header from "../../components/homepageloggedin/Header"
import Footer from "../../components/homepagenonlogin/Footer"

export default function Page() {
  const tokens = [
    { id: "4548", rank: "#4548", name: "Sanshu Inu", symbol: "Sanshu" },
    { id: "250", rank: "#250", name: "SCOT", symbol: "SCOT" },
    { id: "50", rank: "#50", name: "QTUM", symbol: "QTUM" },
  ]

  const metrics = [
    { title: "Market Cap", value: "$ 258,963", change: "5.50" },
    { title: "Fully Diluted", value: "$ 963,459", change: "-1.25" },
    { title: "Volume", value: "$ 15,569,745", change: "0.50" },
    { title: "Circulating Supply", value: "852,147", suffix: "ETH", info: "111,145,875" },
  ]

  const transactions = [
    {
      type: "Buy" as "Buy", // Ép kiểu để đảm bảo TypeScript hiểu đúng
      dateTime: "14-5-2019 05:11",
      amount: 1.84512623,
      price: 5.25,
      fee: 17800.0,
      total: 23000.0,
      action: "Cancel",
    },
    {
      type: "Sell" as "Sell", // Ép kiểu để tránh TypeScript nhận diện sai
      dateTime: "12-5-2019 11:11",
      amount: 8.002,
      price: 0.75,
      fee: 19555.22,
      total: 35000.0,
      action: "Cancel",
    },
    {
        type: "Buy" as "Buy", // Ép kiểu để đảm bảo TypeScript hiểu đúng
        dateTime: "14-5-2019 05:11",
        amount: 1.84512623,
        price: 5.25,
        fee: 17800.0,
        total: 23000.0,
        action: "Cancel",
      },
      {
        type: "Sell" as "Sell", // Ép kiểu để tránh TypeScript nhận diện sai
        dateTime: "12-5-2019 11:11",
        amount: 8.002,
        price: 0.75,
        fee: 19555.22,
        total: 35000.0,
        action: "Cancel",
      },
  ];

  return (
    <div className="min-h-screen bg-[#0f1623]">
        <Header />
      <Tab tokens={tokens} />

      <main className="container mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center space-x-4 ">
            <img src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/Lazy%20dev/dollar.png" alt="Ethereum Logo" className=" flex h-8 w-8 " />
            <h1 className="text-3xl font-bold text-white ">Ethereum</h1>
            <span className="text-2xl text-white">$3,400.80</span>
            <span className="text-sm text-green-400">↑ 0.50%</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {["Mineable", "PoW", "Smart Contracts", "Ethereum"].map((tag) => (
              <span key={tag} className="rounded-full bg-[#1a2235] px-3 py-1 text-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {tokens.map((token) => (
            <TokenInfoCard key={token.id} token={token} />
          ))}
        </div>

        <TransactionTable transactions={transactions} />
      </main>
      <Footer />
    </div>
    
  )
}

