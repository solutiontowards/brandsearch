"use client";

import { ArrowLeft } from "lucide-react";
import { IoSettingsOutline } from "react-icons/io5";

type Props = {
  onBack?: () => void;
  showSettings?: boolean;
};

export default function TopBar({
  onBack,
  showSettings = true,
}: Props) {
  return (
    <div className="mb-12 flex h-[100px] w-full items-center justify-between">
      {/* Back */}
      <button
        onClick={onBack}
        className="flex h-[65px] w-[145px] items-center justify-center gap-1 rounded-full border-[2px] border-[#737474] bg-transparent px-5 text-[24px] font-medium text-[#141617] shadow-[0px_4px_12px_rgba(0,0,0,.04)] transition hover:bg-[#F8F8F8]"
      >
        <ArrowLeft size={22} />
        Back
      </button>

      {/* Settings */}
      {showSettings && (
        <button className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#BEBEBE] bg-transparent shadow-[0px_4px_12px_rgba(0,0,0,.04)] transition hover:bg-[#F8F8F8]">
          <IoSettingsOutline size={30} />
        </button>
      )}
    </div>
  );
}