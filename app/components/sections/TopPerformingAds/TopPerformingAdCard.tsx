import Image from "next/image";
import { Bookmark, ClipboardCopy, MoreVertical } from "lucide-react";
import type { TopPerformingAd } from "@/app/data/topPerformingAds";

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="mt-3 flex h-8 items-end gap-[6px]">
      {data.map((value, index) => (
        <div
          key={index}
          className="w-1.5 rounded-full bg-[#38CA6E]"
          style={{ height: `${Math.max(8, (value / max) * 100)}%` }}
        />
      ))}
    </div>
  );
}

export default function TopPerformingAdCard(ad: TopPerformingAd) {
  return (
    <div className="w-full max-w-sm rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#141617]">
            {ad.brandName}
          </p>
          <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.22em] text-[#F07086]">
            {ad.category}
          </p>
        </div>

        <button
          type="button"
          aria-label="More options"
          className="rounded-full p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
        >
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[12px] font-semibold text-[#141617]">
          {ad.period}
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[12px] font-semibold text-[#141617]">
          {ad.days}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {ad.statusTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-[#F4FAFF] px-3 py-1 text-[12px] font-semibold text-[#2F80ED]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[13px] font-medium text-[#6B7280]">{ad.revenueLabel}</p>
          <p className="mt-1 text-[16px] font-semibold text-[#141617]">{ad.revenueValue}</p>
        </div>
        <div>
          <p className="text-[13px] font-medium text-[#6B7280]">{ad.totalAdsLabel}</p>
          <p className="mt-1 text-[16px] font-semibold text-[#141617]">{ad.totalAdsValue}</p>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
        <div className="relative h-[200px] w-full">
          <Image src={ad.image} alt={ad.brandName} fill sizes="100%" className="object-cover" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 text-[13px] text-[#6B7280]">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[#141617]">
          🇺🇸
        </span>
        <span>{ad.country}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
        <span>{ad.publishDate}</span>
      </div>

      <p className="mt-4 text-[14px] leading-6 text-[#141617]">{ad.description}</p>

      <div className="mt-4 rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-[#141617]">
        <div className="flex items-center justify-between gap-3">
          <span className="truncate">{ad.link}</span>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[12px] bg-white text-slate-600 shadow-sm transition hover:bg-slate-100"
          >
            <ClipboardCopy size={16} />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-[#141617] transition hover:bg-slate-50"
        >
          <Bookmark size={16} /> Save
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[12px] bg-[#F5F5F5] px-4 py-2 text-[13px] font-medium text-[#141617] transition hover:bg-slate-200"
        >
          Analyze
        </button>
      </div>

      <Sparkline data={ad.sparkline} />
    </div>
  );
}
