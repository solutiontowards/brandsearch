"use client";

import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
};

export default function AIToolCard({
  image,
  title,
  description,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="group flex h-[185px] w-full items-center gap-[28px] rounded-[20px] border border-[#ECECEC] bg-white px-[45px] py-[27px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_32px_rgba(0,0,0,0.08)]"
    >
      {/* Thumbnail */}
      <div className="relative h-[84px] w-[112px] shrink-0 overflow-hidden rounded-[12px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="112px"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="flex-1 text-left">
        <h3 className="text-[30px] leading-[40px] font-normal text-[#141617]">
          {title}
        </h3>

        <p className="mt-[13px] text-[18px] leading-[26px] font-normal text-[#707070]">
          {description}
        </p>
      </div>
    </button>
  );
}