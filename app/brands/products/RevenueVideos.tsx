"use client";

import Image from "next/image";
import { Play } from "lucide-react";

interface Props {
  videos: string[];
}

export default function RevenueVideos({
  videos,
}: Props) {
  return (
    <div className="flex gap-[4.4px]">
      {videos.map((video, index) => (
        <div
          key={index}
          className="relative h-[56px] w-[45px] overflow-hidden rounded-[3.75px]"
        >
          <Image
            src={video}
            alt={`video-${index}`}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="flex h-[14px] w-[14px] items-center justify-center rounded-full bg-white">
              <Play
                size={10}
                fill="#6B7280"
                className="ml-[2px] text-[#6B7280]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}