import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";
import BrandTable from "@/app/components/brand/BrandTable";

export default function BrandPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 mt-[15px] mr-[19px] rounded-[20px] bg-[#F1F1F1] pt-[21px] pr-[33px] pl-[40px] pb-[40px] overflow-auto">
        {/* Navbar */}
        <BrandProductsNavbar />

        {/* Brand Table */}
        <section className="mt-6">
          <BrandTable />
        </section>
      </main>
    </div>
  );
}