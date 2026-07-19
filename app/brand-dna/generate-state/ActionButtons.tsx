"use client";

type Props = {
  onSave?: () => void;
  onDiscard?: () => void;
};

export default function ActionButtons({
  onSave,
  onDiscard,
}: Props) {
  return (
    <div className="flex gap-[10px]">
      <button
        onClick={onDiscard}
        className="h-[65px] w-[184px] rounded-full border-[2px] border-[#737474] bg-white text-[24px] leading-6 font-medium text-[#F5305F] transition hover:bg-[#FFF4F7]"
      >
        Discard
      </button>

      <button
        onClick={onSave}
        className="h-[65px] w-[184px] rounded-full bg-[#38CA6E] text-[24px] leading-6 font-medium text-white transition hover:bg-[#2FBC63]"
      >
        Save
      </button>
    </div>
  );
}