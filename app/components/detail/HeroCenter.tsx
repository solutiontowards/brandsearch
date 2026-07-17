export default function HeroCenter() {
  return (
    <div className="rounded-[14px] border border-[#EAEAEA] bg-white p-5">
      <h1 className="text-[30px] font-semibold leading-[38px] text-[#141617]">
        Toplux Magnesium Complex 8 Essential Magnesium Supplement 1000mg
      </h1>

      <div className="mt-4 flex items-center gap-3">
        <span className="text-[18px] text-[#6B7280]">Price:</span>
        <span className="text-[28px] font-bold text-[#141617]">
          $23.00 - 38.00
        </span>

        <span className="rounded-full bg-[#DFF7E6] px-3 py-1 text-[13px] font-medium text-[#14833B]">
          Skin Care Kits / Beauty
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button className="h-10 rounded-[10px] border border-[#E5E7EB] px-4 text-[14px] font-medium">
          TikTok product link
        </button>

        <button className="h-10 rounded-[10px] border border-[#E5E7EB] px-4 text-[14px] font-medium">
          Meta product link
        </button>

        <button className="h-10 rounded-[10px] border border-[#E5E7EB] px-4 text-[14px] font-medium">
          Website link
        </button>
      </div>
    </div>
  );
}