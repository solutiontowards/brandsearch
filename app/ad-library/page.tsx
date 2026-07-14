import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";

import TopPerformingAdCard from "@/app/components/sections/TopPerformingAds/TopPerformingAdCard";
import BrandPagination from "@/app/components/brand/BrandPagination";

import { topPerformingAds } from "@/app/data/topPerformingAds";

export default function AdsLibraryPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 space-y-5 min-[1150px]:space-y-0 mt-[15px] mr-[19px] rounded-[20px] bg-[#F1F1F1] pt-[21px] pr-[33px] pl-[40px] pb-[40px]">
        <BrandProductsNavbar />

        {/* Cards */}
        <div className="mt-5 grid grid-cols-1 gap-[25px] md:grid-cols-2 xl:grid-cols-4">
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