import Image from "next/image";
import { Bookmark, ClipboardCopy, MoreVertical, ScanSearch, FlaskConical, TrendingUp, } from "lucide-react";
import type { TopPerformingAd } from "@/app/data/topPerformingAds";
// function Sparkline({ data }: { data: number[] }) {
//   const max = Math.max(...data);
//   return (
//     <div className="mt-3 flex h-8 items-end gap-[6px]">
//       {data.map((value, index) => (
//         <div
//           key={index}
//           className="w-1.5 rounded-full bg-[#38CA6E]"
//           style={{ height: `${Math.max(8, (value / max) * 100)}%` }}
//         />
//       ))}
//     </div>
//   );
// }

export default function TopPerformingAdCard(ad: TopPerformingAd) {
  return (
    <div className="w-full max-w-sm rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between">

        <div className="flex items-start gap-2.5">

          {/* Brand Logo */}

          <div className="relative h-[26px] w-[26px] overflow-hidden rounded-full">

            <Image
              src={ad.logoSrc}
              alt={ad.brandName}
              fill
              sizes="26px"
              className="object-cover newImgError"
            />

          </div>

          {/* Brand */}

          <div>

            <div className="flex items-center gap-2">

              <h3 className="text-[18px] font-medium leading-6 text-[#141617]">

                {ad.brandName}

              </h3>

              <span className="rounded-full bg-[#F2347917] px-2 py-[3px] text-[10px] font-normal leading-[10px] text-[#F23479]">

                {ad.category}

              </span>

            </div>

            {/* Date */}

            <div className="mt-[6px] flex items-center gap-2">

              <span className="text-[14px] leading-5 tracking-[0.03em] text-[#141617]">

                {ad.period}

              </span>

              <span className="rounded-full bg-[#F5F5F5] px-[8px] py-[4px] text-[10px] font-medium leading-[10px] text-[#3C3D51]">

                {ad.days}

              </span>

            </div>

          </div>

        </div>

        <button className="text-[#808B96]">

          <MoreVertical size={18} />

        </button>

      </div>

      <div className="my-4 border-t border-[#00000014]" />

      <div className="flex items-center gap-[5px]">

        <div className="flex items-center gap-1 rounded-full border border-[#00000014] px-2 py-[4px]">

          <ScanSearch size={10} className="text-[#808B96]" />

          <span className="text-[10px] text-[#808B96]">

            Scaling

          </span>

        </div>

        <div className="flex items-center gap-1 rounded-full border border-[#00000014] px-2 py-[4px]">

          <FlaskConical size={10} className="text-[#808B96]" />

          <span className="text-[10px] text-[#808B96]">

            Testing

          </span>

        </div>

        <div className="flex items-center gap-1 rounded-full bg-[#00C43717] px-2 py-[4px]">

          <TrendingUp size={10} className="text-[#00C438]" />

          <span className="text-[10px] text-[#00C438]">

            Winning

          </span>

        </div>

      </div>
      <div className="my-4 border-t border-[#00000014]" />
      <div className="flex items-center justify-between">

        {/* Revenue */}

        <div>

          <p className="text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">

            Revenue:

          </p>

          <p className="mt-[2px] text-[14px] font-bold leading-5 tracking-[0.03em] text-[#38CA6E]">

            {ad.revenueValue}

          </p>

        </div>

        {/* Total Ads */}

        <div className="text-right">

          <p className="text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">

            Total Ads:

          </p>

          <p className="mt-[2px] text-[14px] font-bold leading-5 tracking-[0.03em] text-[#F23479]">

            {ad.totalAdsValue}

          </p>

        </div>

      </div>
      <div className="relative mt-5 overflow-hidden rounded-[10px] border border-[#0000001A]">

        <div className="relative h-[288px] w-full">

          <Image
            src={ad.image}
            alt={ad.brandName}
            fill
            sizes="100%"
            className="object-cover"
          />

        </div>

        {/* Presented By Meta */}

        <div className="absolute bottom-4 right-4 flex h-8 items-center gap-2 rounded-full bg-white px-3 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">

          <Image
            src="/image/meta-logo.svg"
            alt="Meta"
            width={22}
            height={22}
          />

          <span className="text-[12px] font-normal leading-[15px] text-[#141617]">
            Presented By
          </span>

        </div>

      </div>
      <div className="mt-4 flex items-center justify-between">

        {/* Country */}

        <div className="flex items-center">

          <Image
            src="/image/us-logo.png"
            alt="USA"
            width={16}
            height={16}
            className="mr-[11px]"
          />

          <span className="text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">

            {ad.country}

          </span>

        </div>

        {/* Publish Date */}

        <div className="flex items-center gap-1">

          <span className="text-[12px] leading-5 tracking-[0.03em] text-[#808B96]">

            Publish Date:

          </span>

          <span className="text-[14px] leading-5 tracking-[0.03em] text-[#141617]">

            {ad.publishDate}

          </span>

        </div>

      </div>
      <div className="my-4 border-t border-[#00000014]" />

      <p className="text-[12px] leading-4 text-[#808B96]">

        {ad.description}

      </p>







      <div className="mt-5 rounded-[10px] border border-[#00000014] bg-white px-3 py-[9px]">

        <div className="flex items-center justify-between">

          <span className="truncate text-[14px] text-[#141617]">

            {ad.link}

          </span>

          <div className="flex items-center gap-3">

            <button>

              <ClipboardCopy
                size={16}
                className="text-[#808B96]"
              />

            </button>

            <button>

              <Image
                src="/image/share.svg"
                alt="Share"
                width={16}
                height={16}
              />

            </button>

          </div>

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

      {/* <Sparkline data={ad.sparkline} /> */}
    </div>
  );
}
