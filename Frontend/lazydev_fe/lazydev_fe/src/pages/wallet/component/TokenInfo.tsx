import type { TokenInfo } from "./Types"

interface TokenInfoProps {
  token: TokenInfo
}

export function TokenInfoCard({ token }: TokenInfoProps) {
  return (
    <div className="rounded-xl bg-[#1a2235] p-4">
      <div className="flex items-center space-x-2">
        <div className="text-sm text-gray-400">#{token.rank}</div>
        <h3 className="font-medium text-white">{token.name}</h3>
      </div>
      <div className="mt-1 text-sm text-gray-400">{token.symbol}</div>
    </div>
  )
}

