import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", loyal: 320, new: 250, unique: 300 },
  { name: "Feb", loyal: 330, new: 230, unique: 340 },
  { name: "Mar", loyal: 300, new: 220, unique: 350 },
  { name: "Apr", loyal: 270, new: 180, unique: 310 },
  { name: "May", loyal: 250, new: 150, unique: 230 },
  { name: "Jun", loyal: 280, new: 250, unique: 220 },
  { name: "Jul", loyal: 300, new: 350, unique: 250 },
  { name: "Aug", loyal: 310, new: 330, unique: 280 },
  { name: "Sep", loyal: 290, new: 310, unique: 300 },
  { name: "Oct", loyal: 260, new: 290, unique: 280 },
  { name: "Nov", loyal: 230, new: 250, unique: 260 },
  { name: "Dec", loyal: 220, new: 220, unique: 240 },
];

// Custom dot component for the marker on the New Customers line
const CustomDot = (props:any) => {
  const { cx, cy, payload } = props;

  // Only show the special dot for July
  if (payload.name === "Jul") {
    return (
      <g>
        {/* Red circle */}
        <circle cx={cx} cy={cy} r={8} fill="#f34" />

        {/* Vertical dotted line */}
        <line
          x1={cx}
          y1={cy}
          x2={cx}
          y2={400}
          stroke="#f34"
          strokeWidth={1}
          strokeDasharray="3 3"
        />
      </g>
    );
  }

  return null;
};

export default function VisitorInsights() {
  return (
    <div className="w-full p-6 bg-gray-50 rounded-lg shadow-lg m-2">
      <h1 className="text-xl font-bold text-indigo-900 mb-6">
        Visitor Insights
      </h1>

      <div className="h-37">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          >
            <CartesianGrid vertical={false} stroke="#eee" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#aaa" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#aaa" }}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
            />
            <Tooltip />

            {/* Lines for each data series */}
            <Line
              type="monotone"
              dataKey="loyal"
              stroke="#a855f7"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="new"
              stroke="#ef4444"
              strokeWidth={3}
              dot={<CustomDot />}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="unique"
              stroke="#4ade80"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center mt-4 space-x-6 text-xs ">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-purple-500 mr-2"></div>
          <span className="text-gray-700">Loyal Customers</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-red-500 mr-2"></div>
          <span className="text-gray-700">New Customers</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-green-500 mr-2"></div>
          <span className="text-gray-700">Unique Customers</span>
        </div>
      </div>
    </div>
  );
}
