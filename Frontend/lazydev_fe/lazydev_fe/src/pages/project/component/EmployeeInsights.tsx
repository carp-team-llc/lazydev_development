"use client";

import { CheckSquare, Clock, Ban, Umbrella } from 'lucide-react';

export default function EmployeeInsights() {
  const stats = [
    { title: "Attendance", value: "400", icon: CheckSquare },
    { title: "Late Coming", value: "17", icon: Clock },
    { title: "Absent", value: "06", icon: Ban },
    { title: "Leave Apply", value: "14", icon: Umbrella },
  ];

  return (
    <div className="p-6 space-y-3">
      <div className="grid grid-cols-2 gap-6">
        {/* Employee Stats */}
        <div className="bg-[#0a061f] rounded-lg p-6">
          <h2 className="text-gray-400 text-xl font-medium mb-6">Employees Availability</h2>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.title} className="bg-[#151725] p-4 rounded-lg">
                <div className="flex flex-col space-y-3">
                  <stat.icon className="w-6 h-6 text-gray-400" />
                  <div>
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Employees */}
        <div className="bg-[#0a061f] rounded-lg p-6 relative">
          <div className="absolute top-6 right-6 text-4xl font-semibold text-white">
            423
          </div>
          <h2 className="text-gray-400 text-xl font-medium mb-6">Total Employees</h2>
          <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)]">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#151725"
                  strokeWidth="10"
                />
                {/* Women segment (60%) */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#ff6b8b"
                  strokeWidth="10"
                  strokeDasharray={`${0.6 * 283} ${283}`}
                />
                {/* Men segment (40%) */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#7cc7ff"
                  strokeWidth="10"
                  strokeDasharray={`${0.4 * 283} ${283}`}
                  strokeDashoffset={`${-0.6 * 283}`}
                />
              </svg>
            </div>
            <div className="flex gap-8 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#7cc7ff]"></div>
                <span className="text-gray-400">Man</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff6b8b]"></div>
                <span className="text-gray-400">Women</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}