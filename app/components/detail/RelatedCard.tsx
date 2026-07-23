"use client";

import Image from "next/image";
import { Eye, Heart, Share2, ExternalLink, ClipboardCopy, MoreVertical } from "lucide-react";
import { FaRegShareFromSquare, FaTiktok } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
import { IoLogoTiktok } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";



interface RelatedCardProps {
    image: string;
    title: string;
    brand: string;
    price: string;
    platform: string;
    views: string;
    likes: string;
    shares: string;
    link: string;
    userName: string;
    userLogo: string;
    date: string;
    unitSold: string;
    revenueRange: string;
    country: string;

}

export default function RelatedCard({
    image,
    title,
    brand,
    price,
    platform,
    views,
    likes,
    link,
    shares,
    userName,
    userLogo,
    date,
    unitSold,
    revenueRange,
    country,
}: RelatedCardProps) {
    return (
        <div className="w-full rounded-[10px] bg-white px-[25px] pt-[25px] pb min-[1660px]:px-[25px] min-[1660px]:pb-[20px] transition hover:-translate-y-0.5">

            <div className="flex items-start justify-between mb-[19px]">

                <div className="flex items-start justify-between gap-4 min-[1660px]:gap-4">

                    <div className="relative h-[18px] min-[1660px]:h-[38px] w-[18px] min-[1660px]:w-[38px] shrink-0 grow-0 basis-[18px] min-[1660px]:basis-[38px] overflow-hidden rounded-full">

                        <Image
                            src={userLogo}
                            alt={userName}
                            fill
                            sizes="39px"
                            className="object-cover h-[39px] w-[39px] rounded-full"
                        />
                    </div>
                    <div className="">

                        <h3 className="text-[12px] min-[1660px]:text-[18px] font-medium leading-6 text-[#141617]">
                            {userName}
                        </h3>
                        <span className="text-[14px] leading-5 font-normal text-[#808B96]">
                            {date}
                        </span>
                    </div>
                </div>

                <button className="text-[#808B96]">

                    <MoreVertical size={18} />

                </button>

            </div>

            {/* Image */}
            <div className="relative h-[145px] rounded-[15px] border border-[#00000033] w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="300px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <button className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/90 backdrop-blur">
                    <CiPlay1 size={18} />
                </button>
            </div>
            <h3 className="mt-5 text-[14px] font-normal mb-[9px] leading-[20px] text-[#141617]">
                {title}
            </h3>
            <p className="text-[12px] leading-4 font-normal text-[#808B96]">

                {brand}

            </p>

            <div className="mt-5 rounded-[10px] h-[38px] border border-[#F234791A] bg-[#F234790D] ps-[17px] pe-[12px] py-[11px]">

                <div className="flex items-center justify-between">

                    <span className="truncate font-normal text-[15px] leading-4 text-[#141617]">

                        {link}

                    </span>

                    <div className="flex items-center gap-[9px]">

                        <button>

                            <ClipboardCopy
                                size={16}
                                className="text-[#141617]"
                            />

                        </button>

                        <button>

                            <FaRegShareFromSquare
                                size={16}
                                className="text-[#141617]"
                            />

                        </button>

                    </div>

                </div>

            </div>
            <div className="flex items-center justify-between mt-[9px]">

                <div className="flex items-center">
                    <p className="text-[12px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
                        Sale Volume:
                    </p>

                    <p className="mt-[2px] text-[12px] min-[1660px]:text-[14px] font-bold leading-5 tracking-[0.03em] text-[#38CA6E]">
                        {unitSold}
                    </p>
                </div>

                <div className="text-right flex items-center">
                    <p className="bg-[#3253F029] border border-[#3253F0] rounded-[36px] justify-center w-[117px] h-7 flex items-center text-[12px] min-[1660px]:text-[14px] leading-5 font-normal text-[#060317]">
                        <FaTiktok className=" text-[#3253F0] me-[3px]" /> TikTok <FaArrowRightLong className="ms-[18px]" />
                    </p>
                </div>

            </div>
            <div className="mt-[11px] mb-[9px] border-t border-[#00000014]"></div>
            <div className="flex items-center justify-between">

                <div>

                    <p className="text-[12px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
                        Revenue
                    </p>

                    <h3 className="mt-1 text-[14px] min-[1660px]:text-[20px] font-medium leading-[26px] text-[#141617]">
                        {revenueRange}
                    </h3>

                    {/* Country */}

                    <div className="mt-2 flex items-center gap-2">

                        <Image
                            src="/image/us-logo.png"
                            alt=""
                            width={18}
                            height={18}
                            className="rounded-full"
                            style={{ width: "18px", height: "18px" }}
                        />

                        <span className="text-[12px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">
                            {country}
                        </span>

                    </div>

                </div>



                {/* Revenue Graph */}

                <div className="relative h-[36px] w-[50px] min-[1660px]:w-[87px]">

                    <Image
                        src="/image/blue-graph.png"
                        alt=""
                        fill
                        sizes="87px"
                        className="object-contain"
                    />

                </div>

            </div>
            <div className="my-3 border-t border-[#00000014]"></div>
            {/* Stats */}
            <div className="mt-5 grid grid-cols-3 gap-3">


                <div className="rounded-[5px] bg-[#F1F1F1] p-3 text-start py-[11px] px-[8px] h-[57px]">
                    <div className="flex gap-[3px] items-center justify-start">
                        <Heart
                            size={10}
                            className="text-[#3C3D51]"
                        />

                        <p className="text-[12px] font-normal leading-[12px] text-[#808B96]">Likes</p>
                    </div>

                    <p className="mt-1 text-[#141617] text-[14px] leading-5 font-semibold">{likes}</p>
                </div>
                <div className="rounded-[5px] bg-[#F1F1F1] p-3 text-start py-[11px] px-[8px] h-[57px]">
                    <div className="flex gap-[3px] items-center justify-start">
                    <Eye
                        size={11}
                        className="text-[#3C3D51]"
                    />

                    <p className="text-[12px] font-normal leading-[12px] text-[#808B96]">Views</p>
                </div>
                <p className="mt-1 text-[#141617] text-[14px] leading-5 font-semibold">{views}</p>
            </div>

            <div className="rounded-[5px] bg-[#F1F1F1] p-3 text-start py-[11px] px-[8px] h-[57px]">
                <div className="flex gap-[3px] items-center justify-start">
                    <Share2
                        size={11}
                        className="text-[#3C3D51]"
                    />

                    <p className="text-[12px] font-normal leading-[12px] text-[#808B96]">Shares</p>
                </div>
                <p className="mt-1 text-[#141617] text-[14px] leading-5 font-semibold">{shares}</p>
            </div>
        </div>
        </div>
    );
}