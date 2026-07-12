"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Check,
  Clock3,
  Copy,
  Minus,
  Package,
  Search,
  SlidersHorizontal,
  TrendingUp,
  Plus,
} from "lucide-react";
import { BiReset, BiSort } from "react-icons/bi";
import { IoIosGlobe } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";
import { TfiAnnouncement } from "react-icons/tfi";
import { LuFacebook } from "react-icons/lu";
import { PiTiktokLogo, PiIntersectSquare } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const platforms = [
  { label: "Meta", icon: LuFacebook, active: true },
  { label: "TikTok", icon: PiTiktokLogo, active: false },
  { label: "Instagram", icon: FaInstagram, active: false },
];

const sortOptions = [
  { label: "Scalers", icon: PiIntersectSquare, selected: true },
  { label: "Top Rank", icon: TrendingUp },
  { label: "Longest Running", icon: Clock3 },
  { label: "Most Duplicates", icon: Copy },
  { label: "Newest", icon: Plus },
  { label: "Oldest", icon: Minus },
  { label: "Latest Found", icon: Search },
  { label: "Relevancy", icon: SlidersHorizontal },
];

const stats = [
  { label: "Resets", icon: BiReset },
  { label: "Traffic", icon: TrendingUp },
  { label: "Ad Count", icon: TfiAnnouncement },
  { label: "Market", icon: IoIosGlobe },
  { label: "Revenue", icon: AiOutlineDollar },
  { label: "Item Sold", icon: Package },
];

