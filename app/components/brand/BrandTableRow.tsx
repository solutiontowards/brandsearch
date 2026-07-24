import { BrandCard } from "../../data/brands";
import BrandInfo from "./BrandInfo";
import ProductImages from "./ProductImages";
import TrafficTrend from "./TrafficTrend";
import { BarChart3, Star } from "lucide-react";
import { RiBarChartLine } from "react-icons/ri";
import Image from "next/image";
import ActionButtons from "./ActionBtn";

interface Props {
  brand: BrandCard;
}
const platformImages = {
  facebook: "/image/facebook.png",
  instagram: "/image/instagram.png",
  google: "/image/google.png",
};

export default function BrandTableRow({ brand }: Props) {
  return (
    <div className="grid grid-cols-[60px_265px_140px_100px_120px_150px_100px_105px_130px_130px_230px_70px] items-center border rounded-[20px] mt-[7.5px] border-[#00000014] px-[17px] pt-2 pb-2">

      {/* Star + Rank */}
      <div className="flex items-center justify-center gap-[8px]">
        <button
          type="button"
          className="flex h-[15px] w-[15px] items-center"
        >
          <Star
            size={12}
            strokeWidth={1.8}
            className="text-[#808B96]"
          />
        </button>

        <span className="text-[13.5px] leading-0 font-normal text-[#060317]">
          {brand.id}
        </span>
      </div>

      <BrandInfo brand={brand} />

      <ProductImages images={brand.bestSellingProducts} />

      <div className="text-center text-[12px] leading-[15px] font-normal text-[#060317]">
        {brand.unitSold}
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
          <RiBarChartLine
            size={7}
            className="text-[#808B96]"
          />

          <p className="text-[12px] leading-[15px] font-normal text-[#060317]">
            {brand.traffic}
            <span className="mt-1 text-[9px] text-[#808B96]">
              Apr Traffic
            </span>

          </p>
        </div>


      </div>

      <TrafficTrend />

      <div className="text-center text-[12px] leading-[15px] font-normal text-[#060317]">
        {brand.liveRevenue}
      </div>

      <div className="text-center text-[12px] leading-[15px] font-normal text-[#060317]">
        {brand.gmv}
      </div>

      <div className="flex justify-center">
        <span className="inline-flex items-center gap-[4.5px] text-[12px] font-normal text-[#060317]">
          <Image
            src="/image/us-logo.png"
            alt="US Flag"
            width={16}
            height={16}
            className="h-[12px] w-[12px] rounded-full"
          />
          {brand.country}
        </span>
      </div>

      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 text-[12px] leading-[15px] font-normal text-[#060317]">
          {brand.revenueRange}
        </span>
      </div>

      {/* social */}

      <div className="flex justify-center gap-4">
        {brand.platformMetrics.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="flex gap-[3.05px]">
              <Image
                src={platformImages[item.platform as keyof typeof platformImages]}
                alt={item.platform}
                width={8}
                height={8}
                className="object-contain"
              />

              {/* Platform Name */}
              <span className="text-[9px] font-normal capitalize text-[#808B96]">
                {item.platform}
              </span>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-1">
              <span className="text-[10.5px] font-bold">{item.value}</span>
              <span className="text-[9px] font-normal text-[#808B96]">
                /{item.total}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* cave and bookmarks button */}
      <div>
        <ActionButtons />
      </div>
    </div>
  );
}