import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Monday", onlineSales: 13000, offlineSales: 12000 },
  { day: "Tuesday", onlineSales: 16000, offlineSales: 12000 },
  { day: "Wednesday", onlineSales: 5500, offlineSales: 22000 },
  { day: "Thursday", onlineSales: 15000, offlineSales: 6000 },
  { day: "Friday", onlineSales: 12000, offlineSales: 11000 },
  { day: "Saturday", onlineSales: 15500, offlineSales: 13000 },
  { day: "Sunday", onlineSales: 20000, offlineSales: 11000 },
];

const formatYAxis = (value:any) => {
  if (value === 0) return "0";
  if (value === 5000) return "5k";
  if (value === 10000) return "10k";
  if (value === 15000) return "15k";
  if (value === 20000) return "20k";
  if (value === 25000) return "25k";
  return "";
};

export default function Revenue() {
  return (
    <Card className="w-full  bg-white shadow-lg rounded-xl">
      <CardHeader className="p-2 ">
        <CardTitle className="text-xl font-bold text-indigo-900">
          Total Revenue
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              barGap={3}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                stroke="#f0f0f0"
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#a0aec0", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#a0aec0", fontSize: 12 }}
                tickFormatter={formatYAxis}
                ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              />
              <Tooltip
                cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
                formatter={(value) => [`$${value.toLocaleString()}`]}
              />
              <Legend
                align="center"
                verticalAlign="bottom"
                iconType="circle"
                wrapperStyle={{ paddingTop: 5 }}
              />
              <Bar
                dataKey="onlineSales"
                name="Online Sales"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                barSize={10}
              />
              <Bar
                dataKey="offlineSales"
                name="Offline Sales"
                fill="#10b981"
                radius={[4, 4, 0, 0]}
                barSize={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
