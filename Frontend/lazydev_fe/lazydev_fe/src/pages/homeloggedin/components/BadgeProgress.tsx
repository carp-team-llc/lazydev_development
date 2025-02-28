import { Progress } from "../ui/progress"
import { ChevronRight, CircleCheck } from "lucide-react"

export default function BadgeProgress() {
  return (
    <div className="space-y-4 border border-gray-700 rounded-xl bg-[#1F2937] min-h-[239px] p-4 w-full max-w-[600px] mx-auto">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Badge progress</h3>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </div>
      <Progress value={50} className="h-2 bg-[#21262D]" indicatorClassName="bg-[#238636]" />
      <div className="text-sm">Beginner - 2/4</div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[#238636]">
          <CircleCheck className="h-4 w-4" />
          <span className="text-sm">Verify your account</span>
        </div>
        <div className="flex items-center gap-2 text-[#238636]">
          <CircleCheck className="h-4 w-4" />
          <span className="text-sm">Update your phone number</span>
        </div>
      </div>
      <div className="text-sm text-gray-400">Complete all quests to get this badge</div>
    </div>
  )
}

