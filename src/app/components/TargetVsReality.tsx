import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", reality: 7500, target: 9200 },
  { month: "Feb", reality: 6800, target: 8400 },
  { month: "Mar", reality: 6200, target: 9800 },
  { month: "Apr", reality: 7300, target: 8200 },
  { month: "May", reality: 8400, target: 10600 },
  { month: "June", reality: 8300, target: 10500 },
  { month: "July", reality: 8500, target: 10700 },
];

export default function TargetVsReality() {
  return (
    <div className="bg-white rounded-xl p-2  shadow-lg ">
      <h1 className="text-xl pt-6 font-bold text-indigo-900 mb-6">
        Target vs Reality
      </h1>

      <div className="h-36 mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            barGap={5}
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#aaa", fontSize: 12 }}
            />
            <YAxis hide={true} />

            {/* Reality bars (green) */}
            <Bar
              dataKey="reality"
              fill="#4ade80"
              radius={[4, 4, 0, 0]}
              barSize={10}
            />

            {/* Target bars (yellow) */}
            <Bar
              dataKey="target"
              fill="#fbbf24"
              radius={[4, 4, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col space-y-2">
        {/* Reality sales indicator */}
        <div className="flex items-center bg-green-50 p-2 rounded-xl">
          <div className="bg-green-100 p-2 rounded-lg mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600"
            >
              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
              <path d="M16.5 9.4 7.55 4.24"></path>
              <polyline points="3.29 7 12 12 20.71 7"></polyline>
              <line x1="12" y1="22" x2="12" y2="12"></line>
              <circle cx="18.5" cy="15.5" r="2.5"></circle>
              <path d="M20.27 17.27 22 19"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium text-sm">Reality Sales</h3>
            <p className="text-gray-500 text-xs">Global</p>
          </div>
          <div className="ml-auto">
            <span className="text-lg font-bold text-green-500">8,823</span>
          </div>
        </div>

        {/* Target sales indicator */}
        <div className="flex items-center bg-yellow-50 p-2 rounded-xl">
          <div className="bg-yellow-100 p-2 rounded-lg mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-600"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M9 21V9"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium text-sm">Target Sales</h3>
            <p className="text-gray-500 text-xs">Commercial</p>
          </div>
          <div className="ml-auto">
            <span className="text-lg font-bold text-yellow-400">12,123</span>
          </div>
        </div>
      </div>
    </div>
  );
}
