import { ImagePlus, Search, ArrowUp } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-10">
      {/* Add Image */}
      <button className="flex h-[65px] w-[432px] items-center justify-center gap-2 rounded-full border border-[#ED4B72] bg-[#ED4B720D] text-[20px] font-normal text-[#F5305F] transition hover:bg-pink-50">
        <ImagePlus size={16} />
        Add Image manually
      </button>

      {/* Search */}
      <div className="flex h-[65px] w-[906px] flex-1 items-center rounded-full border border-[#8B8B8B4D] bg-transparent ps-[34px] pe-[11px]">
        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          placeholder="www.example.com"
          className="ml-3 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <ArrowUp className="h-[54px] w-[54px] rounded-full bg-[#38CA6E] text-white text-[12px] p-2" />
      </div>
    </div>
  );
}