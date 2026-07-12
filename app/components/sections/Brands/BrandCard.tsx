"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Bookmark, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import type { BrandCard as BrandCardType, BrandPlatformMetric } from "@/app/data/brands";

const PLATFORM_ICON_SRC: Record<BrandPlatformMetric["platform"], string> = {
  facebook: "/image/facebook.png",
  instagram: "/image/instagram.png",
  google: "/image/google.png",
};

interface BrandCardProps extends BrandCardType {
  onSave?: () => void;
  onAnalyze?: () => void;
}

export default function BrandCard({
  brandName,
  industry,
  country,
  logoSrc,
  traffic,
  gmv,
  unitSold,
  revenueRange,
  liveRevenue,
  activeProducts,
  influencerSales,
  bestSellingProducts,
  platformMetrics,
  onSave,
  onAnalyze,
}: BrandCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bestSellingProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? bestSellingProducts.length - 1
        : prev - 1
    );
  };

  const visibleProducts = Array.from(
    { length: visibleCount },
    (_, index) =>
      bestSellingProducts[
      (currentIndex + index) % bestSellingProducts.length
      ]
  );

  return (
    <div className="w-full max-w-sm rounded-[18px] border border-slate-200 bg-white px-3 py-5 min-[1660px]:p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">

      <div className="flex items-start justify-between">
        <div className="flex items-start gap-1.5 min-[1660px]:gap-2.5">
          {/* Logo */}
          <div className="relative h-[20px] min-[1660px]:h-[26px] w-[20px] min-[1660px]:w-[26px] shrink-0 grow-0 basis-[20px] min-[1660px]:basis-[26px] border-[0.3px] border-[#000000] overflow-hidden rounded-full">
            <Image
              src={logoSrc}
              alt={brandName}
              fill
              sizes="26px"
              className="object-cover"
            />
          </div>

          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-roboto text-[14px] min-[1660px]:text-[18px] font-medium leading-6 text-[#141617]">
                {brandName}
              </h3>

              <span
                className="
            rounded-full
            bg-[#00C43717]
            px-[8px]
            py-[3px]
            text-[10px]
            font-normal
            leading-[10px]
            text-[#00C438]
          "
              >
                Brand
              </span>
            </div>

            <p className="mt-[2px] text-[11px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
              {industry}
            </p>
          </div>
        </div>

        <button className="text-[#808B96]">
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-between">
        {/* Left */}
        <div>
          <div className="flex items-end gap-1">
            <span className="text-[18px] min-[1660px]:text-[26px] font-medium leading-[34px] text-[#141617]">
              {traffic}
            </span>

            <span className="pb-[4px] text-[12px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
              apr traffic
            </span>
          </div>
        </div>

        {/* Graph */}
        <div className="relative h-[36px] w-[60px] min-[1660px]:w-[127px] overflow-hidden">
          <Image
            src="/image/pink-graph.png"
            alt="Traffic graph"
            fill
            sizes="127px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="mt-5">
        <div className="mt-6 flex items-start min-[1660px]:items-center justify-between flex-col min-[1660px]:flex-row">
          <p className="text-[12px] min-[1660px]:text-[14px] font-normal leading-6 text-[#141617]">
            Best Selling Products
          </p>

          <div className="flex items-center gap-1.5">
            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#F5F5F5]">
              <Image
                src="/image/facebook.svg"
                alt=""
                width={14}
                height={14}
              />
            </div>

            <div className="flex h-[22px] items-center gap-1 rounded-full bg-[#F5F5F5] px-2">
              <Image
                src="/image/instagram.svg"
                alt=""
                width={14}
                height={14}
              />

              <span className="text-[10px] text-[#141617]">
                108.9k
              </span>
            </div>

            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#F5F5F5]">
              <Image
                src="/image/x.svg"
                alt=""
                width={14}
                height={14}
              />
            </div>

            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#F5F5F5]">
              <Image
                src="/image/tiktok.svg"
                alt=""
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
        <div className="relative mt-4">

          {/* Previous Button */}

          <button
            type="button"
            onClick={prevSlide}
            className="absolute -left-[10px] top-1/2 z-20 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[#F5F5F5] shadow hover:bg-[#ECECEC]"
          >
            <ChevronLeft
              size={12}
              className="text-[#808B96]"
            />
          </button>

          {/* Products */}

          <div className="flex items-center justify-center gap-2 overflow-hidden">

            {visibleProducts.map((src, index) => (

              <div
                key={index}
                className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-[15px] border border-[#00000033]"
              >

                <Image
                  src={src}
                  alt={`Product ${index + 1}`}
                  fill
                  sizes="60px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />

              </div>

            ))}

          </div>

          {/* Next Button */}

          <button
            type="button"
            onClick={nextSlide}
            className="absolute -right-[10px] top-1/2 z-20 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[#607FF8] shadow hover:bg-[#4F6EF4]"
          >
            <ChevronRight
              size={12}
              className="text-white"
            />
          </button>

        </div>


      </div>

      <div className="mt-5">

        {/* GMV + Unit Sold */}

        <div className="flex items-center justify-between">

          <div className="flex items-center">
            <p className="text-[12px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
              GMV:
            </p>

            <p className="mt-[2px] text-[12px] min-[1660px]:text-[14px] font-bold leading-5 tracking-[0.03em] text-[#38CA6E]">
              {gmv}
            </p>
          </div>

          <div className="text-right flex items-center">
            <p className="text-[12px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
              Unit Sold:
            </p>

            <p className="mt-[2px] text-[12px] min-[1660px]:text-[14px] font-bold leading-5 tracking-[0.03em] text-[#F23479]">
              {unitSold}
            </p>
          </div>

        </div>



        {/* Revenue */}

        <div className="mt-5 flex items-center justify-between">

          <div>

            <p className="text-[12px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
              Revenue
            </p>

            <h3 className="mt-1 text-[14px] min-[1660px]:text-[20px] font-medium leading-[26px] text-[#141617]">
              {revenueRange}
            </h3>

            {/* Country */}

            <div className="mt-2 flex items-center gap-2">

              <Image
                src="/image/us-logo.png"
                alt=""
                width={18}
                height={18}
                className="rounded-full"
                style={{ width: "18px", height: "18px" }}
              />

              <span className="text-[12px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
                {country}
              </span>

            </div>

          </div>



          {/* Revenue Graph */}

          <div className="relative h-[36px] w-[50px] min-[1660px]:w-[87px]">

            <Image
              src="/image/blue-graph.png"
              alt=""
              fill
              sizes="87px"
              className="object-contain"
            />

          </div>

        </div>

      </div>
      <div className="my-4 border-t border-[#00000014]" />

      <div className="space-y-3">

        <div className="flex items-center justify-start gap-1">

          <p className="text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
            Live Revenue:
          </p>

          <p className="text-[14px] font-bold leading-5 tracking-[0.03em] text-[#141617]">
            {liveRevenue}
          </p>

        </div>

        <div className="relative h-[6px] rounded-full bg-[#ECECEC]">

          <div
            className="absolute left-0 top-0 h-full rounded-full bg-[#607FF8]"
            style={{ width: "92%" }}
          />

          <div className="absolute right-0 top-1/2 h-[12px] w-[12px] -translate-y-1/2 rounded-full bg-[#607FF8] ring-2 ring-white" />

        </div>

      </div>

      <div className="my-4 border-t border-[#00000014]" />
      <div className="flex items-center justify-start gap-1">

        <p className="text-[10px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
          Number of Active Products Sold:
          <span className="ms-1 text-[9px] min-[1660px]:text-[14px] font-bold leading-5 tracking-[0.03em] text-[#141617]">
            {activeProducts}
          </span>
        </p>



      </div>
      <div className="my-4 border-t border-[#00000014]" />
      <div className="flex items-center justify-start gap-0.1">

        <p className="text-[10px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
          Number of Influencers with Sales:
          <span className="ms-1 text-[9px] min-[1660px]:text-[14px] font-bold leading-5 tracking-[0.03em] text-[#141617]">
            {influencerSales}
          </span>
        </p>



      </div>
      <div className="mt-4 border-t border-[#00000014]" />
      <div className="mt-5 grid grid-cols-3 gap-4">

        {platformMetrics.map((metric) => (

          <div key={metric.platform}>

            {/* Icon + Name */}

            <div className="flex items-center justify-center gap-1">

              <Image
                src={PLATFORM_ICON_SRC[metric.platform]}
                alt={metric.platform}
                width={14}
                height={14}
              />

              <span className="text-[8px] min-[1660x]:text-[12px] font-normal leading-[12px] tracking-[0.03em] text-[#808B96]">
                {metric.platform}
              </span>

            </div>

            {/* Numbers */}

            <div className="mt-[6px] flex items-end justify-center gap-1">

              <span className="text-[12px] min-[1660x]:text-[14px] font-bold leading-5 tracking-[0.03em] text-[#141617]">
                {metric.value}
              </span>

              <span className="text-[8px] min-[1660x]:text-[12px] font-normal leading-[12px] tracking-[0.03em] text-[#808B96]">
                /{metric.total}
              </span>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onSave}
          className="flex items-center justify-center gap-2 rounded-[12px] border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-[#3C3D51] transition hover:bg-slate-50"
        >
          <Bookmark size={16} /> Save
        </button>
        <button
          type="button"
          onClick={onAnalyze}
          className="flex items-center justify-center rounded-[12px] bg-[#F5F5F5] px-4 py-2 text-[13px] font-medium text-[#3C3D51] transition hover:bg-slate-200"
        >
          Analyze
        </button>
      </div>
    </div>
  );
}
