"use client";

import {
  SlidersHorizontal,
  Download,
  ArrowUp,
} from "lucide-react";

interface Props {
  onView: () => void;
}

export default function BottomActionBar({
  onView,
}: Props) {
  return (
    <div className="fixed bottom-8 left-1/2 z-40 -translate-x-1/2">
      <div className="flex items-center gap-3">

        {/* <button className="flex h-14 items-center gap-2 rounded-full bg-[#25272E] px-6 text-white shadow-xl">
          <span className="text-2xl font-bold">1</span>
          <span className="text-lg text-[#BDBDBD]">brands</span>
        </button> */}

        <button
          onClick={onView}
          className="flex h-14 items-center gap-3 rounded-full bg-[#25272E] px-6 text-white shadow-xl"
        >
          <SlidersHorizontal size={20} />
          <span className="text-lg font-semibold">View</span>
        </button>

        {/* <button className="flex h-14 items-center gap-3 rounded-full bg-[#25272E] px-6 text-white shadow-xl">
          <Download size={20} />
          <span className="text-lg font-semibold">Export</span>
        </button>

        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25272E] text-white shadow-xl">
          <ArrowUp size={20} />
        </button> */}
      </div>
    </div>
  );
}