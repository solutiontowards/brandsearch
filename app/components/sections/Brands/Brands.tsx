import { brandCards } from "@/app/data/brands";
import BrandCard from "./BrandCard";

export default function Brands() {
  return (
    <section className="mt-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="relative text-[23px] leading-[27px] font-semibold text-[#141617]">
          Brand Cards
          <span className="absolute top-1/2 right-[-30px] h-px w-[25px] -translate-y-1/2 bg-[#141617]" />
        </h2>

        <button className="flex items-center gap-[10px] text-[13px] leading-[19px] font-normal text-[#3C3D51] underline">
          Show all
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {brandCards.map((brand) => (
          <BrandCard key={brand.id} {...brand} />
        ))}
      </div>
    </section>
  );
}
