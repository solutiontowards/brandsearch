// import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
// import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";
// import ProductTable from "@/app/brands/products/ProductTable";
// import BrandPagination from "@/app/components/brand/BrandPagination";

// export default function BrandProductsPage() {
//   return (
//     <div className="flex min-h-screen bg-[#141414]">
//       <Sidebar />

//       <main className="mt-[15px] mr-[19px] flex-1 rounded-[20px] bg-[#F1F1F1] pt-[21px] pr-[33px] pl-[40px] pb-[40px] !overflow-hidden">
//         {/* Navbar */}
//         <BrandProductsNavbar />

//         {/* Product Table */}
//         <section className="mt-[10px] rounded-[10px] bg-white py-[16px] ps-[30px] pe-[21px] overflow-hidden">
//           <ProductTable />
//         </section>

//         {/* Pagination */}
//         <BrandPagination />
//       </main>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";

import ProductTable from "@/app/brands/products/ProductTable";
import BrandPagination from "@/app/components/brand/BrandPagination";

import TrendingProductCard from "@/app/components/sections/TrendingProducts/TrendingProductCard";
import { trendingProducts } from "@/app/data/trendingProducts";

import BottomActionBar from "@/app/components/bottomAction/BottomActionBar";
import ViewPopup from "@/app/components/bottomAction/ViewPopup";

export default function BrandProductsPage() {
  const [view, setView] = useState<"table" | "card">("table");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="my-[12px] mr-[9px] flex-1 overflow-hidden rounded-[20px] bg-[#F1F1F1] pt-[11px] pr-[20px] pl-[23px] pb-[30px] !overflow-hidden">
        {/* Navbar */}
        <BrandProductsNavbar />

        {/* Content */}
        <section className="mt-[10px] rounded-[10px]">
          {view === "table" ? (
            <ProductTable />
          ) : (
            <div className="grid grid-cols-4 min-[1500px]:grid-cols-5 gap-3 min-[1660px]:gap-[25px] overflow-hidden">
              {trendingProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={
                    index < 4
                      ? "block"
                      : index < 5
                        ? "hidden min-[1500px]:block"
                        : "hidden"
                  }
                >
                  <TrendingProductCard {...product} />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Pagination */}
        <BrandPagination />

        {/* Bottom Action Bar */}
        <BottomActionBar
          onView={() => setShowPopup(true)}
        />

        {/* View Popup */}
        <ViewPopup
          open={showPopup}
          onClose={() => setShowPopup(false)}
          view={view}
          setView={setView}
        />
      </main>
    </div>
  );
}