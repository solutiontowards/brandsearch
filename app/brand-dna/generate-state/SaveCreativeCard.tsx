"use client";

import CreativeStack from "./CreativeStack";
import ActionButtons from "./ActionButtons";

type Props = {
  current?: number;
  total?: number;
};

export default function SaveCreativeCard({
  current = 1,
  total = 3,
}: Props) {
  return (
    <div className="mx-auto flex w-[1131px] h-[730px] gap-[70px] items-center justify-between rounded-[20px] bg-white px-[70px] py-[50px] shadow-[0_12px_40px_rgba(0,0,0,.08)]">
      {/* Left */}
      <CreativeStack />

      {/* Right */}
      <div>
        <p className="text-[25px] leading-[30px] font-semibold text-[#141617]">
          {current}/{total}
        </p>

        <h2 className="mt-[18px] mb-[55px] text-[45px] leading-[50px] font-normal text-[#141617]">
          Would you like to save this creative?
        </h2>

        <ActionButtons />
      </div>
    </div>
  );
}