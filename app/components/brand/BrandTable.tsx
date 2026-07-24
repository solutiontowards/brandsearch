"use client";

import { brandCards } from "../../data/brands";
import BrandTableHeader from "./BrandTableHeader";
import BrandTableRow from "./BrandTableRow";
import BrandPagination from "./BrandPagination";

export default function BrandTable() {
  return (
    <div className="w-full overflow-x-auto overflow-hidden">
      <BrandTableHeader />

      <div className="w-full min-w-[1680px]">
        {brandCards.map((brand) => (
          <BrandTableRow key={brand.id} brand={brand} />
        ))}
      </div>

      
    </div>
  );
}