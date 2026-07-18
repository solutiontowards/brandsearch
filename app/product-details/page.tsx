import DetailNavbar from "@/app/components/detail/DetailNavbar";
import DetailTabs from "@/app/components/detail/DetailTabs";
import DetailHero from "@/app/components/detail/DetailHero";
import StatsGrid from "@/app/components/detail/StatsGrid";
import { FaCircleChevronRight } from "react-icons/fa6";

import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import TopPerformingAdCard from "@/app/components/sections/TopPerformingAds/TopPerformingAdCard";
import { topPerformingAds } from "@/app/data/topPerformingAds";
import RelatedProducts from "../components/detail/RelatedProduct";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";

export default function ProductDetailsPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 space-y-5 min-[1150px]:space-y-0 mt-[15px] mr-[19px] rounded-[20px] bg-[#F1F1F1] pt-[21px] pr-[33px] pl-[40px] pb-[40px]">
        <DetailNavbar />

        {/* Cards */}
        <div className="mt-[15px]">
          {/* <DetailTabs /> */}

          <DetailHero />

          <div className=" mt-3 mb-[27px] flex items-center justify-between">
            <h2 className="relative text-[23px] leading-[27px] font-semibold text-[#141617]">
              Top Performing Ads
              <span className="absolute top-1/2 right-[-30px] h-px w-[25px] -translate-y-1/2 bg-[#141617]" />
            </h2>

           <div className="flex items-center gap-10">
            <div className="switchBar h-10 max-w-[189px] rounded-[36px] flex items-center justify-between px-[7px] py-[5px] bg-white">
              <p className="bg-[#ED4B72] text-[#FFFFFF] rounded-[36px] text-[16px] flex h-[30px] items-center gap-2 leading-4 font-medium px-[13px] py-[5px]"><FiFacebook /> Meta</p>
              <p className="bg-[#fffff] text-[#060317] rounded-[36px] text-[14px] flex items-center gap-2 leading-4 font-medium px-[13px] py-[5px]"><PiTiktokLogo /> TikTok</p>
            </div>

             <button className="flex items-center gap-[10px] text-[13px] leading-[19px] font-normal text-[#3C3D51] underline">
              Show all
              <FaCircleChevronRight className="text-[#607FF8] h-[20px] w-[20px]" />
            </button>
           </div>
          </div>

          {/* <StatsGrid /> */}
          <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {topPerformingAds.map((ad) => (
              <TopPerformingAdCard
                key={ad.id}
                ad={ad}
                variant="meta"
              />
            ))}
          </div>
        </div>

        <div>
          <RelatedProducts />
        </div>
      </main>
    </div>
  );
}