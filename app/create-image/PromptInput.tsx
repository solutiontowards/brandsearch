"use client";

import { useState } from "react";
import ActionButtons from "./ActionButtons";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="mt-4">
      <div className="relative overflow-hidden rounded-[14px] border border-[#ECECEC] bg-[#F7F5F5]">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Explain your idea"
          className="h-[309px] w-full rounded-[20px] resize-none bg-[#F5F2F2] px-8 py-7 text-[16px] text-[#141617] outline-none placeholder:text-[#A0A0A0]"
        />

        <ActionButtons />
      </div>
    </div>
  );
}