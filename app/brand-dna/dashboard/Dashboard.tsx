"use client";

import DashboardHeader from "./DashboardHeader";
import ProductGrid from "./ProductGrid";

export default function Dashboard() {
  return (
    <section className="relative flex min-h-screen justify-center overflow-hidden rounded-[20px] bg-[#F1F1F1]">
      
      <div className="ps-[60px] pe-[33px] py-[14px]">
        {/* Header */}
        <DashboardHeader />

        {/* Trending Products */}
        <ProductGrid />
      </div>
    </section>
  );
}