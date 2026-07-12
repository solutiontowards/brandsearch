import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";

import TrendingProductCard from "@/app/components/sections/TrendingProducts/TrendingProductCard";
import BrandPagination from "@/app/components/brand/BrandPagination";

import { trendingProducts } from "@/app/data/trendingProducts";

export default function WinningProductsPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 mt-[15px] mr-[15px] overflow-y-auto rounded-[20px] bg-[#F8F8F8] p-6">
        <BrandProductsNavbar />

        {/* Product Cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trendingProducts.slice(0, 8).map((product) => (
            <TrendingProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-end">
          <BrandPagination />
        </div>
      </main>
    </div>
  );
}