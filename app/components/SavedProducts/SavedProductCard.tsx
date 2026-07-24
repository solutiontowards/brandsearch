"use client";

import Image from "next/image";
import { Bookmark, ScanSearch } from "lucide-react";

import type { SavedProduct } from "@/app/data/savedProducts";

type Props = {
  product: SavedProduct;
};

export default function SavedProductCard({ product }: Props) {
  return (
    <div className="w-full h-[180px] relative flex items-end overflow-hidden shrink-0 rounded-[10px] bg-[#F5F5F5] px-[4px] py-[5px]">
      {/* Product Image */}
      <div className="absolute top-0 left-0 h-[116px] w-full overflow-hidden rounded-[10px]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="172px"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-[1px] h-[108px] w-full pt-[19px] px-[11px] rounded-[10px] bg-[url('/image/whitebg.png')] bg-cover bg-center bg-no-repeat px-[8px] pt-[8px] pb-[10px] shadow-[0px_6px_18px_rgba(0,0,0,0.08)]">
        {/* Title + Trend */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-[12px] font-medium leading-[18px] text-[#141617]">
              {product.title}
            </h3>

            <p className="font-normal text-[9px] leading-[13px] text-[#141617]">
              {product.date}
            </p>
          </div>

          <Image
            src={product.trendImage}
            alt="Trend"
            width={48}
            height={18}
            className="h-[18px] w-[48px] object-contain"
          />
        </div>

        {/* Divider */}
        <div className="my-[10px] h-px bg-[#F2F2F2]" />

        {/* Bottom Buttons */}
        <div className="flex gap-[6px]">
          <button
            type="button"
            className="flex h-[28px] flex-1 items-center justify-center gap-1 rounded-[7px] bg-[#F8F8F8] text-[10px] font-medium text-[#3C3D51] transition hover:bg-[#EFEFEF]"
          >
            <Bookmark size={12} fill="#F23479" className="text-[#F23479]" />
            My Favorites
          </button>

          <button
            type="button"
            className="flex h-[28px] flex-1 items-center justify-center gap-1 rounded-[7px] bg-[#F8F8F8] text-[10px] font-medium text-[#3C3D51] transition hover:bg-[#EFEFEF]"
          >
            <ScanSearch size={12} />
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
}