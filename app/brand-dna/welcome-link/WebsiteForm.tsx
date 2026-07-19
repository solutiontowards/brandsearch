"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import InputField from "./InputField";
import ContinueButton from "./ContinueButton";

export default function WebsiteForm() {
  const router = useRouter();

  const [website, setWebsite] = useState("");

  function isValidWebsite(url: string) {
    if (!url.trim()) return false;

    return /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i.test(
      url
    );
  }

  const valid = isValidWebsite(website);

  function handleContinue() {
    if (!valid) return;

    console.log("Website:", website);

    router.push("/welcome-mood");
  }

  function handleNoWebsite() {
    router.push("/manual-details");
  }

  return (
    <div className="rounded-[20px] px-[66px] py-[48px]">
      <div
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleContinue();
          }
        }}
      >
        <InputField
          value={website}
          onChange={setWebsite}
        />
      </div>

      <div className="mt-[31px] flex justify-end">
        <div className="flex items-center gap-[10px] overflow-hidden rounded-full">
          <button
            onClick={handleNoWebsite}
            className="h-[65px] w-[402px] bg-[#291238] px-[64px] text-[24px] rounded-full font-medium text-white transition hover:bg-[#37194A]"
          >
            Don't you have website?
          </button>

          <ContinueButton
            disabled={!valid}
            onClick={handleContinue}
          />
        </div>
      </div>
    </div>
  );
}