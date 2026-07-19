"use client";

import Image from "next/image";
import { creativeImages } from "./data";

export default function CreativeStack() {
  return (
    <div className="relative h-[579px] w-[392px] flex-1 basis-[392px] flex-[0_0_392px]">
      {/* Back */}
      <div className="absolute left-0 top-0 h-[579px] w-[392px] rotate-[-3.19deg] overflow-hidden rounded-[22px] shadow-[0_18px_40px_rgba(0,0,0,.18)]">
        <Image
          src={creativeImages[0]}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Middle */}
      <div className="absolute left-5 top-0 h-[579px] w-[392px] rotate-[0deg] overflow-hidden rounded-[22px] shadow-[0_18px_40px_rgba(0,0,0,.18)]">
        <Image
          src={creativeImages[1]}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Front */}
      <div className="absolute left-3 top-0 h-[579px] w-[392px] rotate-[6deg] overflow-hidden rounded-[22px] shadow-[0_18px_40px_rgba(0,0,0,.22)]">
        <Image
          src={creativeImages[2]}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}