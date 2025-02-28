export interface LatestTransaction {
    hash: string
    btc: string
    time: string
    minerPreference: "medium" | "high"
    status: "Confirmed" | "Unconfirmed" | "Cancelled"
  }
  
  export interface RecentTransaction {
    id: string
    time: string
    transactions: number
    sent: string
    fees: string
    blockSize: number
  }
  
  