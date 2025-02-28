export interface Transaction {
    fromAddress: string
    toAddress: string
    timestamp: string
    amount: string
    confirmations: number
    btcAmount: string
  }
  
  export interface SummaryInfo {
    address: string
    hash160: string
    tools: string[]
  }
  
  export interface TransactionStats {
    totalTransactions: number
    totalReceived: string
    totalBalance: string
  }
  
  