"use client";

import Image from "next/image";
import { MoreVertical, Heart } from "lucide-react";

import type { TikTokAd } from "@/app/data/tiktokAds";
import TikTokStats from "./TikTokStats";

type Props = {
    ad: TikTokAd;
};

export default function TikTokAdCard({ ad }: Props) {
    return (
        <div className="w-full max-w-[360px] rounded-[20px] border border-[#00000014] bg-white p-5 shadow-sm transition hover:shadow-md">

            {/* ================= Header ================= */}

            <div className="flex items-start justify-between">

                <div className="flex items-start gap-3">

                    {/* Logo */}

                    <div className="relative h-[44px] w-[44px] overflow-hidden rounded-full">

                        <Image
                            src={ad.logoSrc}
                            alt={ad.brandName}
                            fill
                            sizes="44px"
                            className="object-cover"
                        />

                    </div>

                    {/* Brand Info */}

                    <div>

                        <div className="flex items-center gap-2">

                            <h3 className="text-[18px] font-semibold text-[#141617]">
                                {ad.brandName}
                            </h3>

                            <Image
                                src="/image/us-logo.png"
                                alt="USA"
                                width={20}
                                height={20}
                                className="h-[20px] w-[20px]"
                            />

                        </div>

                        <p className="mt-1 text-[14px] text-[#141617]">
                            {ad.startDate} - {ad.endDate}
                        </p>

                    </div>

                </div>

                <button>

                    <MoreVertical
                        size={18}
                        className="text-[#808B96]"
                    />

                </button>

            </div>

            {/* ================= Image Slider ================= */}

            <div className="relative mt-5">

                <div className="relative h-[400px] w-full overflow-hidden rounded-[16px]">
    <Image
        src={ad.image}
        alt={ad.brandName}
        fill
        sizes="320px"
        className="object-cover"
    />

    {ad.isVideo && (
        <button className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90">
            <Image
                src="/image/play.svg"
                alt="Play"
                width={24}
                height={24}
                className="h-6 w-6"
            />
        </button>
    )}
</div>

                {/* Favourite */}

                <button
                    className="
            absolute
            right-4
            top-5
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-[14px]
            bg-white
            shadow-lg
          "
                >
                    <Heart
                        size={22}
                        fill="#F23479"
                        className="text-[#F23479]"
                    />
                </button>

            </div>
            {/* ================= Description ================= */}

            <div className="mt-5">

                <p className="text-[16px] font-medium leading-6 text-[#141617]">
                    {ad.title}
                </p>

                <p className="mt-2 text-[14px] leading-5 text-[#808B96]">
                    {ad.description}
                </p>

            </div>

            <div className="my-4 border-t border-[#00000014]" />

            {/* ================= Stats ================= */}

            <TikTokStats
                views={ad.views}
                days={ad.days}
                relatedAds={ad.relatedAds}
                roas={ad.roas}
            />

            {/* ================= Buttons ================= */}

            <div className="mt-6 flex gap-3">

                {/* AI Analyze */}

                <button
                    type="button"
                    className="
            flex
            h-[44px]
            flex-1
            items-center
            justify-center
            gap-2
            rounded-[12px]
            bg-[#32063D]
            text-[16px]
            font-medium
            text-white
            transition
            hover:opacity-90
          "
                >

                    <Image
                        src="/image/ai-stars.svg"
                        alt="AI"
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px]"
                    />

                    AI Analyze

                </button>

                {/* Recreate Video */}

                <button
                    type="button"
                    className="
            flex
            h-[44px]
            flex-1
            items-center
            justify-center
            gap-2
            rounded-[12px]
            bg-[#F4F4F4]
            text-[16px]
            font-medium
            text-[#3C3D51]
            transition
            hover:bg-[#ECECEC]
          "
                >

                    <Image
                        src="/image/video-outline.svg"
                        alt="Video"
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px]"
                    />

                    Recreate Video

                </button>

            </div>
            {/* Bottom spacing */}

            <div className="mt-5" />

        </div>
    );
}