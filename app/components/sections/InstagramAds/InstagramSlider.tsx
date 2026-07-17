"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type InstagramSliderProps = {
  images: string[];
};

export default function InstagramSlider({
  images,
}: InstagramSliderProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative rounded-[10px] h-[288px] border border-[#0000001A]">
      {/* Image */}

      <div className="relative h-[288px] w-full rounded-[10px]">
        <Image
          src={images[current]}
          alt={`Instagram Ad ${current + 1}`}
          fill
          sizes="100%"
          className="object-cover rounded-[10px]"
        />
      </div>

      {/* Left Arrow */}

      <button
        onClick={prevSlide}
        className="absolute left-[-18px] top-1/2 flex h-[31px] w-[31px] shadow-[2px_2px_4px_0px_#00000040] -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-white"
      >
        <ChevronLeft
          size={18}
          className="text-[#141617]"
        />
      </button>

      {/* Right Arrow */}

      <button
        onClick={nextSlide}
        className="absolute right-[-18px] top-1/2 flex h-[31px] w-[31px] shadow-[2px_2px_4px_0px_#00000040] -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-white"
      >
        <ChevronRight
          size={18}
          className="text-[#141617]"
        />
      </button>

      {/* Pagination Dots */}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              current === index
                ? "bg-white"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Counter */}

      {/* <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
        {current + 1}/{images.length}
      </div> */}
    </div>
  );
}