"use client";

import BusinessInfoCard from "./BusinessInfoCard";
import ColorPalette from "./ColorPalette";
import ValueChip from "./ValueChip";
import ChatPanel from "./ChatPanel";

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
      <div className="grid grid-cols-12 gap-4">
        {/* ================= Left Section ================= */}
        <div className="col-span-8">
          <h2 className="mb-4 text-[32px] font-medium text-[#222]">
            Your business DNA
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Business Name */}
            <BusinessInfoCard className="col-span-2">
              <p className="mb-3 text-[14px] font-semibold text-[#303030]">
                Business Name
              </p>

              <h1 className="text-[56px] font-medium leading-none text-[#202020]">
                Dribbble
              </h1>

              <div className="mt-3 flex items-center gap-2 text-[13px] text-[#7B7B7B]">
                <svg
                  width="14"
                  height="14"
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
            </BusinessInfoCard>

            {/* Logo */}
            <BusinessInfoCard>
              <p className="mb-4 text-[14px] font-semibold text-[#303030]">
                Logo
              </p>

              <h2
                className="text-[52px] italic leading-none text-[#1F2033]"
                style={{ fontFamily: "cursive" }}
              >
                Dribbble
              </h2>
            </BusinessInfoCard>

            {/* Fonts */}
            <BusinessInfoCard>
              <p className="mb-4 text-[14px] font-semibold text-[#303030]">
                Fonts
              </p>

              <div className="flex gap-10">
                <div>
                  <h3 className="text-[48px] font-bold text-[#F2385A]">
                    Aa
                  </h3>

                  <p className="mt-2 text-sm text-[#777]">
                    DM Sans
                  </p>
                </div>

                <div>
                  <h3 className="text-[48px] font-bold text-[#F238A4]">
                    Aa
                  </h3>

                  <p className="mt-2 text-sm text-[#777]">
                    Poppins
                  </p>
                </div>
              </div>
            </BusinessInfoCard>

            {/* Colors */}
            <BusinessInfoCard>
              <p className="mb-5 text-[14px] font-semibold text-[#303030]">
                Color
              </p>

              <ColorPalette colors={colors} />
            </BusinessInfoCard>

            {/* Tagline */}
            <BusinessInfoCard>
              <p className="mb-5 text-[14px] font-semibold text-[#303030]">
                Brand Tagline
              </p>

              <p className="max-w-[320px] text-[20px] leading-7 text-[#303030]">
                Your resource to discover and connect with designers worldwide.
              </p>
            </BusinessInfoCard>

            {/* Overview */}
            <BusinessInfoCard>
              <p className="mb-4 text-[14px] font-semibold text-[#303030]">
                Business Overview
              </p>

              <p className="text-[13px] leading-6 text-[#777]">
                Dribbble is a leading online platform and creative community
                where designers showcase their work, discover inspiration,
                connect with potential clients, and explore career
                opportunities.
              </p>
            </BusinessInfoCard>

            {/* Values */}
            <BusinessInfoCard>
              <p className="mb-4 text-[14px] font-semibold text-[#303030]">
                Business Values
              </p>

              <div className="flex flex-wrap gap-3">
                {values.map((item) => (
                  <ValueChip key={item} label={item} />
                ))}
              </div>
            </BusinessInfoCard>
          </div>

          {/* Bottom Button */}
          <button className="mt-5 flex h-[58px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#221135] to-[#521C4E] text-lg font-semibold text-white transition hover:opacity-95">
            Let's Go
          </button>
        </div>

        {/* ================= Right Section ================= */}
        <div className="col-span-4">
          <ChatPanel />
        </div>
      </div>
    </div>
  );
}