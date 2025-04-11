// components/SalesDashboard.tsx
import React from "react";

interface SalesSummaryProps {
  totalSales: string;
  totalSalesChange: string;
  totalOrders: number;
  totalOrdersChange: string;
  productsSold: number;
  productsSoldChange: string;
  newCustomers: number;
  newCustomersChange: string;
}

const Sales: React.FC<SalesSummaryProps> = ({
  totalSales,
  totalSalesChange,
  totalOrders,
  totalOrdersChange,
  productsSold,
  productsSoldChange,
  newCustomers,
  newCustomersChange,
}) => {
  return (
    <div className="p-6 m-2 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-lg font-bold text-indigo-900">
            Today&apos; Sales
          </h1>
          <p className="text-sm text-gray-500">Sales Summary</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-400 rounded-lg hover:bg-gray-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <path d="m16.95 5.968l-1.414 1.414L13 4.846v12.196h-2V4.847L8.465 7.382L7.05 5.968L12 1.018z" />
              <path d="M5 20.982v-10h4v-2H3v14h18v-14h-6v2h4v10z" />
            </g>
          </svg>
          Export
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Total Sales */}
        <div className="bg-red-100 p-4  rounded-lg">
          <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <h2 className="text-2xl mb-3 font-bold">{totalSales}</h2>
          <div className="flex flex-col">
            <p className=" text-sm mb-1 text-gray-600">Total Sales</p>
            <p className="text-xs text-blue-500">{totalSalesChange}</p>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <g
                fill="white"
                stroke="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="1.5"
              >
                <path d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6M8 10h8m-8 8h8m-8-4h4" />
                <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20" />
              </g>
            </svg>
          </div>
          <h2 className="text-2xl mb-3 font-bold">{totalOrders}</h2>
          <div className="flex flex-col">
            <p className="text-sm mb-1 text-gray-600">Total Order</p>
            <p className="text-xs text-blue-500">{totalOrdersChange}</p>
          </div>
        </div>

        {/* Products Sold */}
        <div className="bg-green-100 p-4 rounded-lg">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="white"
                d="m14.709 8.558l-7.27-7.247a1 1 0 0 0-.893-.297l-4 .731c-.399.074-.714.38-.8.777l-.732 4.024c-.055.328.057.662.297.892l7.247 7.27c.393.39 1.025.39 1.417 0l4.734-4.733a1.006 1.006 0 0 0 0-1.417m-8.981-2.8c-1.434 1.554-3.65-.764-2.117-2.214c1.411-1.378 3.467.704 2.15 2.178z"
              />
            </svg>
          </div>
          <h2 className="text-2xl mb-3 font-bold">{productsSold}</h2>
          <div className="flex flex-col">
            <p className="text-sm mb-1 text-gray-600">Product Sold</p>
            <p className="text-xs text-blue-500">{productsSoldChange}</p>
          </div>
        </div>

        {/* New Customers */}
        <div className="bg-purple-100 p-4 rounded-lg">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                fill-rule="evenodd"
                d="M9 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl mb-3 font-bold">{newCustomers}</h2>
          <div className="flex flex-col">
            <p className="text-sm mb-1 text-gray-600">New Customers</p>
            <p className="text-xs text-blue-500">{newCustomersChange}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
