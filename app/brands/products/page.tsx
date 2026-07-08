import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import BrandProductsNavbar from "@/app/components/layout/Navbar/BrandProductsNavbar";
import BrandProducts from "@/app/components/sections/Brands/BrandProducts";

export default function BrandProductsPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 space-y-8 mt-[15px] mr-[19px] rounded-[20px] bg-[#F1F1F1] pt-[21px] pr-[33px] pl-[40px] pb-[40px]">
        <BrandProductsNavbar />
        <BrandProducts />
      </main>
    </div>
  );
}
