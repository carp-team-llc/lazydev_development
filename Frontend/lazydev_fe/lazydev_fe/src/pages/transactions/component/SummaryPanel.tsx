import type { SummaryInfo } from "./type"

interface SummaryPanelProps {
  info: SummaryInfo
}

export function SummaryPanel({ info }: SummaryPanelProps) {
  return (
    <div className="bg-[#0B1221] h-[200px] rounded-2xl">
      <h2 className="px-4 py-2 text-base text-white">Summary</h2>
      <div>
        <div className="border-b border-[#1a2235] px-4 py-3">
          <div className="flex items-start gap-8">
            <span className="w-20  text-gray-400">Address</span>
            <span className="font-mono  text-gray-300 truncate w-40">{info.address}</span>   
          </div>
        </div>
        <div className="border-b border-[#1a2235] px-4 py-3">
          <div className="flex items-start gap-8">
            <span className="w-20  text-gray-400">Hash 160</span>
            <span className="font-mono  text-gray-300">{info.hash160}</span>
          </div>
        </div>
        <div className="px-4 py-3">
          <div className="flex items-start gap-8">
            <span className="w-20  text-gray-400">Tools</span>
            <div className="flex items-center">
              <span className=" text-blue-400">Related Tags</span>
              <span className="mx-2  text-gray-400">-</span>
              <span className=" text-blue-400">Unspent Outputs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

