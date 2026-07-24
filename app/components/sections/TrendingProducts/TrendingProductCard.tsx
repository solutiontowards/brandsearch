import Image from "next/image";
import usLogo from "../../../public/image/us-logo.png";
import { FaCaretUp } from "react-icons/fa";
import { TbGraph } from "react-icons/tb";
import { FaChevronUp } from "react-icons/fa6";
import {
  Bookmark,
  ChevronUp,
  LineChart,
  MoreVertical,
} from "lucide-react";

interface PlatformMetric {
  platform: "facebook" | "instagram" | "google";
  value: string;
  total: string;
}

// Update these paths to match the actual filenames inside your /public/image folder.
const PLATFORM_ICON_SRC: Record<PlatformMetric["platform"], string> = {
  facebook: "/image/facebook.png",
  instagram: "/image/instagram.png",
  google: "/image/google.png",
};

interface TrendingProductCardProps {
  avatarSrc?: string;
  store: string;
  category: string;
  unitSold: string;
  traffic?: string;
  trafficValue?: string;
  trafficLabel?: string;
  sparkline?: number[];
  image?: string;
  thumbnails?: string[];
  productName: string;
  priceRange: string;
  gmv: string;
  totalGmv: string;
  dailyRange: string;
  growthPercent?: string;
  countryFlag?: string;
  country?: string;
  platformMetrics?: PlatformMetric[];
  // onSave?: () => void;
  // onAnalyze?: () => void;
  // onExpand?: () => void;
}

const DEFAULT_SPARKLINE = [30, 45, 35, 55, 40, 60, 50, 70, 65, 85, 75, 95];

// Update these paths to match the actual filenames inside your /public/image folder.
const DEFAULT_MAIN_IMAGE = "/image/trending-pro1.png";
const DEFAULT_THUMBNAILS = ["/image/trending-pro2.png", "/image/trending-pro3.png"];

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex h-[26px] min-[1660px]:h-[24px] items-end gap-[1px] min-[1660px]:gap-[3px]">
      {data.map((value, i) => (
        <div
          key={i}
          className="w-1 min-[1660px]:w-1.5 rounded-full bg-emerald-500"
          style={{ height: `${Math.max(12, (value / max) * 100)}%` }}
        />
      ))}
    </div>
  );
}

