
import type { TokenInfo } from "./Types"

interface HeaderProps {
  tokens: TokenInfo[]
}

export function Header({ tokens }: HeaderProps) {
  return (
    <header className="w-full bg-[#1a2235] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <nav className="flex space-x-2 text-gray-400">
            <a href="/coins">Coins</a>
            <span>/</span>
            <a href="/ethereum">Ethereum</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-green-600 hover:text-white">Exchange</button>
        </div>
      </div>
    </header>
  )
}

