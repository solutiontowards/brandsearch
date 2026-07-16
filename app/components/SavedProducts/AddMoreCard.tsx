"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export default function AddMoreCard() {
  return (
    <button
      type="button"
      className="group relative flex h-[240px] w-[270px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[10px] border-none bg-[#0B00FA] transition-all duration-300 hover:shadow-[0px_10px_24px_rgba(0,0,0,0.08)]"
    >
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#FFFFFF] shadow-[0px_-2px_2px_0px_#00000026] h-[216px] w-[262px]">
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-[180px] h-[70px] bg-white rounded-t-[40px]" />

    {/* Left Curve */}
    <div className="absolute left-[calc(50%-90px)] -top-14 w-10 h-10 bg-blue-700 rounded-br-full" />

    {/* Right Curve */}
    <div className="absolute right-[calc(50%-90px)] -top-14 w-10 h-10 bg-blue-700 rounded-bl-full" /></span>
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