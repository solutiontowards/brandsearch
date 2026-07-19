"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import InputField from "./InputField";

export default function LanguageForm() {
  const router = useRouter();

  const [language, setLanguage] = useState("");
  const [brandName, setBrandName] = useState("");
  const [selling, setSelling] = useState("");

  const valid =
    language.trim() !== "" &&
    brandName.trim() !== "" &&
    selling.trim() !== "";

  function handleContinue() {
    if (!valid) return;

    console.log({
      language,
      brandName,
      selling,
    });

    router.push("/welcome-mood");
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
        {/* Language */}
        <InputField
          placeholder="Language"
          value={language}
          onChange={setLanguage}
        />

        {/* Brand + Selling */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <InputField
            placeholder="Brand name"
            value={brandName}
            onChange={setBrandName}
          />

          <InputField
            placeholder="What are you selling?"
            value={selling}
            onChange={setSelling}
          />
        </div>
      </div>

      <div className="mt-[31px] flex justify-end">
        <button
          onClick={handleContinue}
          disabled={!valid}
          className={`h-[65px] w-full rounded-full text-[24px] font-medium transition ${valid
              ? "bg-[#0B0720] text-white hover:bg-[#37194A]"
              : "cursor-not-allowed bg-[#0B0720] text-[#FFFFFF]"
            }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}