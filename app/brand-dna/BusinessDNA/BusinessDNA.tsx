"use client";

import BusinessInfoCard from "./BusinessInfoCard";
import ColorPalette from "./ColorPalette";
import ValueChip from "./ValueChip";
import ChatPanel from "./ChatPanel";
import Image from "next/image";

export default function BusinessDNA() {
  const colors = [
    "#E6863D",
    "#A71F22",
    "#FFD8CF",
    "#D99AFF",
  ];

  const values = [
    "Creative Portfolio",
    "Creative Hiring",
    "Creative Growth",
    "Creative Collaboration",
  ];

  return (
    <div>
      <h2 className="mb-[46px] text-[45px] leading-[50px] font-normal text-[#141617]">
            Your business DNA
          </h2>
      <div className="flex gap-6">
        {/* ================= Left Section ================= */}
        <div className="flex-1 min-w-0">
          

          <div className="grid grid-cols-2 gap-4">
            {/* Business Name */}
            <BusinessInfoCard className="col-span-2 h-[220px] px-[33px] pb-[34px] pt-[25px]">
              <p className="mb-[45px] text-[30px] leading-[35px] font-semibold text-[#141617]">
                Business Name
              </p>

              <div className="flex items-end gap-[22px]">
                <h1 className="text-[85px] font-normal leading-none text-[#141617]">
                  Dribbble
                </h1>

                <div className="flex items-center gap-2 text-[25px] leading-[30px] font-normal text-[#737474]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 1 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>

                  https://dribbble.com/KasturipalmaL2
                </div>
              </div>
            </BusinessInfoCard>

            {/* Logo */}
            <BusinessInfoCard className="py-[25px] px-[33px]">
              <p className="mb-[45px] text-[30px] leading-[35px] font-semibold text-[#141617]">
                Logo
              </p>

              <Image
                src="/image/dribble.png"
                alt="Dribbble Logo"
                width={284}
                height={80}
                className="h-auto w-auto object-contain"
              />
            </BusinessInfoCard>

            {/* Fonts */}
            <BusinessInfoCard className="pt-[25px] pb-[30px] px-[33px]">
              <p className="mb-[25px] text-[30px] leading-[35px] font-semibold text-[#141617]">
                Fonts
              </p>

              <div className="flex gap-10">
                <div>
                  <h3 className="text-[66px] leading-[77px] font-semibold text-[#F5305F]">
                    Aa
                  </h3>

                  <p className="text-[21px] leading-[25px] font-normal text-[#737474]">
                    DM Sans
                  </p>
                </div>

                <div>
                  <h3 className="text-[66px] leading-[77px] font-semibold text-[#F5305F]">
                    Aa
                  </h3>

                  <p className="text-[21px] leading-[25px] font-normal text-[#737474]">
                    Poppins
                  </p>
                </div>
              </div>
            </BusinessInfoCard>

            {/* Colors */}
            <BusinessInfoCard className="py-[25px] px-[33px]">
              <p className="mb-[45px] text-[30px] leading-[35px] font-semibold text-[#141617]">
                Color
              </p>

              <ColorPalette colors={colors} />
            </BusinessInfoCard>

            {/* Tagline */}
            <BusinessInfoCard className="py-[25px] px-[33px]">
              <p className="mb-[45px] text-[30px] leading-[35px] font-semibold text-[#141617]">
                Brand Tagline
              </p>

              <p className="mt-auto max-w-[490px] text-[30px] leading-[34px] text-[#141617]">
                Your resource to discover and connect with designers worldwide.
              </p>
            </BusinessInfoCard>

            {/* Overview */}
            <BusinessInfoCard className="ps-[33px] pb-[33px] pe-[30px] pt-[25px]">
              <p className="mb-[52px] text-[30px] leading-[35px] font-semibold text-[#141617]">
                Business Overview
              </p>

              <p className="text-[20px] leading-[25px] font-normal text-[#737474]">
                Dribbble is a leading online platform and creative community
                where designers showcase their work, discover inspiration,
                connect with potential clients, and explore career
                opportunities.
              </p>
            </BusinessInfoCard>

            {/* Values */}
            <BusinessInfoCard className="py-[25px] px-[33px]">
              <p className="mb-[45px] text-[30px] leading-[35px] font-semibold text-[#141617]">
                Business Values
              </p>

              <div className="flex flex-wrap gap-[6px]">
                {values.map((item) => (
                  <ValueChip key={item} label={item} />
                ))}
              </div>
            </BusinessInfoCard>
          </div>

          {/* Bottom Button */}
          <button className="mt-[30px] flex h-[65px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#221135] to-[#521C4E] text-[24px] leading-[30px] font-medium text-white transition hover:opacity-95">
            Let's Go
          </button>
        </div>

        {/* ================= Right Section ================= */}
        <div className="w-[465px] h-[995px] shrink-0">
          <ChatPanel />
        </div>
      </div>
    </div>
  );
}