"use client";

import { useState } from "react";
import Image from "next/image";
import { MoreVertical, Heart, Copy, Check } from "lucide-react";

import type { TikTokAd } from "@/app/data/tiktokAds";
import TikTokStats from "./TikTokStats";
import { IoStar } from "react-icons/io5";

type Props = {
  ad: TikTokAd;
};

export default function TikTokAdCard({ ad }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ad.description);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full max-w-[360px] rounded-[10px] bg-white px-[25px] pt-[20px] pb-[21px] transition">
      {/* ================= Header ================= */}

      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          {/* Logo */}

          <div className="relative h-[38px] w-[38px] overflow-hidden rounded-full">
            <Image
              src={ad.logoSrc}
              alt={ad.brandName}
              fill
              sizes="38px"
              className="object-cover"
            />
          </div>

          {/* Brand Info */}

          <div>
            <div className="flex items-center gap-[10px]">
              <h3 className="text-[18px] font-medium leading-[24px] text-[#141617]">
                {ad.brandName}
              </h3>

              <Image
                src="/image/us-logo.png"
                alt="USA"
                width={16}
                height={16}
                className="h-[16px] w-[16px] rounded-full"
              />
            </div>

            <p className="text-[14px] mt-[1.5px] font-normal leading-[20px] text-[#141617]">
              {ad.startDate} - {ad.endDate}
            </p>
          </div>
        </div>

        <button>
          <MoreVertical size={18} className="text-[#808B96]" />
        </button>
      </div>

      {/* ================= Image ================= */}

      <div className="relative mt-[19px]">
        <div className="relative h-[288px] w-full overflow-hidden rounded-[10px] border border-[#0000001A]">
          <Image
            src={ad.image}
            alt={ad.brandName}
            fill
            sizes="320px"
            className="object-cover h-[288px]"
          />

          {/* {ad.isVideo && (
            <button className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90">
              <Image
                src="/image/play.svg"
                alt="Play"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </button>
          )} */}
        </div>

        {/* Favourite */}

        <button className="absolute right-4 top-5 flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-white border-[0.5px] border-[#808B964D]">
          <IoStar size={20} fill="#F23479" className="text-[#F23479]" />
        </button>
      </div>

      {/* ================= Description ================= */}

      <div className="mt-5">
        <div className="flex items-start justify-between gap-2">
          <p className="flex-1 text-[12px] font-normal leading-[16px] text-[#808B96]">
            {ad.description}
          </p>

          <button
            onClick={handleCopy}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition hover:bg-gray-100"
            title={copied ? "Copied" : "Copy"}
          >
            {copied ? (
              <Check size={16} className="text-green-600" />
            ) : (
              <Copy size={16} className="text-[#808B96]" />
            )}
          </button>
        </div>
      </div>

      <div className="mt-[9px] mb-[10px] border-t border-[#00000014]" />

      {/* ================= Stats ================= */}

      <TikTokStats
        views={ad.views}
        days={ad.days}
        relatedAds={ad.relatedAds}
        roas={ad.roas}
      />

      {/* ================= Buttons ================= */}

      <div className="mt-[31px] flex gap-[9.5px]">
        <button
          type="button"
          className="flex h-[39px] flex-1 items-center justify-center gap-[6.8px] rounded-[10px] bg-[#32063D] text-[13.6px] leading-[19.43px] font-medium text-white transition hover:opacity-90"
        >
          <Image
            src="/image/ai-stars.svg"
            alt="AI"
            width={18}
            height={18}
            className="h-[18px] w-[18px]"
          />

          AI Analyze
        </button>

        <button
          type="button"
          className="flex h-[39px] flex-1 items-center justify-center gap-[6.8px] rounded-[10px] bg-[#F1F1F1] text-[13.6px] leading-[19.43px] font-medium text-[#3C3D51] transition hover:bg-[#ECECEC]"
        >
          <Image
            src="/image/video-outline.svg"
            alt="Video"
            width={18}
            height={18}
            className="h-[18px] w-[18px]"
          />

          Recreate Video
        </button>
      </div>

    </div>
  );
}