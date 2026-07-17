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
import { TbListDetails } from "react-icons/tb";

import InstagramSlider from "./InstagramSlider";
import InstagramMetrics from "./InstagramMetrics";

type Props = {
    ad: InstagramAd;
};

export default function InstagramAdCard({ ad }: Props) {
    return (
        <div className="w-full max-w-[360px] rounded-[20px] bg-white pt-[24px] pb-[22px] px-[25px] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">

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

                            <h3 className="text-[15px] min-[1660px]:text-[18px] font-medium leading-6 text-[#141617]">

                                {ad.brandName}

                            </h3>

                            {/* <span className="rounded-full bg-[#F2347917] px-2 py-[3px] text-[10px] font-medium text-[#F23479]">

                {ad.category}

              </span> */}

                        </div>

                        {/* Date */}

                        <div className="mt-[0px] flex items-center gap-2">

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

            <div className="mt-4 mb-[7px] border-t border-[#00000014]" />



            {/* Metrics */}

            <div className="pb-[2px]">

                <InstagramMetrics
                    revenue={ad.revenue}
                    views={ad.views}
                    likes={ad.likes}
                    rating={ad.rating}
                />

            </div>

            {/* <div className="my-5 border-t border-[#00000014]" /> */}

            {/* Image Slider */}

            <div className="relative h-[288px] mt-[22.5px] mb-5">

                <InstagramSlider images={ad.images} />



            </div>

            {/* <div className="my-5 border-t border-[#00000014]" /> */}
            {/* Caption */}

            <div className="mt-5">
                <h3 className="text-[14px] min-[1660px]:text-[14px] font-normal leading-5 text-[#141617]">
                    {ad.title}
                </h3>

                <p className="mt-[5px] text-[12px] leading-4 font-normal text-[#808B96]">
                    {ad.description}
                </p>
            </div>

            {/* Link Box */}

            <div className="mt-5 rounded-[10px] border border-[#F234791A] bg-[#F234790D] ps-[12px] pe-[14px] py-[11px]">

                <div className="flex items-center justify-between">

                    <span className="truncate text-[11px] text-[#141617]">
                        {ad.link}
                    </span>

                    <div className="flex items-center gap-2">

                        <button>

                            <ClipboardCopy
                                size={14}
                                className="text-[#808B96]"
                            />

                        </button>

                        <button>

                            <Image
                                src="/image/share.svg"
                                alt="Share"
                                width={14}
                                height={14}
                            />

                        </button>

                    </div>

                </div>

            </div>

            {/* Bottom Buttons */}

            <div className="mt-[30px] flex items-center justify-between gap-[10px] h-[39px]">

                <button
                    type="button"
                    className="flex w-[192px] h-[39px]  items-center justify-center gap-[6.8px] rounded-[10px] bg-[#3C3D51] text-[13.6px] leading-[19.43px] font-medium border border-[#F1F1F1] bg-white transition hover:bg-[#F8F8F8]"
                >
                    <TbListDetails size={16} />
                    Details
                </button>

                <button
                    type="button"
                    className="flex h-[39px] w-[108px]  items-center justify-center gap-[6.8px] rounded-[10px]  text-[13.6px] leading-[19.43px] font-medium bg-[#F1F1F1] transition hover:bg-[#EAEAEA]"
                >
                    Analyze
                </button>

            </div>

        </div>
    );
}