"use client";

import { div } from "framer-motion/m";
import { productCards } from "../../data/products";

import ProductTableHeader from "./ProductTableHeader";
import ProductTableRow from "./ProductTableRow";

export default function ProductTable() {
  return (
    <div className="bg-white px-[22px] pt-[11px] pb-[30px]">
      <div className="w-full overflow-x-auto overflow-hidden">

      <ProductTableHeader />

      <div className="min-w-[1750px] w-full">
        {productCards.map((product) => (
          <ProductTableRow
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
    </div>
  );
}