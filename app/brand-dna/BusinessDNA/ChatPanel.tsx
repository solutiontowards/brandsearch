"use client";

import ChatInput from "./ChatInput";

export default function ChatPanel() {
  return (
    <div className="flex h-full min-h-[680px] flex-col rounded-[20px] bg-gradient-to-b from-[#2C1436] to-[#1A0E27] py-5 px-[41px] text-white">
      {/* Heading */}
      <h2 className="text-[35px] leading-[50px] font-semibold">
        Chat with us
      </h2>

      {/* Intro */}
      <div className="mt-[50px] space-y-3 text-[25px] leading-[30px] font-normal text-[#FFFFFFCC]">
        <p>
          👋 Welcome! I'm your AI Business Analyst.
        </p>

        <p>
          I'll analyze your business, brand presence, audience,
          market positioning and create your unique Business DNA.
        </p>

        <div>
          <p className="mb-3">
            To get started, please share:
          </p>

          <ul className="list-disc space-y-1 pl-5">
            <li>Your business name</li>
            <li>Website URL (if available)</li>
            <li>Industry or niche</li>
            <li>Any social media profiles</li>
          </ul>
        </div>

        <p>
          Once I have this information, I'll uncover your
          brand strengths, positioning, target audience,
          opportunities and key growth insights.
        </p>
      </div>

      {/* Push input to bottom */}
      <div className="mt-auto pt-6">
        <ChatInput />
      </div>
    </div>
  );
}