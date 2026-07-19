"use client";

import Image from "next/image";
import { Sparkles, Play, ArrowRight } from "lucide-react";
import { DashboardProduct } from "./types";

type Props = {
  product: DashboardProduct;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="group overflow-hidden rounded-[10px] h-[451px] border border-[#ECECEC] bg-white p-[18px] shadow-[0px_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_16px_32px_rgba(0,0,0,0.12)]">
      {/* Image */}
      <div className="relative h-[203px] overflow-hidden rounded-[10px]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="350px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* AI Badge */}
        <div className="absolute left-5 top-5 flex items-center gap-[7px] rounded-[0px] bg-white px-4 py-2 w-[117px] h-[33.33px]">
          <Sparkles
            size={16}
            className="text-black"
          />

          <span className="text-[12.5px] font-normal text-[#141617]">
            {product.badge}
          </span>
        </div>

        {/* Play Button */}
        {product.type === "video" && (
          <button className="absolute left-1/2 top-1/2 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110">
            <Play
              fill="black"
              size={24}
            />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="mt-5">
        <h2 className="text-[30px] leading-[40px] font-normal text-[#141617]">
          {product.title}
        </h2>

        <p className="mt-[13px] text-[18px] leading-[26px] font-normal text-[#707070]">
          {product.description}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-[30px] flex items-center gap-[10px]">
        <button className="rounded-full bg-[#38CA6E] w-[184px] text-[20px] leading-[24px] py-[10px] w-[184px] font-medium text-white transition hover:bg-[#2FB44F]">
          {product.buttonText}
        </button>

        <button className="flex items-center justify-center rounded-full border border-[#737474] bg-white py-[10px] text-[20px] leading-[24px] w-[184px] font-medium text-[#F5305F] transition hover:bg-[#FFF4F7]">
          {product.previousText}
        </button>
      </div>
    </div>
  );
}