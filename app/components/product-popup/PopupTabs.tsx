"use client";

type Props = {
  activeTab: "overview" | "script" | "comments";
  setActiveTab: (
    tab: "overview" | "script" | "comments"
  ) => void;
};

export default function PopupTabs({
  activeTab,
  setActiveTab,
}: Props) {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
    },
    {
      id: "script",
      label: "AI Script",
    },
    {
      id: "comments",
      label: "Comments",
    },
  ] as const;

  return (
    <div className="mb-5 flex rounded-[12px]  p-1 h-[41px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 rounded-[0px] pb-[11px] text-start border-b text-[18px] leading-[30px] font-medium transition-all duration-200 ${
            activeTab === tab.id
              ? "bg-white text-[#141617] border-b-[3px] border-[#F23479] w-[90px]"
              : "text-[#808B96] hover:text-[#141617] border-[#0000001F] w-[90px]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}