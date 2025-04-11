import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const topProducts = [
  {
    id: "01",
    name: "Home Decor Range",
    popularity: 75,
    sales: "45%",
    color: "#3b82f6" // blue
  },
  {
    id: "02",
    name: "Disney Princess Pink Bag 18",
    popularity: 68,
    sales: "29%",
    color: "#10b981" // green
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    popularity: 55,
    sales: "18%",
    color: "#a855f7" // purple
  },
  {
    id: "04",
    name: "Apple Smartwatches",
    popularity: 40,
    sales: "25%",
    color: "#f97316" // orange
  }
];

export default function TopProductsTable() {
  return (
    <Card className="w-full bg-white shadow-sm rounded-xl">
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold text-indigo-900">Top Products</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-xs text-gray-400 font-normal text-left py-3 w-16">#</th>
                <th className="text-xs text-gray-400 font-normal text-left py-3">Name</th>
                <th className="text-xs text-gray-400 font-normal text-left py-3">Popularity</th>
                <th className="text-xs text-gray-400 font-normal text-right py-3">Sales</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product) => (
                <tr key={product.id} className="border-b  border-gray-100 last:border-0">
                  <td className="py-3 text-xs text-gray-500">{product.id}</td>
                  <td className="py-3 text-xs text-gray-600">{product.name}</td>
                  <td className="py-3 pr-2 w-64">
                    <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full rounded-full" 
                        style={{ 
                          width: `${product.popularity}%`,
                          backgroundColor: product.color
                        }}
                      />
                    </div>
                  </td>
                  <td className="py-2 text-right">
                    <span 
                      className="px-2 py-1 text-xs rounded-md"
                      style={{ 
                        backgroundColor: `${product.color}10`,
                        color: product.color,
                        border: `1px solid ${product.color}`
                      }}
                    >
                      {product.sales}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}