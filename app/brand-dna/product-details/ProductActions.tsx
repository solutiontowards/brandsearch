import { ArrowRight } from "lucide-react";

export default function ProductActions() {
  return (
    <div className="absolute w-full h-[103px] left-0 bottom-0 px-[50px] py-[19px] rounded-[50px] bg-white px-5 py-4 shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between">
        <div className="flex gap-[22px]">
            {/* Delete */}
        <button className="flex h-[65px] min-w-[184px] items-center justify-center rounded-full border-2 border-[#737474] bg-white text-[24px] font-medium text-[#F5305F] transition hover:bg-[#FFF5F7]">
          Delete
        </button>

        {/* Save Changes */}
        <button className="flex h-[65px] w-[748px] flex-1 items-center justify-center rounded-full bg-[#38CA6E] text-[24px] font-medium text-white transition hover:bg-[#30b85d]">
          Save Changes
        </button>
        </div>

        {/* Continue */}
        <button className="flex h-[65px] min-w-[218px] items-center justify-end rounded-full bg-[#31133F] px-[10px] py-[6px] text-[24px] font-medium text-white transition hover:bg-[#261032]">
          <span>Continue</span>

          <span className="flex h-[54px] w-[54px] ms-[22px] items-center justify-center rounded-full bg-white">
            <ArrowRight
              size={28}
              className="text-[#321A40]"
            />
          </span>
        </button>
      </div>
    </div>
  );
}