"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export default function AddMoreCard() {
  return (
    // <button
    //   type="button"
    //   className="group relative flex h-[180px] w-[270px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[10px] border-none bg-[url('/image/saved-bg.png')] bg-cover bg-center bg-no-repeat transition-all duration-300 hover:shadow-[0px_10px_24px_rgba(0,0,0,0.08)]"
    // >

    //   <div className="relative z-10 h-[80px] w-full">

    //     <div className="absolute top-[68%] -translate-y-[35%] left-1/2 -translate-x-1/2 flex h-[64px] w-[64px] items-center justify-center rounded-full border-[3px] border-white bg-transparent shadow-md">
    //       <Plus
    //         size={28}
    //         strokeWidth={3}
    //         className="text-white"
    //       />
    //     </div>
    //   </div>

    // </button>

    <button
      type="button"
      className="group relative flex h-[180px] w-[203px] min-[1400px]:w-[233px] px-[3.46px] shrink-0 pb-[25px] bg-[#0B00FA] justify-center overflow-hidden rounded-[10px]"
    >

      <div className="absolute w-full h-full inset-0 z-0 px-[3.46px]">
        <div className="absolute w-[calc(100%-6.92px)] bottom-0 h-[150px]  rounded-[7.5px] bg-white">
          <Image
            src="/image/white-bg.png"
            alt="White Background"
            fill
            className="object-contain object-top !-top-[15px]"
          />
        </div>

        <div className="absolute w-[calc(100%-6.92px)] bottom-0 h-[125px] rounded-[7.5px] bg-[#FE5D29]">
          <Image
            src="/image/orange-bg.png"
            alt="Orange Background"
            fill
            className="object-contain object-top !-top-[10px]"
          />
        </div>
        <div className="absolute bottom-0 h-[105.5px] w-[calc(100%-6.92px)] rounded-[7.5px] bg-[#0F00FB]">
          <Image
            src="/image/blue-bg.png"
            alt="Blue Background"
            fill
            className="object-contain object-top !-top-[10px]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end pt-[20px] text-white">
        <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-[4px] border-white">
          <Plus
            size={34}
            strokeWidth={3}
          />
        </div>

        <span className="mt-[9px] text-[12px] font-medium leading-[18px]">
          Add More Files
        </span>
      </div>
    </button>
  );
}