"use client";

import Image from "next/image";
import { FiBox } from "react-icons/fi";
interface Props {
  images: string[];
  total: string;
}

export default function OurProducts({
  images,
  total,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-between">

      <div className="flex items-center gap-[4.17px]">

        {images.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className={`relative h-[37.5px] w-[45px] overflow-hidden rounded-[3.75px] border-[0.75] border-[#000000] ${
              index !== 0 ? "-ml-0" : ""
            }`}
          >
            <Image
              src={image}
              alt={`Product ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

      </div>

      <div className="mt-[9px] flex items-center justify-between w-full">
        <p className="flex items-center gap-[2px] text-[9px] leading-[9px] text-[#3C3D51]">
          <FiBox /> Total Products
        </p>
        <p className="text-[10.5px] font-semibold leading-none text-[#141617]">
          {total}
        </p>

        
      </div>

    </div>
  );
}