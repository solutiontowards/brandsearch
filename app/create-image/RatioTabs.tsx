"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { ratioTabs, imageCountTabs } from "./data";
import { FaRegSquare } from "react-icons/fa";

export default function RatioTabs() {
  const [activeRatio, setActiveRatio] = useState("9:16");
  const [activeCount, setActiveCount] = useState("3");

  return (
    <div className="flex items-center justify-between">
      {/* Left Buttons */}
      <div className="flex items-center gap-2 rounded-full px-[15px] py-2 bg-[#F5F2F2] w-[560px] h-[77px]">
        {ratioTabs.map((item) => (
          <button
            key={item}
            onClick={() => setActiveRatio(item)}
            className={`flex h-[56px] min-w-[120px] text-[30px] leading-[30px] font-normal items-center justify-center gap-2 rounded-full px-6 transition ${
              activeRatio === item
                ? "bg-white shadow-[0px_6px_18px_rgba(0,0,0,0.06)]"
                : "text-[#8B8B8B]"
            }`}
          >
            <FaRegSquare
            size={18}
              className={
                activeRatio === item
                  ? "text-[#6F7280]"
                  : "text-[#BDBDBD]"
              } />

            <span
              className={`text-[22px] ${
                activeRatio === item
                  ? "font-medium text-[#6F7280]"
                  : "text-[#8B8B8B]"
              }`}
            >
              {item}
            </span>
          </button>
        ))}
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-2 rounded-full bg-[#F5F2F2] px-[30px] py-2 w-[480px] h-[77px]">
        {imageCountTabs.map((item) => (
          <button
            key={item}
            onClick={() => setActiveCount(item)}
            className={`flex h-[56px] w-[130px] items-center justify-center rounded-full text-[30px] leading-[30px] font-normal transition ${
              activeCount === item
                ? "bg-[#38CA6E] text-[#FFFFFF]"
                : "text-[#8B8B8B]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}