export default function BrandProductsNavbar() {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(new Date());
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
            <div className="inline-flex items-center justify-center gap-1">
              <Image
                src="/image/brands.png"
                alt="Brands"
                width={30}
                height={37}
                className="object-contain"
                style={{
                  width: "30px",
                  height: "37px",
                }}
              />
              <h1 className="text-[20px] font-semibold text-[#141617]">
                Brands
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 bg-[#F1F1F1] rounded-[36px] px-[7px] py-[5px]">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <button
                    key={platform.label}
                    type="button"
                    className={`inline-flex items-center gap-1 min-[1660px]:gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${platform.active
                      ? "bg-[#FFFFFF] text-[#060317] text-[14px] min-[1660px]:text-[16px]"
                      : "text-[#808B96] text-[14px] hover:text-[#060317]"
                      }`}
                  >
                    <Icon size={14} />
                    {platform.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsDateOpen(true)}
            onMouseLeave={() => setIsDateOpen(false)}
          > */}
          <div
            className="static"
            ref={dropdownRef}
          >
            <button
              type="button"
              onClick={() => setIsDateOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-[14px] border border-[#fff] px-4 py-3 text-[16px] font-medium text-[#060317] transition hover:border-[#F23479]"
            >
              <CiCalendar size={20} />
              Creation Date
              <FaCaretDown color="#808B96" size={16} />
            </button>

            {isDateOpen && (
              <div className="absolute right-[65px] top-[115px] z-[9999] mt-3 w-[800px] min-[1660px]:w-[909px] h-[476px] rounded-[10px] border border-[#E8ECF2] bg-white px-[20px] py-[27px] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <span className="absolute left-[229px] bottom-0 h-[410px] w-px bg-[#0000001F]" />
                <span className="absolute left-[474px] bottom-0 h-[410px] w-px bg-[#0000001F]" />
                <div className="grid grid-cols-[210px_240px_1fr] overflow-hidden relative after:absolute
    after:left-0
    after:top-[37px]
    after:h-px
    after:w-full
    after:border-t
    after:border-[#0000001F]
    after:content-['']">


                  {/* LEFT COLUMN */}
                  <div className="ps-[18px">
                    <p className="text-[14px] ps-[18px] font-medium leading-[20px] text-[#5F6070]">
                      Filter by
                    </p>

                    <button
                      type="button"
                      className="mt-[40px] flex h-[40px] w-fit items-center justify-between rounded-[12px] border border-[#E6EAF0] bg-white px-4 text-[15px] font-semibold text-[#111827]"
                    >
                      Creative
                      <Check size={14} strokeWidth={3} className="text-[#000000] ms-2" />
                    </button>

                    <div className="mt-4 space-y-2">
                      {["Brand", "Fb Page"].map((item) => (
                        <button
                          key={item}
                          className="flex h-[30px] w-fit items-center justify-between rounded-[12px] px-4 text-left text-[16px] font-medium leading-[20px] text-[#060317] transition hover:bg-white"
                        >
                          {item}
                          {item === "Brand" && (
                            <Check
                              size={14}
                              strokeWidth={3}
                              className="text-[#000000] ms-2"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* MIDDLE COLUMN */}
                  <div className="ps-[18px]">
                    <p className="text-[14px] font-medium ps-[32px] leading-[20px] text-[#5F6070]">
                      Filter by
                    </p>

                    <button
                      type="button"
                      className="mt-[40px] flex h-[40px] w-fit items-center justify-between rounded-[12px] border border-[#E6EAF0] bg-white px-4 text-[15px] font-semibold text-[#111827]"
                    >
                      Last 7 Days
                      <Check size={14} strokeWidth={3} className="text-[#000000] ms-2" />
                    </button>

                    <div className="mt-4 space-y-2">
                      {dateFilters.map((item, index) => (
                        <button
                          key={item}
                          className={`flex h-[30px] w-fit items-center justify-between rounded-[12px] px-4 text-left text-[16px] font-medium leading-[20px] text-[#060317] transition ${index === 0
                            ? "bg-white text-[#060317]"
                            : "text-[#6B7280] hover:bg-white"
                            }`}
                        >
                          {item}

                          {index === 0 && (
                            <Check
                              size={14}
                              strokeWidth={3}
                              className="text-[#000000] ms-2"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* CALENDAR */}
                  {/* CALENDAR */}
                  <div className="">
                    <DayPicker
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                      showOutsideDays
                      className="custom-calendar"
                      modifiersClassNames={{
                        selected: "selected-day",
                        today: "today",
                      }}
                      styles={{
                        months: {
                          display: "flex",
                        },

                        month: {
                          width: "100%",
                        },

                        month_caption: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "18px",
                        },

                        caption_label: {
                          fontSize: "20px",
                          fontWeight: "600",
                        },

                        weekdays: {
                          marginBottom: "8px",
                        },

                        weekday: {
                          color: "#9CA3AF",
                          fontSize: "12px",
                          fontWeight: 600,
                        },

                        day: {
                          width: "38px",
                          height: "38px",
                          borderRadius: "9999px",
                          fontSize: "15px",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <div
            className="relative"
            ref={sortRef}
            onMouseEnter={() => setIsSortOpen(true)}
            onMouseLeave={() => setIsSortOpen(false)}
          > */}
          <div
            className="relative"
            ref={sortRef}
          >
            <button
              type="button"
              onClick={() => setIsSortOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-[12px] border border-[#F1F1F1] px-4 py-3 text-[14px] font-semibold text-[#3C3D51] transition hover:border-[#F23479]"
            >
              <BiSort size={12} />
              Sort: <span className="text-[#808B96] font-normal">Last Update</span>
              <FaCaretDown color="#808B96" size={16} />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-full z-40 mt-3 w-[201px] rounded-[10px] border border-[#E5E7EB] bg-white py-[22px] px-[17px] shadow-[5px_5px_27px_0px_rgba(0,0,0,0.25)]">
                <div className="rounded-[10px] border border-[#00000029] px-[18px] py-[5px] text-sm font-semibold text-[#111827]">
                  <div className="inline-flex items-center gap-2 ">
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
                        className={`flex w-full items-center gap-3 h-[30px] text-left text-[16px] font-medium transition ${option.selected
                          ? "bg-[#F3F4FF] text-[#111827]"
                          : "text-[#111827] hover:bg-[#F8FAFB]"
                          }`}
                      >
                        <span className="me-[10px">
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
        <div className="flex flex-1 auto-cols-auto grid-cols-2 gap-[20px] min-[1660px]:gap-[35px] sm:grid-cols-3 xl:grid-cols-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center w-fit">
                <span className="inline-flex items-center justify-center text-[#060317] mr-[7px]">
                  <Icon size={18} />
                </span>
                <span className="text-[12px] min-[1660px]:text-[16px] font-medium">{stat.label}</span>
              </div>
            );
          })}
        </div>

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
