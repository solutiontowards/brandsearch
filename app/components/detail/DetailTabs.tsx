"use client";

const tabs = [
  "Overview",
  "Products",
  "Competitors AI",
];

export default function DetailTabs() {
  return (
    <div className="mt-4 flex h-12 items-center gap-8 rounded-xl bg-white px-6 shadow-sm">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`relative text-sm ${
            index === 0
              ? "font-semibold text-black"
              : "text-[#8A8F98]"
          }`}
        >
          {tab}

          {index === 0 && (
            <span className="absolute -bottom-[15px] left-0 h-[2px] w-full rounded-full bg-black" />
          )}
        </button>
      ))}
    </div>
  );
}