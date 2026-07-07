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
  const maxIndex = useMemo(() => bestSellingProducts.length - 1, [bestSellingProducts.length]);

  return (
    <div className="w-full max-w-sm rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <Image src={logoSrc} alt={brandName} fill sizes="100%" className="object-cover" />
          </div>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#607FF8]">
              Brand
            </p>
            <h3 className="mt-1 text-[20px] font-semibold text-[#141617]">
              {brandName}
            </h3>
            <p className="text-[13px] leading-[18px] text-[#6B7280]">{industry}</p>
          </div>
        </div>

        <button
          type="button"
          aria-label="More actions"
          className="rounded-full p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
        >
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="mt-5 rounded-[16px] bg-slate-50 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[13px] uppercase tracking-[0.18em] text-[#808B96]">APR traffic</p>
            <p className="mt-1 text-[28px] font-semibold text-[#141617]">{traffic}</p>
          </div>
          <div className="text-right">
            <p className="text-[13px] text-[#808B96]">Country</p>
            <p className="mt-1 text-[16px] font-medium text-[#141617]">{country}</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#808B96]">
            Best Selling Products
          </p>
          <button className="text-[12px] font-medium text-[#607FF8] transition hover:text-[#445ed3]">
            View all
          </button>
        </div>

        <div className="mt-3 relative">
          <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-slate-50">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {bestSellingProducts.map((src, index) => (
                <div key={index} className="min-w-full p-4">
                  <div className="relative h-[140px] overflow-hidden rounded-[24px] bg-slate-100">
                    <Image src={src} alt={`${brandName} product ${index + 1}`} fill sizes="100%" className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous product"
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-sm transition hover:bg-white"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next product"
            onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, bestSellingProducts.length - 1))}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-sm transition hover:bg-white"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-3 flex items-center justify-center gap-2">
            {bestSellingProducts.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to product ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === currentIndex ? "bg-[#141617]" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 rounded-[18px] border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-[#808B96]">GMV</p>
            <p className="mt-1 text-[18px] font-semibold text-[#141617]">{gmv}</p>
          </div>
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-[#808B96]">Unit Sold</p>
            <p className="mt-1 text-[18px] font-semibold text-[#141617]">{unitSold}</p>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-4">
          <p className="text-[13px] font-medium text-[#141617]">Revenue</p>
          <p className="mt-1 text-[14px] text-[#6B7280]">{revenueRange}</p>
          <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-[#808B96]">Live Revenue</p>
          <p className="mt-1 text-[16px] font-semibold text-[#141617]">{liveRevenue}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-[13px] text-[#141617]">
        <div className="flex items-center justify-between rounded-[16px] bg-[#F7FAFF] px-4 py-3">
          <span className="font-medium text-[#141617]">Active Products Sold</span>
          <span className="font-semibold text-[#141617]">{activeProducts}</span>
        </div>
        <div className="flex items-center justify-between rounded-[16px] bg-[#F7FAFF] px-4 py-3">
          <span className="font-medium text-[#141617]">Influencers with Sales</span>
          <span className="font-semibold text-[#141617]">{influencerSales}</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {platformMetrics.map((metric) => (
          <div key={metric.platform} className="rounded-[16px] border border-slate-200 bg-slate-50 p-3 text-center">
            <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-sm">
              <span className="relative h-5 w-5">
                <Image
                  src={PLATFORM_ICON_SRC[metric.platform]}
                  alt={metric.platform}
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </span>
            </div>
            <p className="text-[13px] font-semibold text-[#141617]">{metric.value}</p>
            <p className="text-[11px] text-[#6B7280]">/{metric.total}</p>
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
