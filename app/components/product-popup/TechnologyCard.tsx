"use client";

import Image from "next/image";

type Props = {
  title: string;
  icon: string;
};

export default function TechnologyCard({
  title,
  icon,
}: Props) {
  return (
    <div className="flex h-[48px] items-center gap-3 rounded-[12px] border border-[#E8E8E8] bg-white px-4 transition hover:border-[#3058FF]">
      <Image
        src={icon}
        alt={title}
        width={22}
        height={22}
      />

      <span className="text-[14px] font-medium text-[#3C3D51]">
        {title}
      </span>
    </div>
  );
}