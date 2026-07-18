import { bestSellerData } from "@/app/data/bestSellerData";
import BestSellerCard from "./BestSellerCard";
import { FaCircleChevronRight } from "react-icons/fa6";

export default function BestSellerCards() {
    return (
        <section className="pt-13">
            <div className=" mb-[27px] flex items-center justify-between">
                <h2 className="relative text-[23px] leading-[27px] font-semibold text-[#141617]">
                    Bestseller Products
                    <span className="absolute top-1/2 right-[-30px] h-px w-[25px] -translate-y-1/2 bg-[#141617]" />
                </h2>

                <button className="flex items-center gap-[10px] text-[13px] leading-[19px] font-normal text-[#3C3D51] underline">
                    Show all
                    <FaCircleChevronRight className="text-[#607FF8] h-[20px] w-[20px]" />
                </button>
            </div>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-5">
                {bestSellerData.map((item) => (
                    <BestSellerCard
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
}