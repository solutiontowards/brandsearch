"use client";

import RatioTabs from "./RatioTabs";
import PromptInput from "./PromptInput";

export default function PromptCard() {
  return (
    <div className="mx-auto w-[1191px] h-[537px] rounded-[20px] px-[70px] py-[68px] bg-white shadow-[0px_12px_35px_rgba(0,0,0,.08)]">
      {/* Ratio Tabs */}
      <RatioTabs />

      {/* Prompt Input */}
      <PromptInput />
    </div>
  );
}