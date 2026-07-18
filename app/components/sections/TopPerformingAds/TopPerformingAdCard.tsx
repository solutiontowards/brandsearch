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
import { IoCopyOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaChartLine } from "react-icons/fa6";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";

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
    <div className="w-full max-w-[360px] rounded-[10px] bg-white px-[25px] pt-[25px] pb min-[1660px]:px-[25px] min-[1660px]:pb-[20px] transition hover:-translate-y-0.5">

      {/* ================= HEADER ================= */}

      <div className="flex items-start justify-between">

        <div className="flex items-start gap-0.5 min-[1660px]:gap-2.5">

          <div className="relative h-[18px] min-[1660px]:h-[38px] w-[18px] min-[1660px]:w-[38px] shrink-0 grow-0 basis-[18px] min-[1660px]:basis-[38px] overflow-hidden rounded-full">

            <Image
              src={ad.logoSrc}
              alt={ad.brandName}
              fill
              sizes="38px"
              className="object-cover h-[38px] w-[38px] rounded-full"
            />

          </div>

          <div>

            <div className="flex items-center gap-0.5 min-[1660px]:gap-2">

              <h3 className="text-[12px] min-[1660px]:text-[18px] font-medium leading-6 text-[#141617]">
                {ad.brandName}
              </h3>

              {/* <span
                className={`rounded-full px-2 py-[1px] min-[1660px]:py-[3px] text-[5px] h-[21px] min-[1660px]:text-[10px] flex items-center justify-center
                ${variant === "default"
                    ? "bg-[#F2347917] text-[#F23479]"
                    : "bg-[#F5F5F5] text-[#808B96]"
                  }`}
              >
                {ad.category}
              </span> */}

            </div>

            <div className="mt-[6px] flex items-center gap-2">

              {variant === "default" ? (
                <>
                  <span className="text-[12px] min-[1660px]:text-[14px] leading-5 tracking-[0.03em] text-[#141617]">
                    {ad.period}
                  </span>

                  <span className="rounded-[40px] bg-[#F5F5F5] px-[8px] py-[4px] text-[8px] min-[1660px]:text-[10px] min-w-[35px] h-[22px] font-medium leading-[10px] text-[#3C3D51] flex items-center justify-center">
                    {ad.days}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[14px] font-bold leading-5 text-[#38CA6E]">
                    253
                  </span>

                  <span className="text-[14px] font-normal leading-5 text-[#141617]">
                    of 414 Ads
                  </span>

                  <span className="rounded-[40px] bg-[#F5F5F5] px-[8px] py-[6px] text-[10px] font-medium text-[#3C3D51]">
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

            <p className="flex justify-center items-center gap-[4px] text-[10px] leading-[10px] font-normal flex-col">

              <span className="h-[23px] w-[23px] rounded-[4px] bg-[#F1F1F1] text-[#808B96] flex justify-center items-center">
                <IoCopyOutline size={10} /></span>
              3

            </p>

            <p className="flex justify-center items-center gap-[4px] text-[10px] leading-[10px] font-normal flex-col">
              <span className="h-[23px] w-[23px] rounded-[4px] bg-[#F1F1F1] text-[#808B96] flex justify-center items-center"><GoStack size={10} /></span>
              193


            </p>

          </div>

        )}

      </div>

      {/* ================= FIRST ROW ================= */}

      <div className="mb-[7px] mt-[16px] border-t border-[#00000014]" />

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

        <div className="flex justify-between gap-[5px]">

          <div className="flex items-center justify-center w-[78px] gap-1 rounded-[20px] h-7 bg-[#00C43717] py-2">

            <HiOutlineUsers
              size={12}
              className="text-[#38CA6E]"
            />

            <span className="font-medium text-[14px] leading-5 text-[#38CA6E]">

              6692

            </span>

          </div>

          <div className="flex items-center justify-center w-[136px] gap-1 rounded-[20px] h-7 bg-[#56565A26] py-2">

            <GoStack
              size={12}
              className="text-[#56565A]"
            />

            <span className="font-medium text-[14px] leading-5 text-[#56565A]">

              210€-9€/d

            </span>

          </div>

          <div className="flex items-center justify-center gap-1 w-[78px] rounded-[20px] h-7 bg-[#607FF826] py-2">

            <Image
              src="/image/us-logo.png"
              alt=""
              width={23}
              height={14}
              className="object-contain w-[23px] h-[14px] rounded-0"
            />

            <span className="font-medium text-[14px] leading-5 text-[#060317]">

              100%

            </span>

          </div>

        </div>

      )}
      {/* ================= SECOND ROW ================= */}

      {/* <div className=" mt-[4px] mb-[5px] border-t border-[#00000014]" /> */}

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

        <div className="mt-[7px] py-[9px] pe-[17px] ps-[12px] flex items-center justify-between rounded-[10px] border border-[#F234791A] bg-[#F234790D]">

          <div className="mt-1 flex items-center gap-2">

            <FaChartLine
              size={16}
              className="text-[#F23479]"
            />

            <span className="text-[18px] font-semibold text-[#F23479]">

              Dropping Fast

            </span>

          </div>

          <div className="text-right">

            <p className="mt-1 text-[14px] leading-5 font-medium text-[#B20000]">

              44

            </p>

          </div>

        </div>

      )}

      {/* ================= IMAGE ================= */}
      <div className="relative">
        <div className="relative mt-5  min-[1660px]:mt-5 min-[1660px]:mb-5 overflow-hidden rounded-[10px] border border-[#0000001A]">

          {variant === "default" ? (

            <>
              <div className="relative h-[288px] min-[1660px]:h-[288px] w-full">

                <Image
                  src={ad.images[0]}
                  alt={ad.brandName}
                  width={100}
                  height={288}
                  className="object-cover w-full"
                />

              </div>

              {/* Presented by Meta */}

              <div className="absolute bottom-4 right-4 flex h-6 min-[1660px]:h-8 items-center gap-1 min-[1660px]:gap-2 rounded-full bg-white px-3 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">

                <div className="relative h-[16px] min-[1660px]:h-[22px] w-[16px] min-[1660px]:w-[22px]">

                  <Image
                    src="/image/meta-logo.svg"
                    alt="Meta"
width={22}
  height={22}
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
                    className="relative h-[288px] min-w-full"
                  >

                    <Image
                      src={img}
                      alt="heloo"
                      fill
                      className="object-cover"
                    />

                  </div>

                ))}

              </div>



            </>

          )}

        </div>

        <div >
          {/* Previous */}

          <button
            onClick={prevSlide}
            className="absolute -left-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
          >

            <ChevronLeft size={18} />

          </button>

          {/* Next */}

          <button
            onClick={nextSlide}
            className="absolute -right-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
          >

            <ChevronRight size={18} />

          </button>

          {/* Indicators */}

          {/* <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">

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

          </div> */}
        </div>
      </div>

      {/* ================= BELOW IMAGE ================= */}

      {variant === "default" ? (

        <>
          <div className="flex items-center justify-between h-[20px] mt-5">

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
          <h4 className="mt-5 text-[14px] font-normal mb-[9px] leading-[20px] text-[#141617]">

            The New Standard for Elite Recovery

          </h4>

          <p className="text-[12px] leading-4 font-normal text-[#808B96]">

            Recovery has entered a new era. Hyperice's latest innovation delivers elite performance for athletes and everyday users.

          </p>

        </>

      )}
      {/* ================= DESCRIPTION ================= */}

      {variant === "default" && (
        <p className="text-[12px] leading-4 text-[#808B96]">
          {ad.description}
        </p>
      )}

      {/* ================= LINK BOX ================= */}

      <div className="mt-5 rounded-[10px] h-[38px] border border-[#F234791A] bg-[#F234790D] ps-[17px] pe-[12px] py-[11px]">

        <div className="flex items-center justify-between">

          <span className="truncate font-normal text-[15px] leading-4 text-[#141617]">

            {ad.link}

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

      {/* ================= FOOTER ================= */}

      {variant === "default" ? (

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

      ) : (

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

      )}

    </div>
  );
}