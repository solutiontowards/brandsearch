import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";

import BrandCard from "@/app/components/sections/Brands/BrandCard";
import BrandPagination from "@/app/components/brand/BrandPagination";

import { brandCards } from "@/app/data/brands";

export default function BrandsPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 mt-[15px] mr-[15px] overflow-y-auto rounded-[20px] bg-[#F8F8F8] p-6">
        <BrandProductsNavbar />

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {brandCards.map((brand) => (
            <BrandCard
              key={brand.id}
              {...brand}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <BrandPagination />
        </div>
      </main>
    </div>
  );
}