"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BrandPagination() {
  return (
    <div className="flex items-center justify-end border-t border-[#ECECEC] px-8 py-6">

      {/* <p className="text-sm text-[#8A8A8A]">
        Showing 1–4 of 126 Brands
      </p> */}

      <div className="flex items-center gap-2">

        <button className="flex h-[32px] w-[32px] bg-[#FFFFFF] items-center justify-center rounded-[8px] border border-[#F1F1F1] hover:bg-gray-50">
          <ChevronLeft size={18}/>
        </button>

        <button className="h-[32px] w-[32px] rounded-lg bg-[#2F80ED] text-white font-semibold">
          1
        </button>

        <button className="h-[32px] w-[32px] bg-[#FFFFFF] rounded-[8px] border border-[#F1F1F1] hover:bg-gray-50">
          2
        </button>

        <button className="h-[32px] w-[32px] bg-[#FFFFFF] rounded-[8px] border border-[#F1F1F1] hover:bg-gray-50">
          3
        </button>
        <button className="h-[32px] w-[32px] bg-[#FFFFFF] rounded-[8px] border border-[#F1F1F1] hover:bg-gray-50">
          ...
        </button>

        <button className="h-[32px] w-[32px] bg-[#FFFFFF] rounded-[8px] border border-[#F1F1F1] hover:bg-gray-50">
          4
        </button>

        <button className="flex h-[32px] w-[32px] bg-[#FFFFFF] items-center justify-center rounded-[8px] border border-[#F1F1F1] hover:bg-gray-50">
          <ChevronRight size={18}/>
        </button>

      </div>

    </div>
  );
}