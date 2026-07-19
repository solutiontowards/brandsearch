"use client";

import { Sparkles, ArrowUp } from "lucide-react";
import { RiImage2Line } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";

export default function ActionButtons() {
  return (
    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
      {/* AI Features */}
      <div className="flex gap-[10px] items-center">
        <button>
          <RiAddFill 
          size={24}
          />

        </button>
        <button className="flex h-[36px] w-[138px] items-center gap-2 rounded-full border border-[#ED4B72] bg-[#ED4B720D] px-4 transition hover:bg-[#FFECEF]">
        <RiImage2Line
          size={14}
          className="text-[#FF5C8A]"
        />

        <span className="text-[15px] font-medium text-[#F5305F]">
          Randomize
        </span>
      </button>
      </div>

      {/* Send */}
      <button className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#38CA6E] text-white shadow-[0px_6px_16px_rgba(56,202,110,0.35)] transition hover:scale-105 hover:bg-[#2EBE62]">
        <ArrowUp size={18} />
      </button>
    </div>
  );
}