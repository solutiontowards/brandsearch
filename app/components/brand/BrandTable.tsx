"use client";

import { brandCards } from "../../data/brands";
import BrandTableHeader from "./BrandTableHeader";
import BrandTableRow from "./BrandTableRow";
import BrandPagination from "./BrandPagination";

export default function BrandTable() {
  return (
    <div className="overflow-hidden">
      <BrandTableHeader />

      <div>
        {brandCards.map((brand) => (
          <BrandTableRow key={brand.id} brand={brand} />
        ))}
      </div>

      
    </div>
  );
}