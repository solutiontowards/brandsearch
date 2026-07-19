"use client";

import { ArrowRight } from "lucide-react";

type Props = {
  onClick?: () => void;
};

export default function WelcomeButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group flex h-[65px] items-center justify-end w-[206px] overflow-hidden rounded-full bg-[#321A40] pl-7 pr-[6px] shadow-[0px_12px_35px_rgba(52,22,63,0.28)] transition-all duration-300 hover:scale-105 hover:shadow-[0px_18px_45px_rgba(52,22,63,0.38)]"
    >
      <span className="mr-5 text-[24px] font-medium leading-[30px] text-white">
        Let's Go
      </span>

      <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight
          size={20}
          className="text-[#321A40]"
        />
      </div>
    </button>
  );
}