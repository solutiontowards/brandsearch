"use client";

import Image from "next/image";
import { ImagePlus, ArrowRight } from "lucide-react";
import RecentCreativeCard from "./RecentCreativeCard";
import { FaCircleChevronRight } from "react-icons/fa6";

const recentCreatives = [
    { id: 1, image: "/image/generate-2.png" },
    { id: 2, image: "/image/brand-pro-2.png" },
    { id: 3, image: "/image/brand-pro-1.png" },
    { id: 4, image: "/image/saved1.png" },
];

export default function UploadCreativeCard() {
    return (
        <section className="w-full max-w-[1191px]">
        <div className="mx-auto w-full rounded-[20px] bg-white px-[70px] pb-[30px] pt-[48px]">
            {/* Upload Box */}
            <div className="flex h-[309px] mb-[37px] cursor-pointer flex-col items-center justify-end p-5 pb-[34px] rounded-[20px] bg-[#F5F2F2] transition hover:bg-[#f5f2f3]">
                <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-0">
                    <ImagePlus
                        size={68}
                        strokeWidth={1.8}
                        className="text-[#F5305F]"
                    />
                </div>

                <p className="my-[15px] text-[30px] leading-[30px] font-normal text-[#00000066]">
                    Upload your creative
                </p>

                <p className="text-[25px] leading-[30px] font-medium text-[#141617]">
                    Max 100MB
                </p>
            </div>

            {/* Recent */}
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

            {/* Images */}
            <div className="mt-5 grid grid-cols-4 gap-[15px]">
                {recentCreatives.map((item) => (
                    <RecentCreativeCard key={item.id} image={item.image} />
                ))}
            </div>

            
        </div>
        {/* Continue */}
          <div className="mt-[39px] flex justify-end">
            <button className="flex h-[65px] w-[218px] items-center gap-[22px] justify-end rounded-full bg-[#2B1234] pl-5 pr-2 text-white">
              <span className="text-[24px] leading-[30px] font-medium">Continue</span>

              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white">
                <ArrowRight
                  size={16}
                  className="text-[#321A40]"
                  strokeWidth={2.5}
                />
              </span>
            </button>
          </div>
        </section>
    );
}