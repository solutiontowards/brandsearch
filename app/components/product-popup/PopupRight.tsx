"use client";

import { useState } from "react";
import PopupTabs from "./PopupTabs";
import TechnologyCard from "./TechnologyCard";
import InfoRow from "./InfoRow";
import { InstagramAd } from "@/app/data/instagramAds";
import { FaShopify } from "react-icons/fa";
import { CalendarDays, Globe, Clock } from "lucide-react";
import { IoMdCopy } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
type Props = {
    ad: InstagramAd;
};
export default function PopupRight({ ad }: Props) {
    const [activeTab, setActiveTab] = useState<
        "overview" | "script" | "comments"
    >("overview");

    return (
        <div className="flex h-full flex-col rounded-[10px] bg-white px-[31px] pt-[17px] pb-[29px]">
            <PopupTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <div className="flex-1 overflow-y-auto pr-1">
                {activeTab === "overview" && (
                    <div className="s">
                        {/* Technologies */}
                        <div className="rounded-[10px] h-[89px] border border-[#808B964D] bg-white px-[22px] pb-[22px] pt-[10px]">
                            <h3 className="text-[16px] leading-[30px] font-medium text-[#141617]">
                                Technologies
                            </h3>
                            <p className="text-[16px] text-[#808B96] leading-[30px] font-medium flex items-center gap-2">E-commerce <span className="text-[#06862A] bg-[#00C43717] h-6 rounded-[39px] flex items-center justify-center px-4 "><FaShopify /> Shopify</span></p>
                        </div>
                        <h3 className="text-[#000000] text-[18px] leading-[30px] font-medium mt-[25px] mb-[15px]">Performance Signals</h3>

                        {/* Information */}
                        <div className="rounded-[16px] border border-[#ECECEC] bg-white flex flex-col space-y-[10px]">
                            <InfoRow
                                icon={<IoMdCopy size={16} className="text-[#060317]" />}
                                label="Ad ID"
                                value="#4872569384782"
                            />

                            <InfoRow
                                icon={<Clock size={16} className="text-[#060317]" />}
                                label="Saved"
                                value="3.7K"
                            />

                            <InfoRow
                                icon={<MdOutlineDashboardCustomize size={16} className="text-[#060317]" />}
                                label="Active Period"
                                value="1 Year"
                            />
                        </div>
                        <h3 className="text-[#000000] text-[18px] leading-[30px] font-medium mt-[30px] mb-[15px]">Performance Signals</h3>
                        {/* Placeholder for next section */}
                        <div className="rounded-[16px] border border-[#ECECEC] bg-white flex flex-col space-y-[10px]">


                            <InfoRow
                                icon={<IoMdCopy size={16} className="text-[#060317]" />}
                                label="Platform"
                                value={
                                    <span className="rounded-[38px] bg-[#00C43717] px-[10px] py-[7px] h-6 text-[14px] font-medium text-[#06862A]">
                                        Fashion
                                    </span>
                                }
                            />

                            <InfoRow
                                icon={<Clock size={16} className="text-[#060317]" />}
                                label="CTA"
                                value="Collection/Category"
                            />

                            <InfoRow
                                icon={<MdOutlineDashboardCustomize size={16} className="text-[#060317]" />}
                                label="Platforms"
                                value={
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/image/facebook.png"
                                            alt=""
                                            width={22}
                                            height={22}
                                        />

                                        <Image
                                            src="/image/insta.svg"
                                            alt=""
                                            width={22}
                                            height={22}
                                        />

                                        <Image
                                            src="/image/google.svg"
                                            alt=""
                                            width={22}
                                            height={22}
                                        />
                                    </div>
                                }
                            />

                            <InfoRow
                            icon={<FaArrowRightLong size={16} className="text-[#060317]" />}
                                label="CTA"
                                value="Shop Now"
                            />

                            <InfoRow
                            icon={<IoMdCopy size={16} className="text-[#060317]" />}
                                label="Display Format"
                                value="Image"
                            />
                        </div>
                    </div>
                )}

                {activeTab === "script" && (
                    <div className="flex h-[500px] items-center justify-center rounded-[16px] border border-[#ECECEC] bg-white">
                        <span className="text-[18px] font-medium text-[#808B96]">
                            AI Script Coming...
                        </span>
                    </div>
                )}

                {activeTab === "comments" && (
                    <div className="flex h-[500px] items-center justify-center rounded-[16px] border border-[#ECECEC] bg-white">
                        <span className="text-[18px] font-medium text-[#808B96]">
                            Comments Coming...
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}