"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bookmark,
  ClipboardCopy,
  MoreVertical,
  ScanSearch,
  FlaskConical,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  ListFilter,
  ChevronDown,
} from "lucide-react";
import { CiBag1 } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { TbGraph } from "react-icons/tb";
import { FaChevronUp } from "react-icons/fa6";

import type { TopPerformingAd } from "@/app/data/topPerformingAds";

type Props = {
  ad: TopPerformingAd;
  variant?: "default" | "meta";
};

export default function TopPerformingAdCard({
  ad,
  variant = "default",
}: Props) {
  const sliderImages = ad.images;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full max-w-sm rounded-[10px] border border-slate-200 bg-white px-3 py-5 min-[1660px]:px-[25px] min-[1660px]:py-[20px] transition hover:-translate-y-0.5">

      {/* ================= HEADER ================= */}

      <div className="flex items-start justify-between">

        <div className="flex items-start gap-0.5 min-[1660px]:gap-2.5">

          <div className="relative h-[18px] min-[1660px]:h-[26px] w-[18px] min-[1660px]:w-[26px] shrink-0 grow-0 basis-[18px] min-[1660px]:basis-[26px] overflow-hidden rounded-full">

            <Image
              src={ad.logoSrc}
              alt={ad.brandName}
              fill
              sizes="26px"
              className="object-cover"
            />

          </div>

          <div>

            <div className="flex items-center gap-0.5 min-[1660px]:gap-2">

              <h3 className="text-[12px] min-[1660px]:text-[18px] font-medium leading-6 text-[#141617]">
                {ad.brandName}
              </h3>

              <span
                className={`rounded-full px-2 py-[1px] min-[1660px]:py-[3px] text-[5px] min-[1660px]:text-[10px] leading-[10px]
                ${variant === "default"
                    ? "bg-[#F2347917] text-[#F23479]"
                    : "bg-[#F5F5F5] text-[#808B96]"
                  }`}
              >
                {ad.category}
              </span>

            </div>

            <div className="mt-[6px] flex items-center gap-2">

              {variant === "default" ? (
                <>
                  <span className="text-[12px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#141617]">
                    {ad.period}
                  </span>

                  <span className="rounded-full bg-[#F5F5F5] px-[8px] py-[4px] text-[8px] min-[1660px]:text-[10px] font-medium leading-[10px] text-[#3C3D51]">
                    {ad.days}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[28px] font-bold leading-none text-[#38CA6E]">
                    253
                  </span>

                  <span className="text-[28px] font-normal leading-none text-[#141617]">
                    of 414 Ads
                  </span>

                  <span className="rounded-full bg-[#F5F5F5] px-[8px] py-[4px] text-[10px] font-medium text-[#3C3D51]">
                    30d
                  </span>
                </>
              )}

            </div>

          </div>

        </div>

        {variant === "default" ? (

          <button className="text-[#808B96]">

            <MoreVertical size={18} />

          </button>

        ) : (

          <div className="flex gap-2">

            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5F5F5]">

              <ClipboardCopy size={14} />

            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5F5F5]">

              <Image
                src="/image/meta-logo.svg"
                alt="Meta"
                width={14}
                height={14}
              />

            </button>

          </div>

        )}

      </div>

      {/* ================= FIRST ROW ================= */}

      <div className="my-2 min-[1660px]:my-4 border-t border-[#00000014]" />

      {variant === "default" ? (

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[5px]">
            <div className="flex items-center gap-1 rounded-full border border-[#00000014] px-0.5 min-[1660px]:px-2 py-[2px] min-[1660px]:py-[4px]">
              <ScanSearch
                size={10}
                className="text-[#808B96]"
              />
              <span className="text-[6px] min-[1660px]:text-[10px] text-[#808B96]">
                Scaling
              </span>
            </div>

            <div className="flex items-center gap-1 rounded-full border border-[#00000014] px-0.5 min-[1660px]:px-2 py-[2px] min-[1660px]:py-[4px]">
              <FlaskConical
                size={10}
                className="text-[#808B96]"
              />
              <span className="text-[6px] min-[1660px]:text-[10px] text-[#808B96]">
                Testing
              </span>
            </div>

            <div className="flex items-center gap-1 rounded-full bg-[#00C43717] px-0.5 min-[1660px]:px-2 py-[2px] min-[1660px]:py-[4px]">
              <TrendingUp
                size={10}
                className="text-[#00C438]"
              />
              <span className="text-[6px] min-[1660px]:text-[10px] text-[#00C438]">
                Winning
              </span>
            </div>
          </div>

          {/* Graph */}
          <div className="relative h-[25px] w-[40px] min-[1660px]:w-[87px] shrink-0">
            <Image
              src="/image/blue-graph.png"
              alt="Performance graph"
              fill
              sizes="87px"
              className="object-contain"
            />
          </div>
        </div>

      ) : (

        <div className="grid grid-cols-3 gap-2">

          <div className="flex items-center justify-center gap-2 rounded-xl bg-[#00C43717] py-2">

            <TrendingUp
              size={16}
              className="text-[#38CA6E]"
            />

            <span className="font-semibold text-[#38CA6E]">

              6692

            </span>

          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl bg-[#F5F5F5] py-2">

            <Image
              src="/image/meta-logo.svg"
              alt=""
              width={16}
              height={16}
            />

            <span className="text-[#5E5E5E]">

              210€-9€/d

            </span>

          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl bg-[#EEF2FF] py-2">

            <Image
              src="/image/us-logo.png"
              alt=""
              width={22}
              height={16}
            />

            <span className="font-semibold">

              100%

            </span>

          </div>

        </div>

      )}
      {/* ================= SECOND ROW ================= */}

      <div className=" my-2 min-[1660px]:my-4 border-t border-[#00000014]" />

      {variant === "default" ? (

        <div className="flex items-center justify-between">

          {/* Revenue */}

          <div className="flex items-center gap-0.5">

            <p className="text-[10px] min-[1660px]:text-[14px] leading-5 flex items-center gap-1 tracking-[0.03em] text-[#808B96]">
              <CiBag1 className="text-[#141617]" /> Revenue:
            </p>

            <p className="mt-[2px] text-[10px] min-[1660px]:text-[14px] font-bold leading-5 tracking-[0.03em] text-[#38CA6E]">
              {ad.revenueValue}
            </p>

          </div>

          {/* Total Ads */}

          <div className="text-right flex items-center gap-0.5  ">

            <p className="text-[10px] min-[1660px]:text-[14px] leading-5 flex items-center gap-1 tracking-[0.03em] text-[#808B96]">
              <GoStack className="text-[#141617]" /> Total Ads:
            </p>

            <p className="mt-[2px] text-[01px] min-[1660px]:text-[14px] font-bold leading-5 tracking-[0.03em] text-[#F23479]">
              {ad.totalAdsValue}
            </p>

          </div>

        </div>

      ) : (

        <div className="flex items-center justify-between">

          <div>

            <p className="text-[14px] text-[#808B96]">

              Status

            </p>

            <div className="mt-1 flex items-center gap-2">

              <TrendingUp
                size={16}
                className="text-[#F23479]"
              />

              <span className="text-[18px] font-semibold text-[#F23479]">

                Dropping Fast

              </span>

            </div>

          </div>

          <div className="text-right">

            <p className="text-[14px] text-[#808B96]">

              Creatives

            </p>

            <p className="mt-1 text-[22px] font-bold text-[#141617]">

              44

            </p>

          </div>

        </div>

      )}

      {/* ================= IMAGE ================= */}

      <div className="relative mt-3 mb-2 min-[1660px]:mt-6 min-[1660px]:mb-5 overflow-hidden rounded-[12px] border border-[#0000001A]">

        {variant === "default" ? (

          <>
            <div className="relative h-[170px] min-[1660px]:h-[288px] w-full">

              <Image
                src={ad.images[0]}
                alt={ad.brandName}
                fill
                sizes="100%"
                className="object-cover"
              />

            </div>

            {/* Presented by Meta */}

            <div className="absolute bottom-4 right-4 flex h-6 min-[1660px]:h-8 items-center gap-1 min-[1660px]:gap-2 rounded-full bg-white px-3 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">

              <div className="relative h-[16px] min-[1660px]:h-[22px] w-[16px] min-[1660px]:w-[22px]">

                <Image
                  src="/image/meta-logo.svg"
                  alt="Meta"
                  fill
                  sizes="22px"
                  className="object-contain"
                />

              </div>

              <span className="text-[9px] min-[1660px]:text-[12px] text-[#141617]">

                Presented By

              </span>

            </div>

          </>

        ) : (

          <>
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >

              {sliderImages.map((img, index) => (

                <div
                  key={index}
                  className="relative h-[310px] min-w-full"
                >

                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="100%"
                    className="object-cover"
                  />

                </div>

              ))}

            </div>

            {/* Previous */}

            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
            >

              <ChevronLeft size={18} />

            </button>

            {/* Next */}

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
            >

              <ChevronRight size={18} />

            </button>

            {/* Indicators */}

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">

              {sliderImages.map((_, index) => (

                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${currentIndex === index
                    ? "bg-white"
                    : "bg-white/40"
                    }`}
                />

              ))}

            </div>

          </>

        )}

      </div>

      {/* ================= BELOW IMAGE ================= */}

      {variant === "default" ? (

        <>
          <div className="flex items-center justify-between">

            <div className="flex items-center">

              <Image
                src="/image/us-logo.png"
                alt="USA"
                width={16}
                height={16}
                className="mr-[5px] min-[1660px]:mr-[11px] rounded-full"
                style={{ width: "16px", height: "16px" }}
              />

              <span className="text-[8px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#808B96]">

                {ad.country}

              </span>

            </div>

            <div className="flex items-center gap-1">

              <span className="text-[8px] min-[1660px]:text-[12px] leading-5 tracking-[0.03em] text-[#808B96]">

                Publish Date:

              </span>

              <span className="text-[8px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#141617]">

                {ad.publishDate}

              </span>

            </div>

          </div>

          <div className="my-2 min-[1660px]:my-4 border-t border-[#00000014]" />

        </>

      ) : (

        <>
          <h2 className="mt-5 text-[22px] font-semibold leading-[30px] text-[#141617]">

            The New Standard for Elite Recovery

          </h2>

          <p className="mt-2 text-[14px] leading-6 text-[#808B96]">

            Recovery has entered a new era. Hyperice's latest innovation delivers elite performance for athletes and everyday users.

          </p>

          <div className="my-5 border-t border-[#00000014]" />

        </>

      )}
      {/* ================= DESCRIPTION ================= */}

      {variant === "default" && (
        <p className="text-[12px] leading-4 text-[#808B96]">
          {ad.description}
        </p>
      )}

      {/* ================= LINK BOX ================= */}

      <div className="mt-5 rounded-[10px] border border-[#00000014] bg-white px-3 py-[9px]">

        <div className="flex items-center justify-between">

          <span className="truncate text-[14px] text-[#141617]">

            {ad.link}

          </span>

          <div className="flex items-center gap-3">

            <button>

              <ClipboardCopy
                size={16}
                className="text-[#808B96]"
              />

            </button>

            <button>

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

      {/* ================= FOOTER ================= */}

      {variant === "default" ? (

        <div className="mt-[30px] min-[1660px]:mt-[40px] flex items-center justify-between min-[1660px]:w-[260px] ms-auto gap-2 min-[1660px]:gap-3">

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-[12px] border-0  py-2 text-[13px] font-medium text-[#141617] transition"
          >

            <Bookmark size={16} />

            Save

          </button>

          <div className="flex items-center gap-2 min-[1660px]:gap-[18px]">
            <FaChevronUp className="text-[#808B96]" />

            <button
              type="button"
              className="inline-flex items-center justify-center gap-[7px] rounded-[10px] min-[1660px]:w-[108px] min-[1660px]:h-[39px] bg-[#F1F1F1] px-2 min-[1660px]:px-4 py-[6px] min-[1660px]:py-[9.5px] text-[13px] font-medium text-[#141617] transition hover:bg-slate-200"
            >
              <TbGraph />
              Analyze

            </button>
          </div>

        </div>

      ) : (

        <div className="mt-[30px] min-[1660px]:mt-[40px] flex items-center justify-between min-[1660px]:w-[260px] ms-auto gap-2 min-[1660px]:gap-3">

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-[12px] border-0  py-2 text-[13px] font-medium text-[#141617] transition hover:bg-slate-50"
          >

            <Bookmark size={16} />

            Save

          </button>

          <div className="flex items-center gap-2 min-[1660px]:gap-[18px]">
            <FaChevronUp className="text-[#808B96]" />

            <button
              type="button"
              className="inline-flex items-center justify-center gap-[7px] rounded-[10px] min-[1660px]:w-[108px] min-[1660px]:h-[39px] bg-[#F1F1F1] px-2 min-[1660px]:px-4 py-[6px] min-[1660px]:py-[9.5px] text-[13px] font-medium text-[#141617] transition hover:bg-slate-200"
            >
              <TbGraph />
              Analyze

            </button>
          </div>

        </div>

      )}

    </div>
  );
}