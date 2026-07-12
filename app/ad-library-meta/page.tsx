import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";
import BrandPagination from "@/app/components/brand/BrandPagination";

import RecentlyViewedAds from "@/app/components/sections/RecentlyViewedAds/RecentlyViewedAds";
import TopPerformingAdCard from "@/app/components/sections/TopPerformingAds/TopPerformingAdCard";

import { topPerformingAds } from "@/app/data/topPerformingAds";

export default function AdLibraryMetaPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="mt-[15px] mr-[15px] flex-1 overflow-y-auto rounded-[20px] bg-[#F8F8F8] p-6">
        <BrandProductsNavbar />

        {/* Recently Viewed Ads */}
        <div className="mt-6">
          <RecentlyViewedAds />
        </div>

        {/* Top Performing Ads */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {topPerformingAds.map((ad) => (
            <TopPerformingAdCard
              key={ad.id}
              ad={ad}
              variant="meta"
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