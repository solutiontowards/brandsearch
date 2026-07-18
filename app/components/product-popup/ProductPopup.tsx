"use client";

import { useEffect } from "react";
import PopupHeader from "./PopupHeader";
import PopupBody from "./PopupBody";
import { InstagramAd } from "@/app/data/instagramAds";

type Props = {
  open: boolean;
  onClose: () => void;
  ad: InstagramAd | null;
};

export default function ProductPopup({
  open,
  onClose,
  ad,
}: Props) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", esc);

    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  if (!open || !ad) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-end bg-black/50 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-[95vh] w-[1320px] overflow-hidden rounded-l-[10px] bg-[#F5F5F5] pt-[26px] ps-[34px] pe-[31px] pb-[75px]"
      >
        <PopupHeader />

        {/* Pass the selected ad */}
        <PopupBody ad={ad} />
      </div>
    </div>
  );
}