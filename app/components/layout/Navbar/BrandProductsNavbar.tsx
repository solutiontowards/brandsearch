"use client";

import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Copy,
  DollarSign,
  Globe2,
  Mail,
  Minus,
  Music,
  Package,
  RefreshCcw,
  Search,
  SlidersHorizontal,
  TrendingUp,
  Plus,
} from "lucide-react";

const platforms = [
  { label: "Meta", icon: Globe2, active: true },
  { label: "TikTok", icon: Music, active: false },
  { label: "Instagram", icon: Camera, active: false },
  { label: "Emails", icon: Mail, active: false },
];

const sortOptions = [
  { label: "Scalers", icon: BarChart3, selected: true },
  { label: "Top Rank", icon: TrendingUp },
  { label: "Longest Running", icon: Clock3 },
  { label: "Most Duplicates", icon: Copy },
  { label: "Newest", icon: Plus },
  { label: "Oldest", icon: Minus },
  { label: "Latest Found", icon: Search },
  { label: "Relevancy", icon: SlidersHorizontal },
];

const stats = [
  { label: "Resets", icon: RefreshCcw },
  { label: "Traffic", icon: TrendingUp },
  { label: "Ad Count", icon: Package },
  { label: "Market", icon: Globe2 },
  { label: "Revenue", icon: DollarSign },
  { label: "Item Sold", icon: Package },
];

