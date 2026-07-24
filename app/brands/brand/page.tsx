// import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
// import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";
// import BrandTable from "@/app/components/brand/BrandTable";
// import BrandPagination from "@/app/components/brand/BrandPagination";

// export default function BrandPage() {
//   return (
//     <div className="flex min-h-screen bg-[#141414]">
//       <Sidebar />

//       <main className="flex-1 space-y-6 min-[1150px]:space-y-0 mt-[15px] mr-[19px] rounded-[20px] bg-[#F1F1F1] pt-[21px] px-[22px] pb-[40px] !overflow-hidden">
//         {/* Navbar */}
//         <BrandProductsNavbar />

//         {/* Brand Table */}
//         <section className="mt-[10px] bg-[#FFFFFF] rounded-[10px] py-[16px] ps-[30px] pe-[21px] overflow-hidden">
//           <BrandTable />
//         </section>
//         <BrandPagination />
//       </main>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";
import BrandTable from "@/app/components/brand/BrandTable";
import BrandPagination from "@/app/components/brand/BrandPagination";
import BrandCard from "@/app/components/sections/Brands/BrandCard";
import { brandCards } from "@/app/data/brands";
import BottomActionBar from "@/app/components/bottomAction/BottomActionBar";
import ViewPopup from "@/app/components/bottomAction/ViewPopup";

export default function BrandPage() {
  const [view, setView] = useState<"table" | "card">("table");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="mt-[15px] mr-[19px] flex-1 rounded-[20px] bg-[#F1F1F1] px-[22px] pt-[21px] pb-[70px] !overflow-hidden">
        <BrandProductsNavbar />

        <section>
          {view === "table" ? (
            <BrandTable />
          ) : (
            <div className="mt-6 grid grid-cols-4 min-[1500px]:grid-cols-5 gap-6 overflow-hidden">
              {brandCards.map((brand, index) => (
                <div
                  key={brand.id}
                  className={
                    index < 4
                      ? "block"
                      : index < 5
                        ? "hidden min-[1500px]:block"
                        : "hidden"
                  }
                >
                  <BrandCard {...brand} />
                </div>
              ))}
            </div>
          )}
        </section>
        <BrandPagination />

        <BottomActionBar
          onView={() => setShowPopup(true)}
        />

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