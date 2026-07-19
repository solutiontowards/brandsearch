"use client";

import { Sparkles } from "lucide-react";
import Badge from "./Badge";
import ProgressBar from "./ProgressBar";

export default function DashboardHeader() {
  return (
    <div className="rounded-[10px] bg-[#FFFFFF] px-[20px] py-[10px] h-[61px]">
      <div className="flex items-center justify-between">
        {/* Left */}
        <Badge />

        {/* Center */}
        <div className="flex justify-between w-[650px] relative">
          <span className="text-[16px] leading-5 font-medium text-[#060317]">
            BrandSearch improves with every piece created
          </span>
            <span className="absolute top-1/2 -translate-y-1/2 w-[230px] h-[1px] bg-[#00000033] right-[50px]" />
          <span className="text-[16px] leading-5 font-medium text-[#060317]">
            0/25
          </span>
        </div>

        {/* Right */}
        <div>
          

          <button className="flex h-[40px] w-[111px] items-center gap-[14px] rounded-[10px] border border-[#F1F1F1] bg-white px-[14px] py-[10px] transition hover:bg-[#F8F8F8]">
            <Sparkles
              size={14}
              className="text-[#141617]"
            />

            <span className="text-[16px] leading-5 font-medium text-[#060317]">
              Starter
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}