export default function BrandProductsNavbar() {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const sortRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDateOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dateFilters = [
    "Last 14 days",
    "Last 30 days",
    "Last 90 days",
    "Last 6 months",
    "This year",
    "2025",
    "Last 2 years",
    "All time",
  ];

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#F6F8FF] text-[#3C3D51] shadow-sm">
              <Package size={22} />
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
                Brands
              </p>
              <h1 className="text-[26px] font-semibold text-[#141617]">
                Brand Products
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <button
                  key={platform.label}
                  type="button"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    platform.active
                      ? "bg-[#1D4ED8] text-white shadow-[0_10px_30px_rgba(59,130,246,0.16)]"
                      : "bg-[#F4F5F8] text-[#3C3D51] hover:bg-[#E5E7EB]"
                  }`}
                >
                  <Icon size={14} />
                  {platform.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsDateOpen(true)}
            onMouseLeave={() => setIsDateOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsDateOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-[#F8FAFB] px-4 py-3 text-[14px] font-semibold text-[#3C3D51] transition hover:bg-white"
            >
              Creation Date
              <ChevronDown size={16} />
            </button>

            {isDateOpen && (
              <div className="absolute left-0 top-full z-30 mt-3 w-[900px] rounded-[30px] border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <div className="grid gap-6 xl:grid-cols-[1.1fr_1.1fr_1.4fr]">
                  <div className="rounded-[24px] border border-[#E5E7EB] bg-[#FAFBFD] p-5">
                    <p className="text-sm font-semibold text-[#111827]">Filter by</p>
                    <button className="mt-4 inline-flex items-center justify-between w-full rounded-[14px] border border-[#E5E7EB] bg-white px-4 py-3 text-left text-sm font-semibold text-[#111827] transition hover:border-[#6366F1]">
                      Creative
                      <Check size={16} className="text-[#10B981]" />
                    </button>
                    <div className="mt-5 space-y-3">
                      {['Brand', 'Fb Page'].map((item) => (
                        <button
                          key={item}
                          type="button"
                          className="flex w-full items-center justify-between rounded-[14px] bg-white px-4 py-3 text-left text-sm font-medium text-[#111827] transition hover:bg-[#F3F4F6]"
                        >
                          {item}
                          {item === 'Brand' ? <Check size={16} className="text-[#10B981]" /> : null}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#E5E7EB] bg-[#FAFBFD] p-5">
                    <p className="text-sm font-semibold text-[#111827]">Filter by</p>
                    <button className="mt-4 inline-flex items-center justify-between w-full rounded-[14px] border border-[#E5E7EB] bg-white px-4 py-3 text-left text-sm font-semibold text-[#111827] transition hover:border-[#6366F1]">
                      Last 7 Days
                      <Check size={16} className="text-[#10B981]" />
                    </button>
                    <div className="mt-5 space-y-3">
                      {dateFilters.map((item, index) => (
                        <button
                          key={item}
                          type="button"
                          className={`flex w-full items-center justify-between rounded-[14px] px-4 py-3 text-left text-sm font-medium transition ${
                            index === 0 ? "bg-white text-[#111827]" : "bg-transparent text-[#6B7280] hover:bg-[#F3F4F6]"
                          }`}
                        >
                          {item}
                          {index === 0 && <Check size={16} className="text-[#10B981]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#E5E7EB] bg-[#FAFBFD] p-5">
                    <div className="flex items-center justify-between text-sm font-semibold text-[#111827]">
                      <span>May 2026</span>
                      <div className="inline-flex items-center gap-2 text-[#6B7280]">
                        <button type="button" className="rounded-full border border-[#E5E7EB] p-2 hover:bg-white">
                          <ChevronLeft size={16} />
                        </button>
                        <button type="button" className="rounded-full border border-[#E5E7EB] p-2 hover:bg-white">
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#9CA3AF]">
                      {['SU','MO','TU','WE','TH','FR','SA'].map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                    <div className="mt-4 grid grid-cols-7 gap-2 text-sm text-[#111827]">
                      {[
                        '30','1','2','3','4','5','6',
                        '7','8','9','10','11','12','13',
                        '14','15','16','17','18','19','20',
                        '21','22','23','24','25','26','27',
                        '28','29','30','31','1','2','3',
                      ].map((date, index) => {
                        const isSelected = date === '7';
                        const isMuted = index < 1 || index > 31;
                        return (
                          <button
                            key={`${date}-${index}`}
                            type="button"
                            className={`h-11 rounded-[14px] ${
                              isSelected
                                ? 'bg-[#4338CA] text-white'
                                : isMuted
                                ? 'text-[#D1D5DB]'
                                : 'hover:bg-[#EEF2FF] text-[#111827]'
                            }`}
                          >
                            {date}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            ref={sortRef}
            onMouseEnter={() => setIsSortOpen(true)}
            onMouseLeave={() => setIsSortOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsSortOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-[#F8FAFB] px-4 py-3 text-[14px] font-semibold text-[#3C3D51] transition hover:bg-white"
            >
              Sort: Last Update
              <ChevronDown size={16} />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-full z-40 mt-3 w-[260px] rounded-[24px] border border-[#E5E7EB] bg-white p-3 shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
                <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-3 text-sm font-semibold text-[#111827]">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-[#111827] shadow-sm">
                    <BarChart3 size={16} />
                    Scalers
                    <Check size={16} className="text-[#10B981]" />
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  {sortOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.label}
                        type="button"
                        className={`flex w-full items-center gap-3 rounded-[18px] px-4 py-3 text-left text-sm font-medium transition ${
                          option.selected
                            ? "bg-[#F3F4FF] text-[#111827]"
                            : "text-[#111827] hover:bg-[#F8FAFB]"
                        }`}
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F8FAFB] text-[#3C4E84]">
                          <Icon size={18} />
                        </span>
                        <span className="flex-1">{option.label}</span>
                        {option.selected ? <Check size={16} className="text-[#10B981]" /> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid flex-1 auto-cols-auto grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-2 rounded-[14px] border border-[#E5E7EB] bg-[#F8F9FC] px-4 py-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium text-[#3C3D51]">{stat.label}</span>
              </div>
            );
          })}
        </div>

        <div className="relative max-w-md flex-1">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="search"
            placeholder="Search brands and products"
            className="h-12 w-full rounded-[14px] border border-[#E5E7EB] bg-[#F8F9FC] px-14 text-sm text-[#3C3D51] outline-none transition focus:border-[#2563EB] focus:bg-white"
          />
        </div>
      </div>
    </div>
  );
}
