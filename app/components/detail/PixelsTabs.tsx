"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    name: "Google Analytics",
    icon: "/image/google-analytics.svg",
  },
  {
    name: "Google Tag Manager",
    icon: "/image/tagManager.svg",
  },
  {
    name: "Pinterest Ads",
    icon: "/image/pinterest.svg",
  },
  {
    name: "LinkedIn Ads",
    icon: "/image/linkedin.svg",
  },
  {
    name: "Microsoft Advertising",
    icon: "/image/microsoft.svg",
  },
  {
    name: "Meta Pixel",
    icon: "/image/meta2.svg",
  },
  {
    name: "Snap Pixel",
    icon: "/image/snap.svg",
  },
  {
    name: "Google Ads",
    icon: "/image/google.svg",
  },
  {
    name: "Twitter Ads",
    icon: "/image/twit.svg",
  },
  {
    name: "Taboola",
    icon: "/image/taboola.svg",
  },
];

export default function PixelsTabs() {
  const [activeTab, setActiveTab] = useState<"pixels" | "shopify">("pixels");

  const data = items; // same data for both tabs for now

  return (
    <div className="rounded-[10px] bg-white px-[23px] pt-[19px] overflow-hidden">
      {/* Tabs */}
      <div className="flex rounded-[10px] bg-[#F8F8F8] pt-[5px] pb-[4px] px-[7px]">
        <button
          onClick={() => setActiveTab("pixels")}
          className={`flex-1 rounded-[12px] py-1 text-[16px] font-normal leading-[30px] transition ${
            activeTab === "pixels"
              ? "bg-white text-[#3C3D51]"
              : "text-[#3C3D51]"
          }`}
        >
          Pixels
        </button>

        <button
          onClick={() => setActiveTab("shopify")}
          className={`flex-1 rounded-[12px] py-3 text-[16px] font-medium transition ${
            activeTab === "shopify"
              ? "bg-white text-[#222]"
              : "text-[#666]"
          }`}
        >
          Shopify Apps
        </button>
      </div>

      {/* Grid */}
      <div className="mt-[17px] grid grid-cols-2 gap-[10px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex h-[42px] items-center gap-3 rounded-[10px] border border-[#D9D9D9] bg-white px-4 transition hover:border-[#3058FF]"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
            />

            <span className="text-[14px] leading-[30px] font-normal text-[#3C3D51]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}