export default function HeroLeft() {
  return (
    <div className="rounded-[14px] border border-[#EAEAEA] bg-white p-4">
      <div className="h-[220px] rounded-[12px] bg-[#F3F4F6]" />

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-[10px] bg-[#F8F8F8] p-3 text-center">
          <p className="text-[11px] text-[#808B96]">Origin</p>
          <p className="mt-1 text-[14px] font-semibold text-[#141617]">UK</p>
        </div>

        <div className="rounded-[10px] bg-[#F8F8F8] p-3 text-center">
          <p className="text-[11px] text-[#808B96]">Age</p>
          <p className="mt-1 text-[14px] font-semibold text-[#141617]">6 Years</p>
        </div>

        <div className="rounded-[10px] bg-[#F8F8F8] p-3 text-center">
          <p className="text-[11px] text-[#808B96]">Products</p>
          <p className="mt-1 text-[14px] font-semibold text-[#141617]">250</p>
        </div>
      </div>
    </div>
  );
}