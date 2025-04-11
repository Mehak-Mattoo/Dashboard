"use client";

import dynamic from "next/dynamic";
import Sales from "./Sales";
import CustomerSatisfactionChart from "./CustomerSatisfaction";
import TopProductsTable from "./TopProducts";
import VisitorInsights from "./VisitorInsights";
import TargetVsReality from "./TargetVsReality";
import SalesMappingByCountry from "./SalesMappingByCountry";
import VolumeVsServiceLevel from "./VolumeVsServiceLevel";
import DabangSidebar from "./DabangSidebar";
import DashboardHeader from "./DashboardHeader";

const RevenueChart = dynamic(() => import("./Revenue"), {
  ssr: false,
});

export default function Dashboard() {
  return (
    <div className="p-2 flex">
      <div>
        <DabangSidebar />
      </div>
      <div>
        <DashboardHeader />
        <div className="flex w-full">
          <div className="w-2/3">
            <Sales
              totalSales="$1k"
              totalSalesChange="+6% from yesterday"
              totalOrders={300}
              totalOrdersChange="+5% from yesterday"
              productsSold={5}
              productsSoldChange="+12% from yesterday"
              newCustomers={8}
              newCustomersChange="6.5% from yesterday"
            />
          </div>
          <div className="w-1/3">
            <VisitorInsights />
          </div>
        </div>
        <div className="flex w-full space-x-3 mt-4">
          <div className="w-2/4">
            <RevenueChart />
          </div>
          <div className="w-1/4">
            <CustomerSatisfactionChart />
          </div>
          <div className="w-1/4">
            <TargetVsReality />
          </div>
        </div>
        <div className="flex w-full mt-5 space-x-3 my-2">
          <div className="w-2/4">
            <TopProductsTable />
          </div>
          <div className="w-1/4">
            <SalesMappingByCountry />
          </div>
          <div className="w-1/4">
            <VolumeVsServiceLevel />
          </div>
        </div>
      </div>
    </div>
  );
}
