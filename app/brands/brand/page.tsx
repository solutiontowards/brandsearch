import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";
import BrandTable from "@/app/components/brand/BrandTable";
import BrandPagination from "@/app/components/brand/BrandPagination";

export default function BrandPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 space-y-6 min-[1150px]:space-y-0 mt-[15px] mr-[19px] rounded-[20px] bg-[#F1F1F1] pt-[21px] px-[22px] pb-[40px] !overflow-hidden">
        {/* Navbar */}
        <BrandProductsNavbar />

        {/* Brand Table */}
        <section className="mt-[10px] bg-[#FFFFFF] rounded-[10px] py-[16px] ps-[30px] pe-[21px] overflow-hidden">
          <BrandTable />
        </section>
        <BrandPagination />
      </main>
    </div>
  );
}