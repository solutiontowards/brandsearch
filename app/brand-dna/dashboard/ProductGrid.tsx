"use client";

import ProductCard from "./ProductCard";
import { dashboardProducts } from "./data";

export default function ProductGrid() {
  return (
    <section className="mt-[30px]">
      <h2 className="relative text-[23px] leading-[27px] font-semibold text-[#141617]">
          Trending Products
          <span className="absolute top-1/2 right-[-30px] h-px w-[25px] -translate-y-1/2 bg-[#141617]" />
        </h2>

      <div className="mt-5 grid grid-cols-1 gap-[25px] lg:grid-cols-2 xl:grid-cols-3">
        {dashboardProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}