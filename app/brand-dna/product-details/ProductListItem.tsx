import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { RiDeleteBinLine } from "react-icons/ri";

type Props = {
  image: string;
  name: string;
  active?: boolean;
};

export default function ProductListItem({
  image,
  name,
  active,
}: Props) {
  return (
    <div
  className={`group flex cursor-pointer items-center gap-2 border-b border-[#00000014] py-[15px] ps-[29px] pe-[17px] rounded-xl transition-all
    ${
      active
        ? "bg-[#F5F5F5]"
        : "hover:bg-[#F0F0F0]"
    }`}
>
  <Image
    src={image}
    alt={name}
    width={60}
    height={60}
    className="h-[60px] w-[60px] rounded-[5px] object-cover"
  />

  <div className="flex-1">
    <p className="text-[18px] font-medium leading-6 text-[#141617]">
      {name}
    </p>
  </div>

  <RiDeleteBinLine
    size={16}
    className={`transition-all duration-200
      ${
        active
          ? "text-[#000000]"
          : "invisible opacity-0 group-hover:visible group-hover:opacity-100 text-[#000000]"
      }`}
  />
</div>
    
  );
}