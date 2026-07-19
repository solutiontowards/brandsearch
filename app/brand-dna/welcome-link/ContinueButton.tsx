"use client";

import { ArrowRight } from "lucide-react";

type Props = {
  disabled?: boolean;
  onClick?: () => void;
};

export default function ContinueButton({
  disabled,
  onClick,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`group flex h-[65px] w-[211px] items-center justify-end overflow-hidden rounded-full transition-all duration-300
      ${
        disabled
          ? "cursor-not-allowed bg-[#34296D]"
          : "cursor-pointer bg-[#34296D] hover:scale-105 hover:shadow-lg"
      }`}
    >
      <span className="px-5 text-[24px] leading-[30px] font-medium text-white">
        Continue
      </span>

      <div
        className={`mr-1 flex h-[54px] w-[54px] bg-[#BABABA] text-[#321A40] items-center justify-center rounded-full transition-all
        ${
          disabled
            ? "bg-[#C8C4D5]"
            : "bg-white group-hover:translate-x-0.5"
        }`}
      >
        <ArrowRight
          size={18}
          className={
            disabled ? "text-[#321A40]" : "text-[#321A40]"
          }
        />
      </div>
    </button>
  );
}