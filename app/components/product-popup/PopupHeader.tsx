"use client";

import Image from "next/image";
import {
  X,
  Search,
  Link2,
  Copy,
  Download,
  Bookmark,
  Share2,
  ScanQrCode,
} from "lucide-react";
import { LuDot } from "react-icons/lu";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FaLink } from "react-icons/fa6";

export default function PopupHeader() {
  return (
    <div className="flex h-[60px] items-center rounded-[7.5px] justify-between border-b border-[#ECECEC] bg-white px-[20px]">
      {/* ================= Left ================= */}
      <div className="flex items-center gap-[10px]">
        {/* Close */}
        <button className="flex h-[33px] w-[33px] items-center justify-center rounded-[7.5px] bg-[#F2347917] transition-colors hover:bg-[#FFDDE9]">
          <X
            size={18}
            strokeWidth={2.5}
            className="text-[#F23479]"
          />
        </button>

        {/* Instagram */}
        <div className="flex h-[30px] w-[151px] items-center gap-1 rounded-[8px] bg-[#F6F6F6] px-[11.25px] py-[7.5px]">
          <Image
            src="/image/insta.svg"
            alt="Instagram"
            width={14}
            height={14}
          />

          <span className="text-[12px] flex gap-[2px] font-medium leading-none text-[#141617]">
            Instagram <LuDot /> Image
          </span>
        </div>

        
      </div>

      {/* ================= Right ================= */}
      <div className="flex items-center gap-[8px]">
        {/* Track in depth */}
        <button className="flex h-[33px] w-[115px] items-center gap-2 rounded-[8px] border-0 bg-[#F1F1F1] px-[11.25px] py-[7.5px] transition-colors hover:bg-[#F8F8F8]">
          <MdOutlineTrackChanges
            size={16}
            strokeWidth={2}
          />

          <span className="text-[10.5px] leading-[18px] font-medium text-[#000000]">
            Track in depth
          </span>
        </button>

        {/* Library */}
        <button className="flex h-[33px] w-[75px] items-center gap-2 rounded-[7.5px] border border-[#808B964D] bg-white px-[11.25px] py-[7.5px] transition-colors hover:bg-[#F8F8F8]">
          <FaLink 
            size={30}
            strokeWidth={2}
            className="text-[30px]"
          />

          <span className="text-[10.5px] leading-[18px] font-medium text-[#000000]">
            Library
          </span>
        </button>

        {/* ID */}
        <button className="flex h-[33px] w-[55px] items-center gap-2 rounded-[7.5px] border border-[#808B964D] bg-white px-[11.25px] py-[7.5px] transition-colors hover:bg-[#F8F8F8]">
          <Copy
            size={15}
            strokeWidth={2}
          />

          <span className="text-[10.5px] leading-[18px] font-medium text-[#000000]">
            ID
          </span>
        </button>

        {/* HD */}
        <button className="flex h-[33px] w-[60px] items-center gap-2 rounded-[7.5px] border border-[#808B964D] bg-white px-[11.25px] py-[7.5px] transition-colors hover:bg-[#F8F8F8]">
          <Download
            size={15}
            strokeWidth={2}
          />

          <span className="text-[10.5px] leading-[18px] font-medium text-[#000000]">
            HD
          </span>
        </button>

        {/* Bookmark */}
        <button className="flex h-[33px] w-[33px] items-center gap-2 rounded-[7.5px] border border-[#808B964D] bg-white p-[7.5px] transition-colors hover:bg-[#F8F8F8]">
          <Bookmark
            size={15}
            fill="#F23479"
            color="#F23479"
          />
        </button>

        {/* Share */}
        <button className="flex h-[33px] w-[33px] items-center gap-2 rounded-[7.5px] border border-[#808B964D] bg-[#3253F0] text-white p-[7.5px] transition-colors hover:bg-[#2448E5]">
          <Share2
            size={15}
            strokeWidth={2}
          />
        </button>

        {/* QR */}
        <button className="flex h-[33px] w-[33px] items-center gap-2 rounded-[7.5px] border border-[#808B964D] bg-white p-[7.5px] transition-colors hover:bg-[#F8F8F8]">
          <ScanQrCode
            size={15}
            strokeWidth={2}
          />
        </button>
      </div>
    </div>
  );
}