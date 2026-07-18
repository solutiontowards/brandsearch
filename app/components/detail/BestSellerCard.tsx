import Image from "next/image";
import { Trophy, Clock3, Download, Copy, } from "lucide-react";

type BestSellerCardProps = {
  rank: number;
  age: string;
  image: string;
  title: string;
  price: string;
  link: string;
};

export default function BestSellerCard({
  rank,
  age,
  image,
  title,
  price,
  link,
}: BestSellerCardProps) {
  return (
    <div className="w-full max-w-[281px] rounded-[18px] bg-white pt-[10px] ps-[11px] pe-[9px] pb-[17px] shadow-sm">
      {/* Top */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[9px]">
          <Trophy
            size={18}
            className="text-[#4CAF50]"
          />
          <span className="text-[19px] leading-1.2 font-medium text-[#3C3D51]">
            #{rank}
          </span>
        </div>

        <div className="flex items-center gap-[5px] rounded-[10px] border border-[#F5F5F5] bg-[#FAFAFA] px-4 py-3 w-[186px] h-[41px]">
          <Clock3
            size={18}
            className="text-[#060317]"
          />
          <span className="text-[19px] leading-1 font-medium text-[#3C3D51]">
            {age}
          </span>
        </div>
      </div>

      {/* Product Image */}
      <div className="relative mt-[9px] mb-[13px] h-[270px] overflow-hidden rounded-[8px] bg-[#F8F7F4]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <button className="absolute right-4 top-4 flex h-[30px] w-[30px] text-[#56565A] items-center justify-center rounded-[8px] bg-white">
          <Download size={16} />
        </button>
      </div>

      {/* Title */}
      <h3 className="line-clamp-2 mb-[6px] text-[16px] font-normal leading-6 text-[#141617]">
        {title}
      </h3>

      {/* Price */}
      <div className="flex items-center gap-2">
        <span className="text-[14px] leading-5 text-[#808B96]">
          Price:
        </span>

        <span className="text-[16px] leading-5 font-bold text-[#141617]">
          {price}
        </span>
      </div>

      {/* Link */}
      <div className="mt-[14px] rounded-[10px] h-[38px] border flex items-center justify-between border-[#F234791A] bg-[#F234790D] ps-[17px] pe-[12px] py-[11px]">

        <span className="truncate font-normal text-[15px] leading-4 text-[#141617]">

            {link}

          </span>

          <div className="flex items-center gap-[9px]">

            <button>

              <Copy
                size={16}
                className="text-[#141617]"
              />

            </button>

          </div>

      </div>
    </div>
  );
}