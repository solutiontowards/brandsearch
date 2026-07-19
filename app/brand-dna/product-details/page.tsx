import ProductSidebar from "@/app/brand-dna/product-details/ProductSidebar";
import SearchBar from "@/app/brand-dna/product-details/SearchBar";
import ProductGallery from "@/app/brand-dna/product-details/ProductGallery";
import ProductActions from "./ProductActions";

export default function ProductDetailsPage() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] px-8 py-[38px]">
      <div className="mx-auto max-w-[1378px] relative">
        <h1 className="mb-8 text-[45px] leading-[50px] font-normal text-[#141617]">
          Product Details
        </h1>

        <SearchBar />

        <div className="flex gap-8 mt-[23px] h-[648px] overflow-y-scroll">
          {/* Sidebar */}
          <ProductSidebar />

          {/* Right Content */}
          <div className="flex-1">
            

            <ProductGallery />

            
          </div>
        </div>

        <ProductActions />
      </div>
    </main>
  );
}