import { Badge } from "../ui/badge"

const dailyQuests = [
  { id: 1, task: "Submit 3 pull requests to any project", points: 20 },
  { id: 2, task: "Submit 3 pull requests to any project", points: 20 },
  { id: 3, task: "Submit 3 pull requests to any project", points: 20 },
  { id: 4, task: "Submit 3 pull requests to any project", points: 20 },
  { id: 5, task: "Submit 3 pull requests to any project", points: 20 },
  { id: 6, task: "Complete all quests", points: 100 },
]

export default function DailyQuests() {
  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Daily quests</h2>
      <div className="space-y-3">
        {dailyQuests.map((quest) => (
          <div
            key={quest.id}
            className="flex items-center gap-4 p-3 rounded-lg bg-[#21262D] hover:bg-[#30363D] transition-colors"
          >
            <div className="h-5 w-5 text-gray-400">🔄</div>
            <div className="flex-1">
              <div className="text-sm">{quest.task}</div>
            </div>
            <Badge variant="secondary" className="bg-[#30363D] text-yellow-500">
              {quest.points}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  )
}

