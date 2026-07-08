import Image from "next/image";
import { BrandCard } from "../../data/brands";
import { Star } from "lucide-react";

interface Props {
  brand: BrandCard;
}

export default function BrandInfo({ brand }: Props) {
  return (
    <div className="flex items-start gap-4">

      {/* Favourite */}
      <button className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#E7E7E7] hover:bg-[#F7F7F7]">
        <Star
          size={17}
          className="text-[#C8C8C8]"
          strokeWidth={2}
        />
      </button>

      {/* Rank */}
      <div className="mt-2 w-6 text-center text-[15px] font-semibold text-[#8B8B8B]">
        {brand.id}
      </div>

      {/* Logo */}
      <div className="relative h-[56px] w-[56px] overflow-hidden rounded-full border border-[#EFEFEF] bg-white">
        <Image
          src={brand.logoSrc}
          alt={brand.brandName}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">

        <h3 className="text-[17px] font-semibold text-[#181818]">
          {brand.brandName}
        </h3>

        <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-[#8A8A8A]">
          {brand.industry}
        </p>

        <div className="mt-3 flex items-center gap-2">

          <span className="rounded-full bg-[#EAFBF0] px-3 py-1 text-xs font-semibold text-[#26A65B]">
            Beauty
          </span>

          <span className="text-[13px] text-[#6F6F6F]">
            {brand.revenueRange}
          </span>

        </div>

      </div>

    </div>
  );
}