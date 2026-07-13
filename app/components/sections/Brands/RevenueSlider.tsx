"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

interface RevenueSliderProps {
    revenues: string[];
}

export default function RevenueSlider({
    revenues,
}: RevenueSliderProps) {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="flex items-center justify-between relative">
            <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-3 w-3 items-center justify-center rounded-full bg-[#F3F4F6] absolute left-auto top-1/2 -translate-y-1/2 z-10 right-[38px] min-[1660px]:right-[50px]"
            >
                <ChevronLeft size={14} />
            </button>

            <Swiper
                slidesPerView={1}
                loop
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="mx-2 w-[190px]"
            >
                {revenues.map((item) => (
                    <SwiperSlide key={item}>
                        <div className="flex items-center gap-1 justify-start">
                            <p className="text-[10px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
                                Live Revenue:
                            </p>

                            <p className="text-[10px] min-[1660px]:text-[14px] font-bold leading-5 tracking-[0.03em] text-[#141617]">
                                {item}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <span className="absolute left-auto top-1/2 -translate-y-1/2 right-[17px] w-[15px] min-[1660px]:w-[25px] h-[1px] bg-[#00000059]"></span>
            <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-3 w-3 items-center justify-center rounded-full bg-[#607FF8] text-white"
            >
                <ChevronRight size={14} />
            </button>
        </div>
    );
}