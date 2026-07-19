"use client";

import { Flame } from "lucide-react";

export default function Badge() {
  return (
    <div className="flex h-[40px] rounded-[10px] items-center gap-4 border border-[#F1F1F1] bg-white px-[14px] py-[10px]">
      <Flame
        size={15}
        className="text-[#FF7A00]"
        fill="#FF7A00"
      />

      <span className="text-[16px] leading-5 font-medium text-[#141617]">
        Start your streak!
      </span>
    </div>
  );
}