import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import SavedAdsSection from "@/app/components/sections/SavedAds/SavedAdsSection";

import { recentlyViewedAds } from "@/app/data/recentlyViewedAds";
import TrendingProductCard from "@/app/components/sections/TrendingProducts/TrendingProductCard";
import { trendingProducts } from "@/app/data/trendingProducts";
import { FaCircleChevronRight } from "react-icons/fa6";
import SavedProducts from "@/app/components/SavedProducts/SavedProducts";

export default function SavedPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="mt-[15px] mr-[15px] flex-1 overflow-y-auto rounded-[20px] bg-[#F8F8F8] p-6">

        {/* Page Title */}
        <h1 className="mb-6 text-[24px] font-semibold text-[#141617]">
          Saved Items
        </h1>

        {/* Meta */}
        {/* <SavedAdsSection
          title="Meta Ads"
          ads={recentlyViewedAds}
        /> */}
        <SavedProducts />

        
        

        <section className="mt-[25px]">
  <div className="mb-7 flex items-center justify-between">
    <h2 className="relative text-[23px] leading-[27px] font-semibold text-[#141617]">
      Recently Saved Products
      <span className="absolute top-1/2 right-[-30px] h-px w-[25px] -translate-y-1/2 bg-[#141617]" />
    </h2>

    <button className="flex items-center gap-[10px] text-[13px] leading-[19px] font-normal text-[#3C3D51] underline">
      Show all
      <FaCircleChevronRight className="h-[20px] w-[20px] text-[#607FF8]" />
    </button>
  </div>

  <div className="grid grid-cols-4 min-[1500px]:grid-cols-5 gap-3 min-[1660px]:gap-[25px] overflow-hidden">
    {trendingProducts.map((product, index) => (
      <div
        key={product.id}
        className={
          index < 4
            ? "block"
            : index === 4
            ? "hidden min-[1500px]:block"
            : "hidden"
        }
      >
        <TrendingProductCard {...product} />
      </div>
    ))}
  </div>
</section>

      </main>
    </div>
  );
}