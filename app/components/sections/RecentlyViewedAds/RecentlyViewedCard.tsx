import Image from "next/image";
import { MoreVertical, ClipboardCopy, Play } from "lucide-react";
import type { RecentlyViewedAd } from "@/app/data/recentlyViewedAds";
export default function RecentlyViewedCard({
  ad,
}: {
  ad: RecentlyViewedAd;
}) {
  return (
    <div className="w-full rounded-[14px] border border-[#ECECEC] bg-[#F9F9F9] p-3">

      {/* Image */}

      <div className="relative overflow-hidden rounded-[10px]">

        <div className="relative h-[105px] w-full">

          <Image
            src={ad.image}
            alt={ad.brandName}
            fill
            sizes="220px"
            className="object-cover"
          />

        </div>

        {/* Video */}

        {ad.isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">

              <Play
                size={18}
                className="ml-[2px] fill-black text-black"
              />

            </button>

          </div>
        )}

      </div>

      {/* Brand */}

      <div className="mt-3 flex items-start justify-between">

        <div className="flex gap-2">

          <div className="relative h-[28px] w-[28px] overflow-hidden rounded-full">

            <Image
              src={ad.logo}
              alt={ad.brandName}
              fill
              sizes="28px"
              className="object-cover"
            />

          </div>

          <div>

            <h3 className="text-[13px] font-medium leading-4 text-[#141617]">
              {ad.brandName}
            </h3>

            <div className="mt-[2px] flex items-center gap-2">

              <span className="text-[10px] text-[#141617]">
                {ad.period}
              </span>

              <span className="rounded bg-[#F5F5F5] px-[6px] py-[2px] text-[9px] text-[#3C3D51]">
                {ad.days}
              </span>

            </div>

          </div>

        </div>

        <button>

          <MoreVertical
            size={15}
            className="text-[#808B96]"
          />

        </button>

      </div>

      {/* Link */}

      <div className="mt-3 rounded-[10px] border border-[#F4D8DF] bg-[#FFF5F7] px-3 py-[8px]">

        <div className="flex items-center justify-between gap-3">

          <span className="truncate text-[11px] text-[#141617]">

            {ad.link}

          </span>

          <div className="flex items-center gap-2">

            <button>

              <ClipboardCopy
                size={14}
                className="text-[#808B96]"
              />

            </button>

            <button>

              <Image
                src="/image/share.svg"
                alt="Share"
                width={14}
                height={14}
              />

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}