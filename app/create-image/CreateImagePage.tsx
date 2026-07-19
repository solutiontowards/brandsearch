"use client";

import TopBar from "./TopBar";
import PromptCard from "./PromptCard";

export default function CreateImagePage() {
  return (
    <section className="relative flex min-h-screen justify-center overflow-hidden rounded-[20px] bg-[#F1F1F1]">
      
      <div className="ps-[60px] pe-[33px] py-[38px] w-full">
        <TopBar />

        <div className="mt-24 flex justify-center">
          <PromptCard />
        </div>
      </div>
    </section>
  );
}