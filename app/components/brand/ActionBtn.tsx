import { Bookmark, Image as ImageIcon } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-[3.5px]">
      <button
        className="flex h-[30px] w-[30px] items-center justify-center rounded-[7.5px] border border-[#808B964D] bg-white transition-colors hover:bg-gray-50"
      >
        <Bookmark
          size={14}
          strokeWidth={1.8}
          className="text-[#3C3D51]"
        />
      </button>

      <button
        className="flex h-[30px] w-[30px] items-center justify-center rounded-[7.5px] border border-[#808B964D] bg-white transition-colors hover:bg-gray-50"
      >
        <ImageIcon
          size={14}
          strokeWidth={1.8}
          className="text-[#3C3D51]"
        />
      </button>
    </div>
  );
}