"use client";

import { savedProducts } from "@/app/data/savedProducts";
import SavedProductCard from "./SavedProductCard";
import AddMoreCard from "./AddMoreCard";

export default function SavedProducts() {
  return (
    <section className="rounded-[10px] bg-white pt-[24px] ps-[25.5px] pe-[29px] pt-[24px] pb-[32px] mt-5">
          {/* Heading */}
          <div className="mb-[27px] flex items-center justify-between">
            <h2 className="relative text-[23px] leading-[27px] font-semibold text-[#141617]">
              Saved Products
              <span className="absolute top-1/2 right-[-30px] h-px w-[25px] -translate-y-1/2 bg-[#141617]" />
            </h2>
          </div>
    
          {/* Cards */}
          {/* <div className="grid grid-cols-1 gap-[16px] min-[1400px]:gap-[22px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {savedProducts.map((product) => (
              <SavedProductCard
                key={product.id}
                product={product}
              />
            ))}
            <AddMoreCard />
          </div> */}
          <div className="grid grid-cols-5 min-[1500px]:grid-cols-6 gap-[16px] min-[1400px]:gap-[22px] overflow-hidden">
  {savedProducts.map((product, index) => (
    <div
      key={product.id}
      className={
        index < 4
          ? "block"
          : index === 4
          ? "hidden min-[1500px]:block"
          : "hidden"
      }
    >
      <SavedProductCard product={product} />
    </div>
  ))}

  {/* Always visible */}
  <AddMoreCard />
</div>
        </section>
  );
}