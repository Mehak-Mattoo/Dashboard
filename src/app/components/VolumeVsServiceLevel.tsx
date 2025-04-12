import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,

} from "recharts";

const data = [
  { name: "Jan", volume: 120, services: 80 },
  { name: "Feb", volume: 150, services: 100 },
  { name: "Mar", volume: 130, services: 60 },
  { name: "Apr", volume: 110, services: 70 },
  { name: "May", volume: 90, services: 60 },
  { name: "Jun", volume: 100, services: 80 },
];

const CustomLegend = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex items-center justify-center space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-gray-400 text-sm">Volume</span>
        </div>
        <div className="h-6 w-px bg-gray-300"></div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
          <span className="text-gray-400 text-sm">Services</span>
        </div>
      </div>

      <div className="flex justify-center w-full mt-2 space-x-12">
        <span className="font-medium text-lg text-gray-700">1,135</span>
        <span className="font-medium text-lg text-gray-700">635</span>
      </div>
    </div>
  );
};

export default function VolumeVsServiceLevel() {
  return (
    <div className="bg-white rounded-xl p-2 shadow-sm ">
      <h1 className="text-xl font-bold text-indigo-900 mb-6">
        Volume vs Service Level
      </h1>

      <div className="h-73">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            barGap={40}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#aaa", fontSize: 0 }} // Hide X-axis labels as they're not shown in the image
            />
            <YAxis hide={true} />

            {/* Blue bars for Volume */}
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#4ade80"
              radius={[0, 0, 0, 0]}
              barSize={10}
            />

            {/* Green bars for Services */}
            <Bar
              dataKey="services"
              stackId="a"
              fill="#0ea5e9"
              radius={[0, 0, 4, 4]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <CustomLegend />
    </div>
  );
}
