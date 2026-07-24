"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { RiBarChartLine } from "react-icons/ri";

import { ProductCard } from "../../data/products";

import ProductInfo from "./ProductInfo";
import ShopInfo from "./ShopInfo";
import RevenueVideos from "./RevenueVideos";
import OurProducts from "./OurProducts";
import TrafficTrend from "../../components/brand/TrafficTrend";
import ActionButtons from "../../components/brand/ActionBtn";

interface Props {
  product: ProductCard;
}

const platformImages = {
  facebook: "/image/facebook.png",
  instagram: "/image/instagram.png",
  google: "/image/google.png",
};

export default function ProductTableRow({
  product,
}: Props) {
  return (
    <div className="mt-[7.5px] grid min-w-[1750px] grid-cols-[60px_275px_185px_150px_190px_100px_150px_200px_280px_90px] items-center rounded-[20px] border border-[#00000014] bg-white px-[17px] py-[7.5px]">

      {/* Rank */}
      <div className="flex items-center justify-center gap-[8px]">
        <button className="flex h-[15px] w-[15px] items-center justify-center">
          <Star
            size={13}
            strokeWidth={1.8}
            className="text-[#808B96]"
          />
        </button>

        <span className="text-[13px] font-medium text-[#060317]">
          {product.id}
        </span>
      </div>

      {/* Product Info */}
      <ProductInfo product={product} />

      {/* Shop */}
      <ShopInfo product={product} />

      {/* Traffic */}
      <div className="flex flex-col items-center gap-[10px]">
        <TrafficTrend />

        <div className="flex items-center gap-[4px]">
          <RiBarChartLine
            size={8}
            className="text-[#808B96]"
          />

          <span className="text-[12px] font-normal leading-[15px] text-[#060317]">
            {product.traffic}
          </span>

          <span className="text-[10.5px] leading-[15px] text-[#808B96]">
            Apr Traffic
          </span>
        </div>
      </div>

      {/* Highest Revenue Videos */}
      <RevenueVideos videos={product.revenueVideos} />

      {/* Unit Sold */}
      <div className="flex flex-col items-center">
        <span className="text-[15px] leading-[15px] font-semibold text-[#060317]">
          {product.totalUnitSold}
        </span>

        {/* <span className="mt-[2px] text-[11px] text-[#808B96]">
          Unit Sold
        </span> */}
      </div>

      {/* Our Products */}
      <OurProducts
        images={product.ourProducts}
        total={product.totalProducts}
      />

      {/* Revenue */}
      <div className="flex flex-col items-center">
        <span className="text-[15px] leading-[15px] font-semibold text-[#060317]">
          {product.revenue}
        </span>
      </div>

      {/* Social Traffic */}
      <div className="flex justify-center gap-5">
        {product.platformMetrics.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-[4px]">
              <Image
                src={platformImages[item.platform]}
                alt={item.platform}
                width={10}
                height={10}
                className="object-contain"
              />

              <span className="text-[9px] capitalize text-[#808B96]">
                {item.platform}
              </span>
            </div>

            <div className="mt-[5px] flex items-center gap-[3px]">
              <span className="text-[10px] font-semibold text-[#060317]">
                {item.value}
              </span>

              <span className="text-[9px] text-[#808B96]">
                /{item.total}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Action */}
      <div className="flex justify-center">
        <ActionButtons />
      </div>
    </div>
  );
}