"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export default function AddMoreCard() {
  return (
    <button
      type="button"
      className="group relative flex h-[180px] w-[270px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[10px] border-none bg-[url('/image/saved-bg.png')] bg-cover bg-center bg-no-repeat transition-all duration-300 hover:shadow-[0px_10px_24px_rgba(0,0,0,0.08)]"
    >

      {/* Folder Illustration */}
      {/* <div className="relative z-10 h-[80px] w-full">

        <div className="absolute top-[68%] -translate-y-[35%] left-1/2 -translate-x-1/2 flex h-[64px] w-[64px] items-center justify-center rounded-full border-[3px] border-white bg-transparent shadow-md">
          <Plus
            size={28}
            strokeWidth={3}
            className="text-white"
          />
        </div>
      </div> */}

    </button>
  );
}