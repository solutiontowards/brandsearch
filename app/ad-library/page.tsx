import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";

import TopPerformingAdCard from "@/app/components/sections/TopPerformingAds/TopPerformingAdCard";
import BrandPagination from "@/app/components/brand/BrandPagination";

import { topPerformingAds } from "@/app/data/topPerformingAds";

export default function AdsLibraryPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="mt-[15px] mr-[15px] flex-1 overflow-y-auto rounded-[20px] bg-[#F8F8F8] p-6">
        <BrandProductsNavbar />

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topPerformingAds.map((ad) => (
  <TopPerformingAdCard
    key={ad.id}
    ad={ad}
  />
))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-end">
          <BrandPagination />
        </div>
      </main>
    </div>
  );
}