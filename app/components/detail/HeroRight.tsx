export default function HeroRight() {
  return (
    <div className="rounded-[14px] border border-[#EAEAEA] bg-white p-4">
      <p className="text-[14px] font-semibold text-[#141617]">Shop Info</p>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-12 w-12 rounded-[10px] bg-[#F3F4F6]" />

        <div>
          <p className="text-[15px] font-semibold text-[#141617]">Dr.Melaxin</p>
          <p className="text-[13px] text-[#6B7280]">🇺🇸 United States</p>
        </div>
      </div>

      <div className="mt-6 rounded-[12px] bg-[#F7F8FC] p-3">
        <p className="text-[12px] text-[#808B96]">Shop ID</p>
        <p className="mt-1 text-[16px] font-bold text-[#141617]">#1278897df</p>
      </div>
    </div>
  );
}