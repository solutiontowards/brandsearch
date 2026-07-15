"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export default function AddMoreCard() {
  return (
    <button
      type="button"
      className="group relative flex h-[210px] w-[172px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[12px] border border-[#E4ECFF] bg-gradient-to-b from-[#F8FBFF] to-[#EEF5FF] transition-all duration-300 hover:shadow-[0px_10px_24px_rgba(0,0,0,0.08)]"
    >
      {/* Background Glow */}
      <div className="absolute -top-10 h-[120px] w-[120px] rounded-full bg-[#D9E9FF] opacity-50 blur-3xl" />

      {/* Folder Illustration */}
      <div className="relative z-10">
        <Image
          src="/image/add-folder.png"
          alt="Add Folder"
          width={96}
          height={96}
          className="h-[96px] w-[96px] object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Plus Icon */}
        <div className="absolute -bottom-1 -right-1 flex h-[28px] w-[28px] items-center justify-center rounded-full border-[3px] border-white bg-[#3B82F6] shadow-md">
          <Plus
            size={14}
            strokeWidth={3}
            className="text-white"
          />
        </div>
      </div>

      {/* Text */}
      <div className="relative z-10 mt-5 text-center">
        <p className="text-[15px] font-semibold leading-[22px] text-[#111827]">
          Add More Files
        </p>

        <p className="mt-1 text-[12px] leading-[18px] text-[#7A8699]">
          Upload new products
        </p>
      </div>
    </button>
  );
}