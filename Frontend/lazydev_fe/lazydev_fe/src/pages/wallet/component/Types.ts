export interface Transaction {
    type: "Buy" | "Sell"
    dateTime: string
    amount: number
    price: number
    fee: number
    total: number
    action: string
  }
  
  export interface TokenInfo {
    id: string
    rank: string
    name: string
    symbol: string
  }
  
  export interface MetricCard {
    title: string
    value: string
    change?: string
    suffix?: string
    info?: string
  }
  
  