"use client";

import { ArrowRight } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="flex items-center rounded-full bg-white p-1 shadow-sm">
      <input
        type="text"
        placeholder="Ask anything"
        className="flex-1 bg-transparent px-3 text-[13px] text-[#333] outline-none placeholder:text-[#B5B5B5]"
      />

      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#40C463] text-white transition hover:bg-[#35b257]">
        <ArrowRight size={16} strokeWidth={2.5} />
      </button>
    </div>
  );
}