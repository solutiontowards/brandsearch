"use client";

import Image from "next/image";
import {
    Bookmark,
    ClipboardCopy,
    MoreVertical,
    ScanSearch,
    FlaskConical,
    TrendingUp,
} from "lucide-react";

import type { InstagramAd } from "@/app/data/instagramAds";

import InstagramSlider from "./InstagramSlider";
import InstagramMetrics from "./InstagramMetrics";

type Props = {
    ad: InstagramAd;
};

export default function InstagramAdCard({ ad }: Props) {
    return (
        <div className="w-full max-w-sm rounded-[20px] border border-[#00000014] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">

            {/* ================= Header ================= */}

            <div className="flex items-start justify-between">

                <div className="flex items-start gap-[10px]">

                    {/* Brand Logo */}

                    <div className="relative h-[42px] w-[42px] overflow-hidden rounded-full border border-[#ECECEC]">

                        <Image
                            src={ad.logoSrc}
                            alt={ad.brandName}
                            fill
                            sizes="42px"
                            className="object-cover"
                        />

                    </div>

                    {/* Brand Details */}

                    <div>

                        <div className="flex items-center gap-2">

                            <h3 className="text-[18px] font-medium leading-6 text-[#141617]">

                                {ad.brandName}

                            </h3>

                            {/* <span className="rounded-full bg-[#F2347917] px-2 py-[3px] text-[10px] font-medium text-[#F23479]">

                {ad.category}

              </span> */}

                        </div>

                        {/* Date */}

                        <div className="mt-[6px] flex items-center gap-2">

                            <span className="text-[14px] font-normal leading-5 tracking-[0.03em] text-[#141617]">

                                {ad.period}

                            </span>

                            <span className="rounded-full bg-[#F5F5F5] px-[8px] py-[4px] text-[10px] font-medium leading-[10px] text-[#3C3D51]">

                                {ad.days}

                            </span>

                        </div>

                    </div>

                </div>

                <button className="text-[#808B96]">

                    <MoreVertical size={18} />

                </button>

            </div>

            {/* Divider */}

            <div className="my-4 border-t border-[#00000014]" />



            {/* Metrics */}

            <div className="mt-5">

                <InstagramMetrics
                    revenue={ad.revenue}
                    views={ad.views}
                    likes={ad.likes}
                    rating={ad.rating}
                />

            </div>

            <div className="my-5 border-t border-[#00000014]" />

            {/* Image Slider */}

            <div className="relative">

                <InstagramSlider images={ad.images} />

                

            </div>

            <div className="my-5 border-t border-[#00000014]" />
            {/* Caption */}

            <div className="mt-5">
                <h3 className="text-[18px] font-medium leading-6 text-[#141617]">
                    {ad.title}
                </h3>

                <p className="mt-2 text-[12px] leading-4 text-[#808B96]">
                    {ad.description}
                </p>
            </div>

            {/* Link Box */}

            <div className="mt-5 rounded-[10px] border border-[#00000014] bg-white px-3 py-[9px]">

                <div className="flex items-center justify-between">

                    <span className="truncate text-[14px] text-[#141617]">
                        {ad.link}
                    </span>

                    <div className="flex items-center gap-3">

                        <button
                            type="button"
                            className="transition hover:opacity-70"
                        >
                            <ClipboardCopy
                                size={16}
                                className="text-[#808B96]"
                            />
                        </button>

                        <button
                            type="button"
                            className="transition hover:opacity-70"
                        >
                            <Image
                                src="/image/share.svg"
                                alt="Share"
                                width={16}
                                height={16}
                            />
                        </button>

                    </div>

                </div>

            </div>

            {/* Bottom Buttons */}

            <div className="mt-5 flex items-center justify-between gap-3">

                <button
                    type="button"
                    className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-white text-[13px] font-medium text-[#141617] transition hover:bg-[#F8F8F8]"
                >
                    <Bookmark size={16} />
                    Save
                </button>

                <button
                    type="button"
                    className="flex h-10 flex-1 items-center justify-center rounded-[12px] bg-[#F5F5F5] text-[13px] font-medium text-[#141617] transition hover:bg-[#EAEAEA]"
                >
                    Analyze
                </button>

            </div>

        </div>
    );
}