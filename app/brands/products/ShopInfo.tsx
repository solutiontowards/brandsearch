"use client";

import Image from "next/image";
import { ProductCard } from "../../data/products";

interface Props {
  product: ProductCard;
}

export default function ShopInfo({
  product,
}: Props) {
  return (
    <div className="flex items-center gap-[10.5px]">

      <div className="relative h-[56px] w-[56px] overflow-hidden rounded-full">
        <Image
          src={product.shopLogo}
          alt={product.shopName}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">

        <h3 className="max-w-[180px] truncate text-[12px] leading-[18px] font-normal text-[#141617]">
          {product.shopTitle}
        </h3>

        <p className="mt-[3.75px] text-[12px] leading-[15px] text-[#808B96]">
          Unit Sold :
          <span className="ml-1 font-medium text-[#141617]">
            {product.unitSold}
          </span>
        </p>

      </div>

    </div>
  );
}