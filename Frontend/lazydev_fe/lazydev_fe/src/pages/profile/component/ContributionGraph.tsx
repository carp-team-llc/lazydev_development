"use client"

import { useEffect, useState } from "react"

interface Contribution {
  date: string
  count: number
}

interface ContributionResponse {
  contributions: Contribution[]
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// Function to get color based on contribution count
function getContributionColor(count: number): string {
  if (count === 0) return "bg-[#161b22] border border-[#30363d]"
  if (count <= 3) return "bg-[#0e4429]"
  if (count <= 7) return "bg-[#006d32]"
  if (count <= 12) return "bg-[#26a641]"
  return "bg-[#39d353]"
}

export default function ContributionGraph() {
  const [contributionData, setContributionData] = useState<Map<string, number>>(new Map())
  const [weeks, setWeeks] = useState<Date[][]>([])
  const [monthLabels, setMonthLabels] = useState<Map<number, number>>(new Map())

  useEffect(() => {
    // Function to fetch contribution data
    const fetchContributions = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/contributions")
        const data: ContributionResponse = await response.json()

        // Create a map of date strings to contribution counts
        const contributionMap = new Map<string, number>()
        data.contributions.forEach(({ date, count }) => {
          contributionMap.set(date, count)
        })

        setContributionData(contributionMap)
      } catch (error) {
        console.error("Failed to fetch contributions:", error)
      }
    }

    fetchContributions()
  }, [])

  useEffect(() => {
    // Generate the grid of weeks
    const generateWeeks = () => {
      const weeks: Date[][] = []
      const now = new Date()
      const endDate = new Date(now)
      const startDate = new Date(now)
      startDate.setFullYear(now.getFullYear() - 1) // Go back one year

      // Adjust to start from the beginning of the week (Sunday)
      const daysSinceStartOfWeek = startDate.getDay()
      startDate.setDate(startDate.getDate() - daysSinceStartOfWeek)

      // Generate week arrays
      const currentDate = new Date(startDate)
      const monthPositions = new Map<number, number>()
      let weekIndex = 0

      while (currentDate <= endDate) {
        const week: Date[] = []

        // For each day in the week
        for (let i = 0; i < 7; i++) {
          // Check if it's the first week of a month
          if (currentDate.getDate() <= 7) {
            const monthIndex = currentDate.getMonth()
            if (!monthPositions.has(monthIndex)) {
              monthPositions.set(monthIndex, weekIndex)
            }
          }

          week.push(new Date(currentDate))
          currentDate.setDate(currentDate.getDate() + 1)
        }

        weeks.push(week)
        weekIndex++
      }

      setWeeks(weeks)
      setMonthLabels(monthPositions)
    }

    generateWeeks()
  }, [])

  // Format date to match API date string format
  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0]
  }

  // Get contribution count for a specific date
  const getContributionCount = (date: Date): number => {
    const dateString = formatDate(date)
    return contributionData.get(dateString) || 0
  }

  return (
    <div className="bg-[#161b22] rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium">Contribution activity</h3>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          Less
          <div className="flex gap-1">
            {[0, 1, 4, 8, 13].map((level) => (
              <div key={level} className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`} />
            ))}
          </div>
          More
        </div>
      </div>

      <div className="relative">
        {/* Month labels */}
        <div className="flex text-xs text-gray-400 mb-2">
          {Array.from(monthLabels.entries()).map(([monthIndex, weekIndex]) => (
            <div key={monthIndex} className="absolute" style={{ left: `${weekIndex * 15}px` }}>
              {months[monthIndex]}
            </div>
          ))}
        </div>

        {/* Contribution grid */}
        <div className="flex gap-1 mt-6">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((date, dayIndex) => {
                const count = getContributionCount(date)
                return (
                  <div
                    key={dayIndex}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(count)}`}
                    title={`${count} contributions on ${date.toDateString()}`}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

