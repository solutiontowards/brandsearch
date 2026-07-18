"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { InstagramAd } from "@/app/data/instagramAds";
import { FaStar } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GoStack } from "react-icons/go";
type Props = {
  ad: InstagramAd;
};

export default function PopupLeft({ ad }: Props) {
  return (
    <div className="rounded-[10px] bg-white px-5 pb-[30px] pt-[10px] h-[771px]">
      {/* Top Badges */}
      <div className="mb-4 h-[35px] text-[17.5px] leading-[25px] text-[#3253F0] font-medium flex items-center justify-end gap-[6.25px]">
        <div className="rounded-[25px] flex gap-[5px] w-[64px] bg-[#56565A26] px-3 py-1 text-[#56565A]">
          <GoStack /> 4
        </div>

        <div className="rounded-[25px] flex gap-[5px] w-[94px] bg-[#607FF826] px-3 py-1">
          <IoAnalyticsOutline /> 1466
        </div>

        <div className="rounded-[25px] w-[115px] flex gap[2.5px] bg-[#607FF826] px-3 py-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>

      {/* Main Image */}
      <div className="relative h-[518px] overflow-hidden rounded-[12px]">
        <Image
          src="/image/product-details.png"
          alt=""
          fill
          sizes="518px"
          className="object-cover"
        />
      </div>

      {/* Brand */}
      <div className="mt-4 flex items-center gap-5">
        <div className="relative flex h-[59px] w-[59px] items-center justify-center rounded-full border border-[#000000] text-xs text-white">
          <Image
          src="/image/brand-logo.png"
          alt=""
          fill
          sizes="59px"
          className="object-cover rounded-full"
        />
        </div>

        <div>
          <h3 className="text-[24px] leading-[37px] font-medium text-[#141617]">
            Tymo-Beauty
          </h3>

          <p className="text-[16px] leading-6 font-normal text-[#787C80]">
            #5431254197099856
          </p>
        </div>

        <button className="ml-auto flex items-center gap-[9px] h-[40px] w-[130px] rounded-[10px] border border-[#F1F1F1] bg-[#F1F1F1] px-3 py-2 text-[16px] leading-5 font-medium flex justify-center items-baseline">
          Shop Now

          <ExternalLink size={14} />
        </button>
      </div>

      {/* Caption */}
      <p className="mt-5  mb-[15px] text-[22px] leading-[20px] text-[#141617]">
        Elite Pro – The Smarter Mouse...
        <span className="text-[17px] font-semibold">See More</span>
      </p>

      {/* Link */}
      <div className="mt-4 flex h-[38px] items-center justify-between rounded-[10px] border border-[#F2D8DD] bg-[#FFF7F8] px-3">
        <span className="text-sm text-[#555]">
          https://www.ryzesuperfoods.com
        </span>

        <ExternalLink size={15} />
      </div>
    </div>
  );
}