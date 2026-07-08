import { BrandCard } from "../../data/brands";
import BrandInfo from "./BrandInfo";
import ProductImages from "./ProductImages";
import TrafficTrend from "./TrafficTrend";
import { BarChart3 } from "lucide-react";

interface Props {
  brand: BrandCard;
}

export default function BrandTableRow({ brand }: Props) {
  return (
    <div className="grid grid-cols-[320px_240px_120px_140px_170px_120px_130px_170px] items-center border-b border-[#ECECEC] px-8 py-6 transition hover:bg-[#F8F8F8]">

      <BrandInfo brand={brand} />

      <ProductImages images={brand.bestSellingProducts} />

      <div className="text-center font-semibold text-[#141617]">
        {brand.unitSold}
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
          <BarChart3 size={16} className="text-[#3ECF6D]" />
          <span className="font-semibold">{brand.traffic}</span>
        </div>

        <span className="text-xs text-[#8B8B8B]">
          Apr Traffic
        </span>
      </div>

      <TrafficTrend />

      <div className="text-center font-semibold">
        {brand.liveRevenue}
      </div>

      <div className="text-center font-semibold">
        {brand.gmv}
      </div>

      <div className="flex justify-center">
        <div className="rounded-full bg-[#F5F5F5] px-4 py-2 text-sm">
          🇺🇸 {brand.country}
        </div>
      </div>

    </div>
  );
}