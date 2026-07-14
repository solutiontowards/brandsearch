import { BrandCard } from "../../data/brands";
import BrandInfo from "./BrandInfo";
import ProductImages from "./ProductImages";
import TrafficTrend from "./TrafficTrend";
import { BarChart3, Star } from "lucide-react";
import { RiBarChartLine } from "react-icons/ri";
import Image from "next/image";

interface Props {
  brand: BrandCard;
}

export default function BrandTableRow({ brand }: Props) {
  return (
    <div className="grid grid-cols-[100px_360px_180px_110px_120px_170px_90px_95px_130px] items-center border rounded-[20px] mt-[10px] border-[#00000014] px-7 py-5">

      {/* Star + Rank */}
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          className="flex h-8 w-8"
        >
          <Star
            size={15}
            strokeWidth={1.8}
            className="text-[#808B96]"
          />
        </button>

        <span className="text-[18px] font-normal text-[#060317]">
          {brand.id}
        </span>
      </div>

      <BrandInfo brand={brand} />

      <ProductImages images={brand.bestSellingProducts} />

      <div className="text-center text-[14px] min-[1660x]:text-[16px] font-normal text-[#060317]">
        {brand.unitSold}
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
          <RiBarChartLine
            size={10}
            className="text-[#808B96]"
          />

          <p className="text-[14px] min-[1660px]:text-[16px] font-normal text-[#060317]">
            {brand.traffic}
            <span className="mt-1 text-[11px] min-[1660x]:text-[14px] text-[#808B96]">
              Apr Traffic
            </span>

          </p>
        </div>


      </div>

      <TrafficTrend />

      <div className="text-center text-[14px] min-[1660x]:text-[16px] font-normal text-[#060317]">
        {brand.liveRevenue}
      </div>

      <div className="text-center text-[14px] min-[1660x]:text-[16px] font-normal text-[#060317]">
        {brand.gmv}
      </div>

      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 text-[14px] min-[1660x]:text-[16px] font-normal text-[#060317]">
          <Image
            src="/image/us-logo.png"
            alt="US Flag"
            width={16}
            height={16}
            className="h-[16px] w-[16px] rounded-full"
          />
          {brand.country}
        </span>
      </div>
    </div>
  );
}