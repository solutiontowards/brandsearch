"use client";

import { ArrowRight } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="flex items-center rounded-[20px] h-[64px] bg-[#F5F2F2] p-1 border-[2px] border-[#8B8B8B4D]">
      <input
        type="text"
        placeholder="Ask anything"
        className="flex-1 bg-transparent px-3 text-[20px] text-[#00000066] outline-none placeholder:text-[#00000066]"
      />

      <button className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#38CA6E] text-white transition hover:bg-[#35b257]">
        <ArrowRight size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
}