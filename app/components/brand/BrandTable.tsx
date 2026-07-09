"use client";

import { brandCards } from "../../data/brands";
import BrandTableHeader from "./BrandTableHeader";
import BrandTableRow from "./BrandTableRow";
import BrandPagination from "./BrandPagination";

export default function BrandTable() {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
      <BrandTableHeader />

      <div>
        {brandCards.map((brand) => (
          <BrandTableRow key={brand.id} brand={brand} />
        ))}
      </div>

      <BrandPagination />
    </div>
  );
}