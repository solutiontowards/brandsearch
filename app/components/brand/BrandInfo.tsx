import Image from "next/image";
import { BrandCard } from "../../data/brands";

interface Props {
  brand: BrandCard;
}

export default function BrandInfo({ brand }: Props) {
  return (
    <div className="flex items-center gap-2.5">

      <div className="relative h-[57px] w-[57px] shrink-0 overflow-hidden rounded-full border border-[#000000] bg-white">
        <Image
          src={brand.logoSrc}
          alt={brand.brandName}
          fill
          sizes="57px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0">

        <h3 className="truncate text-[15px] min-[1660px]:text-[18px] font-semibold leading-5 text-[#141617]">
          {brand.brandName}
        </h3>

        <p className="mt-1 text-[12px] min-[1660px]:text-[14px] font-normal text-[#141617]">
          {brand.industry}
          <span className="rounded-full bg-[#00C43717] px-[10px] py-[3px] text-[10px] font-semibold text-[#00C438]">
            Beauty
          </span>
        </p>

      <div className="mt-3 text-[14px] font-normal leading-[16px] text-[#808B96]">
            {/* <p>{brand.revenueRange}</p> */}
            <p>Price: <span className="font-bold text-[#141617]">$23.00 - 38.00</span></p>
          </div>

      </div>

    </div>
  );
}