export default function TrendingProductCard({
  store,
  category,
  unitSold,
  traffic,
  trafficValue,
  trafficLabel = "apr traffic",
  sparkline = DEFAULT_SPARKLINE,
  avatarSrc = "/image/trending-logo.png",
  image = DEFAULT_MAIN_IMAGE,
  thumbnails = DEFAULT_THUMBNAILS,
  productName,
  priceRange,
  gmv,
  totalGmv,
  dailyRange,
  growthPercent = "+0.0%",
  countryFlag = "🇺🇸",
  country = "USA",
  platformMetrics = [],
  // onSave,
  // onAnalyze,
  // onExpand,
}: TrendingProductCardProps) {
  const trafficDisplay = trafficValue ?? traffic ?? "0k";
  const platformLabel = {
    facebook: "Facebook",
    instagram: "Instagram",
    google: "Google",
  } as const;

  return (
    <div className="w-full max-w-[360px] rounded-[10px]  bg-white px-3 py-5 min-[1660px]:px-[25px] min-[1660px]:py-[20px] transition hover:-translate-y-0.5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-[5px] min-[1660px]:gap-[10px]">
          <div className="relative h-[23px] w-[23px] basis-[23px]  shrink-0 grow-0 min-[1660px]:basis-[26px] overflow-hidden rounded-full border border-[#000000]">
            <Image src={avatarSrc} alt="NORDIC BEAUTY" fill sizes="100%" className="object-cover" />
          </div>
          <div>
            <h3 className="text-[13.5px] min-[1660px]:text-[15px] leading-[18px] font-medium text-[#141617]">{store}</h3>
            {/* Unit sold + category */}
            <div className="mt-1 flex items-center gap-1 min-[1660px]:gap-2">
              <span className="text-[#808B96] text-[10.5px] min-[1660px]:text-[12px] leading-[15px] font-normal">
                Unit Sold: &nbsp;
                <span className="text-[#141617] text-[10.5px] min-[1660px]:text-[12px] leading-[15px] font-normal">
                  {unitSold}
                </span>
              </span>

              <span className="rounded-full bg-[#00C43717] px-[8px] py-[4px] text-[7.5px] min-[1660px]:text-[9px] font-normal text-[#00C438]">
                {category}
              </span>
            </div>
          </div>
        </div>
        <button
          type="button"
          aria-label="More options"
          className="text-slate-400 transition hover:text-slate-600"
        >
          <MoreVertical size={18} />
        </button>
      </div>



      {/* Traffic + sparkline */}
      <div className="mt-1.5 flex items-center justify-between">
        <p className="text-[19.5px] leading-[25.5px] font-medium text-[#141617]">
          {trafficDisplay}{" "}
          <span className="text-[10.5px] leading-[15px] font-normal text-[#808B96]">{trafficLabel}</span>
        </p>
        <Sparkline data={sparkline} />
      </div>

      {/* Image + thumbnails */}
      <div className="mt-3.5 grid  grid-cols-[2fr_1fr] h-[109px] grid-rows-2 gap-[9px]">
        <div className="relative col-span-1 row-span-2 overflow-hidden rounded-[11.25px] border border-black/20 bg-slate-100 h-[109px]">
          <Image src={image} alt={productName} fill sizes="100%" className="object-cover" />
        </div>
        {thumbnails.slice(0, 2).map((thumb, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-[11.25px] border border-black/20 bg-slate-100 h-[51px] min-[1660px]:h-[70px]"
          >
            <Image
              src={thumb}
              alt={`${productName} thumbnail ${i + 1}`}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Product name */}
      <p className="mt-[9px] truncate text-[10.5px] leading-[18px] font-normal text-[#141617]">
        {productName}
      </p>

      {/* Price */}
      <p className="mt-[4.5px] text-[10.5px] font-normal leading-[15px] font-normal text-[#808B96]">
        Price: <span className="font-bold text-[#141617]">{priceRange}</span>
      </p>

      <div className="my-[6px] border-t border-[#00000014]" />

      {/* GMV */}
      <div className="flex items-center justify-between text-[10.5px] min-[1660px]:text-[12px] leading-[15px] font-normal">
        <span className="text-[#808B96]">
          GMV <span className="font-bold text-[#38CA6E]">{gmv}</span>
        </span>
        <span className="text-[#808B96]">
          Total GMV: <span className="font-bold text-[#141617]">{totalGmv}</span>
        </span>
      </div>

      <div className="my-[6px] border-t border-[#00000014]" />

      {/* Daily range + growth */}
      <div className="flex items-center justify-between">
        <p className="text-[15px] min-[1660px]:text-[18px] leading-[20px] min-[1660px]:leading-[24px] font-medium text-[#141617]">{dailyRange}</p>
        <span className="flex items-center gap-0.5 text-[10.5px] leading-[15px] font-normal text-[#38CA6E]">
          <FaCaretUp size={14} />
          {growthPercent}
        </span>
      </div>

      {/* Country */}
      <div className="mt-[3px] flex items-center gap-[10px] text-sm text-slate-600">
        <span className="relative h-3 w-3 overflow-hidden rounded-full">
          <Image src={usLogo} alt="USA" fill sizes="100%" className="object-cover" />
        </span>
        <span className="text-[10.5px] leading-[15px] font-normal text-[#808B96]">{country}</span>
      </div>

      <div className="mt-3 mb-2 border-t border-[#00000014]" />

      {/* Platform metrics */}
      <div className="grid grid-cols-3 gap-2 min-[1660px]:gap-3">
        {platformMetrics.map((metric) => (
          <div key={metric.platform}>
            <div className="flex items-center justify-start gap-[4px]">
              <span className="relative grid h-6 w-6 basis-5 min-[1660px]:basis-7">
                <Image
                  src={PLATFORM_ICON_SRC[metric.platform]}
                  alt={platformLabel[metric.platform]}
                  fill
                  sizes="100%"
                  className="object-contain p-1"
                />
              </span>
              <span className="text-[9px] min-[1660px]:text-[11px] leading-none font-normal text-[#808B96]">
                {platformLabel[metric.platform]}
              </span>
            </div>
            <p className="mt-[2px] text-[9px] leading-[9px] font-normal tracking-[3%] text-[#808B96]">
              <span className="font-bold text-[10.5px] min-[1660px]:text-[12px] leading-[15px] text-[#141617]">{metric.value}</span>
              /{metric.total}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[29px] flex items-center justify-between min-[1660px]:w-[260px] ms-auto gap-2 min-[1660px]:gap-3">

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-[12px] border-0  py-2 text-[10px] font-medium text-[#141617] transition"
        >

          <Bookmark size={16} />

          Save

        </button>

        <div className="flex items-center gap-2 min-[1660px]:gap-[18px]">
          <FaChevronUp className="text-[#808B96]" />

          <button
            type="button"
            className="inline-flex items-center justify-center gap-[7px] rounded-[7.5px] min-[1660px]:w-[108px] h-[29.25px] bg-[#F1F1F1] px-2 min-[1660px]:px-4 py-[6px] min-[1660px]:py-[9.5px] text-[10px] font-medium text-[#141617] transition hover:bg-slate-200"
          >
            <TbGraph />
            Analyze

          </button>
        </div>

      </div>
    </div>
  );
}
