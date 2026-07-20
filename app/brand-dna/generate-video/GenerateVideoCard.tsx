"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const animations = [
  {
    title: "Animate Simple",
    subtitle: "Turn a static image into short clip",
  },
  {
    title: "Animate Without Word",
    subtitle: "Turn a static image into short clip",
  },
  {
    title: "Fade in out",
    subtitle: "Turn a static image into short clip",
  },
  {
    title: "Fire Burst",
    subtitle: "Turn a static image into short clip",
  },
  {
    title: "Pop up",
    subtitle: "Turn a static image into short clip",
  },
  {
    title: "Melt in",
    subtitle: "Turn a static image into short clip",
  },
];

export default function GenerateVideoCard() {
  return (
    <div className="w-full rounded-[18px]">
      <div className="flex gap-[40px]">
        {/* Left Image */}
        <div className="w-[414px] h-[721px] shrink-0 overflow-hidden rounded-[20px]">
          <Image
            src="/image/dashboard3.png"
            alt=""
            width={414}
            height={721}
            className="h-[721px] w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-1 flex-col">
          {/* Heading */}
          <h3 className="mb-[20px] text-[23px] leading-[28px] font-semibold text-[#141617]">
            Explain your Idea
          </h3>

          {/* Textarea */}
          <textarea
            placeholder=""
            className="h-[186px] w-full resize-none rounded-[20px] border-0 bg-[#FFFFFF] p-4 outline-none placeholder:text-[#B8B8B8] focus:border-[#8A4FFF]"
          />

          {/* Divider */}
          <p className="mt-[40px] mb-[20px] text-[23px] leading-[28px] font-semibold text-[#141617]">
            Or use one of this angle
          </p>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-y-[10px] gap-x-[15px]">
            {animations.map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] h-[123px] bg-white p-4 text-left transition hover:border-[#7C3AED] hover:shadow-sm"
              >
                <h4 className="text-[30px] leading-[40px] mb-[13px] font-normal text-[#141617]">
                  {item.title}
                </h4>

                <p className="text-[18px] leading-[26px] font-normal text-[#707070]">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Continue */}
          <div className="mt-[30px] flex justify-end">
            <button className="flex h-[65px] w-[218px] items-center gap-[22px] justify-end rounded-full bg-[#2B1234] pl-5 pr-2 text-white">
              <span className="text-[24px] leading-[30px] font-medium">Continue</span>

              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white">
                <ArrowRight
                  size={16}
                  className="text-[#321A40]"
                  strokeWidth={2.5}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}