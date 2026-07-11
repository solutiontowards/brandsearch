import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";

import RecentlyViewedAds from "@/app/components/sections/RecentlyViewedAds/RecentlyViewedAds";
import InstagramAds from "@/app/components/sections/InstagramAds/InstagramAds";

import BrandPagination from "@/app/components/brand/BrandPagination";

export default function AdsLibraryInstaPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 mt-[15px] mr-[15px] overflow-y-auto rounded-[20px] bg-[#F8F8F8] p-6">
        <BrandProductsNavbar />

        {/* Recently Viewed */}
        <RecentlyViewedAds />

        {/* Instagram Ads */}
        <InstagramAds />

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <BrandPagination />
        </div>
      </main>
    </div>
  );
}