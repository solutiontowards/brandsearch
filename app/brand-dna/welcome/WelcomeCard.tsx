"use client";

import Image from "next/image";

type Props = {
  image: string;
  title: string;
  subtitle: string;
  color: string;
  rotate: string;
  top: string;
};

export default function WelcomeCard({
  image,
  title,
  subtitle,
  color,
  rotate,
  top,
}: Props) {
  return (
    <div
      className="absolute w-[264px] h-[316px] rounded-[14px] border-[2px] border-[#38CA6E] bg-white rounded-[20px] px-[15px] py-[14px] shadow-[0px_12px_30px_rgba(49,209,124,0.18)] transition-all duration-300 hover:-translate-y-3 hover:rotate-0"
      style={{
        transform: `rotate(${rotate})`,
        top,
      }}
    >
      {/* Image */}

      <div className="relative h-[156px] overflow-hidden rounded-[20px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="156px"
          className="object-cover"
        />
      </div>

      {/* Dots */}

      <div className="mt-3 flex gap-1">
        <span
          className="h-[22px] w-[22px] rounded-full"
          style={{ background: color }}
        />

        <span
          className="h-[22px] w-[22px] rounded-full"
          style={{ background: color }}
        />

        <span
          className="h-[22px] w-[22px] rounded-full"
          style={{ background: color }}
        />
      </div>

      <h3 className="my-[3px] text-[26px] leading-[30px] font-medium text-[#141617]">
        {title}
      </h3>

      <p className="mt-1 text-[16px] leading-[20px] font-normal text-[#737474]">
        {subtitle}
      </p>
    </div>
  );
}