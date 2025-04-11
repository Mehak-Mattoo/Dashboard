import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";

const data = [
  { day: 1, lastMonth: 72, thisMonth: 85 },
  { day: 5, lastMonth: 78, thisMonth: 75 },
  { day: 10, lastMonth: 65, thisMonth: 80 },
  { day: 15, lastMonth: 64, thisMonth: 70 },
  { day: 20, lastMonth: 70, thisMonth: 82 },
  { day: 25, lastMonth: 68, thisMonth: 72 },
  { day: 30, lastMonth: 74, thisMonth: 88 },
];

export default function CustomerSatisfactionChart() {
  return (
    <Card className="w-full bg-white shadow-lg rounded-xl">
      <CardHeader className="p-2">
        <CardTitle className="text-xl font-bold text-indigo-900">
          Customer Satisfaction
        </CardTitle>
      </CardHeader>
      <CardContent className=" ">
        <div className="h-46">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 0  , right: 5, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f0f0f0"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={false}
              />
              <YAxis axisLine={false} tickLine={false} tick={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
                formatter={(value) => [`${value}%`]}
                labelFormatter={(label) => `Day ${label}`}
              />
              <Area
                type="monotone"
                dataKey="lastMonth"
                fill="url(#colorLastMonth)"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4, fill: "#3b82f6", strokeWidth: 0 }}
                activeDot={{ r: 6 }}
              />
              <Area
                type="monotone"
                dataKey="thisMonth"
                fill="url(#colorThisMonth)"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 4, fill: "#10b981", strokeWidth: 0 }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center items-center  space-x-2 text-sm">
          <div className="flex  items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-gray-400 text-sm">Last Month</span>
          </div>
          <div className="text-gray-300">|</div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-400 text-sm">This Month</span>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 text-sm space-x-6">
          <div className="text-center">
            <p className="font-semibold text-gray-700">$3,004</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-700">$4,504</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
