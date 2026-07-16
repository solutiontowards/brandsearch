"use client";

import { savedProducts } from "@/app/data/savedProducts";
import SavedProductCard from "./SavedProductCard";
import AddMoreCard from "./AddMoreCard";

export default function SavedProducts() {
  return (
    <section className="rounded-[10px] bg-white pt-[24px] ps-[34px] pe-[30px] pt-[24px] pb-[32px] mt-5">
          {/* Heading */}
          <div className="mb-[27px] flex items-center justify-between">
            <h2 className="relative text-[23px] leading-[27px] font-semibold text-[#141617]">
              Saved Products
              <span className="absolute top-1/2 right-[-30px] h-px w-[25px] -translate-y-1/2 bg-[#141617]" />
            </h2>
          </div>
    
          {/* Cards */}
          <div className="grid grid-cols-1 gap-[25px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {savedProducts.map((product) => (
              <SavedProductCard
                key={product.id}
                product={product}
              />
            ))}
            <AddMoreCard />
          </div>
        </section>
  );
}