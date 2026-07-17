import Image from "next/image";
import { MoreVertical, ClipboardCopy, Play } from "lucide-react";
import type { RecentlyViewedAd } from "@/app/data/recentlyViewedAds";
export default function RecentlyViewedCard({
  ad,
}: {
  ad: RecentlyViewedAd;
}) {
  return (
    <div className="w-full max-w-[270px] rounded-[14px] bg-[#F5F5F5] px-[10px] pt-[10px] pb-[12px] min-h-[240px]">

      {/* Image */}

      <div className="relative h-[110px] w-[250px] overflow-hidden rounded-[10px]">

        <div className="relative h-[110px] w-[250px]">

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

      <div className="mt-[15px] flex items-start justify-between">

        <div className="flex gap-2">

          <div className="relative h-[34px] w-[34px] overflow-hidden rounded-full">

            <Image
              src={ad.logo}
              alt={ad.brandName}
              fill
              sizes="28px"
              className="object-cover"
            />

          </div>

          <div>

            <h3 className="text-[16px] font-medium leading-[21px] text-[#141617]">
              {ad.brandName}
            </h3>

            <div className="mt-[0px] flex items-center gap-[9px]">

              <span className="text-[12px] leading-1 text-[#141617]">
                {ad.period}
              </span>

              <span className="rounded-[40px] bg-[#FFFFFF] px-[6px] py-[2px] w-[35px] h-[16px] text-[10px] text-[#3C3D51] flex items-baseline justify-center">
                {ad.days}
              </span>

            </div>

          </div>

        </div>

        <button className="bg-[#FFFFFF] w-[23.46px] h-[23.92px] rounded-[3.81px] flex justify-center items-center">

          <MoreVertical
            size={15}
            className="text-[#808B96]"
          />

        </button>

      </div>

      {/* Link */}

      <div className="mt-[15px] rounded-[10px] border border-[#F234791A] bg-[#F234790D] ps-[12px] pe-[14px] py-[11px]">

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