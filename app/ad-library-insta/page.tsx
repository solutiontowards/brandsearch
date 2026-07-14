import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";

import RecentlyViewedAds from "@/app/components/sections/RecentlyViewedAds/RecentlyViewedAds";
import InstagramAds from "@/app/components/sections/InstagramAds/InstagramAds";

import BrandPagination from "@/app/components/brand/BrandPagination";

export default function AdsLibraryInstaPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 space-y-6 min-[1150px]:space-y-0 mt-[15px] mr-[19px] rounded-[20px] bg-[#F1F1F1] pt-[21px] pr-[33px] pl-[40px] pb-[40px]">
        <BrandProductsNavbar />

        {/* Recently Viewed */}
        <RecentlyViewedAds />

        {/* Instagram Ads */}
        <InstagramAds />

        {/* Pagination */}
        <div className="mt-8 flex justify-end">
          <BrandPagination />
        </div>
      </main>
    </div>
  );
}