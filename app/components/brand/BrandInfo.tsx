import Image from "next/image";
import { BrandCard } from "../../data/brands";

interface Props {
  brand: BrandCard;
}

export default function BrandInfo({ brand }: Props) {
  return (
    <div className="flex items-center gap-2.5">

      <div className="relative h-[42.75px] w-[42.75px] shrink-0 overflow-hidden rounded-full border border-[#000000] bg-white">
        <Image
          src={brand.logoSrc}
          alt={brand.brandName}
          fill
          sizes="42px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0">

        <h3 className="truncate text-[13.5px] font-semibold leading-[18px] text-[#141617]">
          {brand.brandName}
        </h3>

        <p className="mt-1 text-[10.5px] leading-[18px] font-normal text-[#141617]">
          {brand.industry}
          <span className="rounded-full bg-[#00C43717] px-[10px] py-[3px] text-[7.5px] leading-0 font-semibold text-[#00C438]">
            Beauty
          </span>
        </p>

      <div className="text-[10.5px] font-normal leading-[15px] text-[#808B96]">
            {/* <p>{brand.revenueRange}</p> */}
            <p>Price: <span className="font-bold text-[#141617]">$23.00 - 38.00</span></p>
          </div>

      </div>

    </div>
  );
}