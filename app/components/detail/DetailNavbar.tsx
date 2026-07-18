"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Save,
  History,
  Search,
  Download,
  LayoutGrid,
  Package,
  Settings2,
  Sparkles,
} from "lucide-react";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoFootballSharp } from "react-icons/io5";

type Tab = "Overview" | "Products" | "Competitors AI";

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

function NavButton({
  icon,
  label,
  className = "",
}: NavButtonProps) {
  return (
    <button
      className={`
        flex
        h-[36px]
        items-center
        gap-[8px]
        rounded-[10px]
        border
        border-[#ECECEC]
        bg-white
        px-[14px]
        text-[14px]
        font-medium
        text-[#141617]
        transition-all
        hover:bg-[#F7F7F7]
        ${className}
      `}
    >
      {icon}

      <span>{label}</span>
    </button>
  );
}

export default function DetailNavbar() {
  const [activeTab, setActiveTab] =
    useState<Tab>("Overview");

  return (
    <div className="rounded-[16px] border border-[#ECECEC] bg-white px-6 pt-4 pb-3">
      {/* ================= TOP ROW ================= */}

      <div className="flex items-center justify-between">
        {/* Left */}

        <div className="flex items-center gap-3">
          <NavButton
            icon={<ArrowLeft size={16} />}
            label="Back"
          />

          {/* Shop */}

          <div className="flex h-[36px] items-center gap-[10px] rounded-[10px] border border-[#ECECEC] bg-#F1F1F1 px-[12px]">
            <div className="relative h-5 w-5 overflow-hidden rounded-[4px]">
              <Image
                src="/image/shopImg.png"
                alt="Shop"
                fill
                sizes="20px"
                className="object-cover"
              />
            </div>

            <span className="text-[14px] font-medium text-[#141617]">
              Dr.Melaxin Shop
            </span>
          </div>

          <NavButton
            icon={<Save size={16} />}
            label="Save"
          />

          <NavButton className="bg-[#F1F1F1]"
            icon={<History size={16} />}
            label="History"
          />
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          <button
            className="
              flex
              h-[38px]
              items-center
              gap-[8px]
              rounded-[10px] border border-[#F1F1F1]
              bg-[#E0E9FF]
              px-[16px]
              text-[14px]
              font-medium
              
              transition
              hover:bg-[#E6EEFF]
              text-[14px] text-[#060317]
            "
          >
            <IoFootballSharp size={16} className="text-[#2A63EC]" />

            Track with Spectre
          </button>

          <button
            className="
              flex
              h-[40px]
              max-w-[105px]
              items-center
              gap-[14px]
              rounded-[10px]
              border
              border-[#F1F1F1]
              bg-[#F1F1F1]
              px-[14px]
              text-[14px]
              font-medium
              text-[#141617]
              transition
              hover:bg-[#F8F8F8]
            "
          >
            <RiArrowUpDownLine size={16} />

            Export
          </button>
        </div>
      </div>
            {/* ================= BOTTOM ROW ================= */}

      <div className="mt-5 flex items-center justify-between">
        {/* Tabs */}

        <div className="flex items-center gap-8">
          <button
            onClick={() => setActiveTab("Overview")}
            className={`relative flex h-[34px] items-center gap-2 text-[15px] transition ${
              activeTab === "Overview"
                ? "font-medium text-[#141617]"
                : "text-[#8A94A6] hover:text-[#141617]"
            }`}
          >
            <LayoutGrid size={15} />

            Overview

            {activeTab === "Overview" && (
              <span className="absolute -bottom-[12px] left-0 h-[2px] w-full rounded-full bg-[#141617]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("Products")}
            className={`relative flex h-[34px] items-center gap-2 text-[15px] transition ${
              activeTab === "Products"
                ? "font-medium text-[#141617]"
                : "text-[#8A94A6] hover:text-[#141617]"
            }`}
          >
            <Package size={15} />

            Products

            {activeTab === "Products" && (
              <span className="absolute -bottom-[12px] left-0 h-[2px] w-full rounded-full bg-[#141617]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("Competitors AI")}
            className={`relative flex h-[34px] items-center gap-2 text-[15px] transition ${
              activeTab === "Competitors AI"
                ? "font-medium text-[#141617]"
                : "text-[#8A94A6] hover:text-[#141617]"
            }`}
          >
            <Settings2 size={15} />

            Competitors AI

            {activeTab === "Competitors AI" && (
              <span className="absolute -bottom-[12px] left-0 h-[2px] w-full rounded-full bg-[#141617]" />
            )}
          </button>
        </div>

        {/* Search */}

        <div className="relative max-w-[300px] min-[1660px]:max-w-[482px] flex-1">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="search"
            placeholder="Search brands and products"
            className="h-10 w-full rounded-[26px] border border-[#E5E7EB] bg-[#F1F1F1] px-10 min-[1660px]:px-14 text-sm text-[#3C3D51] outline-none transition focus:border-[#2563EB] focus:bg-white"
          />
        </div>
      </div>
    </div>
  );
}