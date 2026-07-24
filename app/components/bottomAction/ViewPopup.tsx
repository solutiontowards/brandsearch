"use client";

import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  view: "table" | "card";
  setView: Dispatch<SetStateAction<"table" | "card">>;
}

export default function ViewPopup({
  open,
  onClose,
  view,
  setView,
}: Props) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20"
      />

      <div className="fixed bottom-28 left-1/2 z-50 w-[520px] -translate-x-1/2 rounded-[32px] border border-[#E8E8E8] bg-white p-8 shadow-2xl">

        <div className="flex items-center justify-between">

          <span className="text-[18px] font-medium">
            View
          </span>

          <div className="flex rounded-full bg-[#F4F4F4] p-1">

            <button
              onClick={() => {
                setView("card");
                onClose();
              }}
              className={`rounded-full px-5 py-2 font-medium transition ${
                view === "card"
                  ? "bg-white shadow"
                  : "text-gray-500"
              }`}
            >
              Card view
            </button>

            <button
              onClick={() => {
                setView("table");
                onClose();
              }}
              className={`rounded-full px-5 py-2 font-medium transition ${
                view === "table"
                  ? "bg-white shadow"
                  : "text-gray-500"
              }`}
            >
              List view
            </button>

          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-[18px] font-medium">
            Per page
          </span>

          <div className="flex rounded-full bg-[#F4F4F4] p-1">

            {[10, 20, 40, 60].map((item) => (
              <button
                key={item}
                className="rounded-full px-5 py-2 text-[#7D7D7D]"
              >
                {item}
              </button>
            ))}

            <button className="rounded-full bg-white px-5 py-2 shadow">
              ∞
            </button>

          </div>

        </div>
      </div>
    </>
  );
}