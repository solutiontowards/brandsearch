"use client";

import Image from "next/image";
import {
  Link2,
  Copy,
  Download,
  Bookmark,
  Share2,
  ScanQrCode,
  Search,
} from "lucide-react";

export default function PopupHeader() {
  return (
    <div className="flex h-[63px] items-center justify-between rounded-[10px] border-b border-[#ECECEC] bg-white ps-[21px] pe-[27px]">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Instagram */}
        <div className="flex h-[30px] items-center gap-2 rounded-[8px] bg-[#F6F6F6] px-3">
          <Image
            src="/image/insta.svg"
            alt=""
            width={14}
            height={14}
          />

          <span className="text-[12px] font-medium text-[#141617]">
            Instagram
          </span>
        </div>

        {/* Image */}
        <div className="flex h-[30px] items-center rounded-[8px] bg-[#F6F6F6] px-3">
          <span className="text-[12px] font-medium text-[#141617]">
            Image
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-[10px]">
        {/* Track */}
        <button className="flex h-[34px] items-center gap-2 rounded-[10px] border border-[#ECECEC] bg-white px-4 transition hover:bg-[#F8F8F8]">
          <Search size={16} />

          <span className="text-[12px] font-medium">
            Track in depth
          </span>
        </button>

        {/* Library */}
        <button className="flex h-[34px] items-center gap-2 rounded-[10px] border border-[#ECECEC] bg-white px-4 transition hover:bg-[#F8F8F8]">
          <Link2 size={16} />

          <span className="text-[12px] font-medium">
            Library
          </span>
        </button>

        {/* Copy ID */}
        <button className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#ECECEC] bg-white hover:bg-[#F8F8F8]">
          <Copy size={16} />
        </button>

        {/* Download */}
        <button className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#ECECEC] bg-white hover:bg-[#F8F8F8]">
          <Download size={16} />
        </button>

        {/* Bookmark */}
        <button className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#3058FF] text-white">
          <Bookmark
            size={16}
            fill="currentColor"
          />
        </button>

        {/* Share */}
        <button className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#ECECEC] bg-white hover:bg-[#F8F8F8]">
          <Share2 size={16} />
        </button>

        {/* QR */}
        <button className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#ECECEC] bg-white hover:bg-[#F8F8F8]">
          <ScanQrCode size={16} />
        </button>
      </div>
    </div>
  );
}