"use client";

import Image from "next/image";
import { ProductCard } from "../../data/products";

interface Props {
  product: ProductCard;
}

export default function ProductInfo({ product }: Props) {
  return (
    <div className="flex items-center gap-[11px]">
      {/* Product Image */}
      <div className="relative h-[56px] w-[98px] overflow-hidden rounded-[4px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col">
        <h3 className="max-w-[200px] truncate text-[12px] leading-[18px] font-medium text-[#202020]">
          {product.name}
        </h3>

        <p className="leading-[15px] text-[10.5px] text-[#808B96]">
          Price :
          <span className="font-semibold text-[#141617]">
            {product.price}
          </span>
        </p>

        <div className="mt-[5px] flex items-center gap-1">
          <Image
            src="/image/us-logo.png"
            alt="country"
            width={12}
            height={12}
            className="h-3 w-3 rounded-full"
          />

          <span className="text-[12px] leading-[15px] text-[#141617]">
            {product.country}
          </span>
        </div>
      </div>
    </div>
  );
}