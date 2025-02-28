"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const activityData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Contributions",
      data: [30, 45, 57, 75, 100, 120, 131, 95, 75, 45, 30, 20],
      borderColor: "#58a6ff",
      tension: 0.4,
      fill: false,
    },
    {
      label: "Projects",
      data: [10, 15, 25, 40, 55, 45, 35, 25, 20, 15, 10, 5],
      borderColor: "#3fb950",
      tension: 0.4,
      fill: false,
    },
    {
      label: "Issues",
      data: [5, 10, 15, 25, 30, 35, 40, 35, 25, 20, 15, 10],
      borderColor: "#d29922",
      tension: 0.4,
      fill: false,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        color: "rgba(48, 54, 61, 1)",
      },
      ticks: {
        color: "#8b949e",
      },
    },
    y: {
      grid: {
        color: "rgba(48, 54, 61, 1)",
      },
      ticks: {
        color: "#8b949e",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

export default function ActivityChart() {
  return (
    <div className="bg-[#161b22] rounded-lg p-4">
      <div className="h-[300px]">
        <Line options={options} data={activityData} />
      </div>
    </div>
  )
}

