export default function ProductForm() {
  return (
    <div className="mt-8 space-y-6">
      {/* Product Title */}
      <div className="flex flex-col gap-[15px]">
        <label className="text-[25px] leading-[35px] font-semibold text-[#141617]">
          Product Title
        </label>

        <input
          type="text"
          placeholder="www.example.com"
          className="h-[65px] w-full rounded-[10px] border-[2px] border-[#8B8B8B4D] bg-white px-7 text-[18px] font-normal text-[#141617] placeholder:text-[#A3A3A3] outline-none transition-colors focus:border-[#33C75A]"
        />
      </div>

      {/* Product Description */}
      <div className="flex flex-col gap-[15px]">
        <label className="text-[25px] leading-[35px] font-semibold text-[#141617]">
          Product Description
        </label>

        <textarea
          rows={6}
          placeholder="www.example.com"
          className="w-full resize-none rounded-[8px] border border-[#D8D8D8] bg-white px-7 py-5 text-[18px] font-normal text-[#141617] placeholder:text-[#A3A3A3] outline-none transition-colors focus:border-[#33C75A]"
        />
      </div>
    </div>
  );
}