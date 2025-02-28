import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";

const employeeData = [
  { date: "0 Jan", value: 100 },
  { date: "31 Jan", value: 120 },
  { date: "22 Feb", value: 90 },
  { date: "15 Mar", value: 110 },
  { date: "05 Apr", value: 95 },
  { date: "26 Apr", value: 105 },
  { date: "17 May", value: 115 },
  { date: "08 Jun", value: 100 },
  { date: "29 Jun", value: 110 },
  { date: "20 Jul", value: 105 },
];

export default function EmployeeInfoChart() {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-[#0a061f] rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-400 mb-4">Employees Info</h2>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={employeeData}>
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ff6b6b" />
                  <stop offset="100%" stopColor="#ffa600" />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#4a5568', fontSize: 12 }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#lineGradient)"
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: "#0a061f",
                  stroke: "url(#lineGradient)",
                  strokeWidth: 2
                }}
                activeDot={{
                  r: 6,
                  fill: "#0a061f",
                  stroke: "url(#lineGradient)",
                  strokeWidth: 2
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}