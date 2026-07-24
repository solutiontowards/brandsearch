import { brandCards } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import { FaCircleChevronRight } from "react-icons/fa6";

export default function Brands() {
  return (
    <section className="pt-[52px]">
      <div className="mb-[27px] flex items-center justify-between">
        <h2 className="relative text-[23px] leading-[27px] font-semibold text-[#141617]">
          Brand Cards
          <span className="absolute top-1/2 right-[-30px] h-px w-[25px] -translate-y-1/2 bg-[#141617]" />
        </h2>

        <button className="flex items-center gap-[10px] text-[13px] leading-[19px] font-normal text-[#3C3D51] underline">
          Show all
          <FaCircleChevronRight className="text-[#607FF8] h-[20px] w-[20px]" />
        </button>
      </div>

      {/* <div className="grid gap-[25px] min-[1660px]:gap-[25px] grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {brandCards.map((brand) => (
          <BrandCard key={brand.id} {...brand} />
        ))}
      </div> */}
      <div className="grid grid-cols-4 min-[1500px]:grid-cols-5 gap-[25px] overflow-hidden">
  {brandCards.map((brand, index) => (
    <div
      key={brand.id}
      className={
        index < 4
          ? "block"
          : index === 4
          ? "hidden min-[1500px]:block"
          : "hidden"
      }
    >
      <BrandCard {...brand} />
    </div>
  ))}
</div>
    </section>
  );
}
