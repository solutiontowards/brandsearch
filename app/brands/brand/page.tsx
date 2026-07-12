import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";
import BrandTable from "@/app/components/brand/BrandTable";
import BrandPagination from "@/app/components/brand/BrandPagination";

export default function BrandPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 mt-[15px] mr-[15px] overflow-y-auto rounded-[20px] bg-[#F8F8F8] p-6">
        {/* Navbar */}
        <BrandProductsNavbar />

        {/* Brand Table */}
        <section className="mt-6 bg-[#FFFFFF] rounded-[10px] py-[16px] ps-[30px] pe-[21px]">
          <BrandTable />
        </section>
        <BrandPagination />
      </main>
    </div>
  );
}