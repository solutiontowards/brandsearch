"use client";

type Props = {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

export default function InfoRow({
  icon,
  label,
  value,
}: Props) {
  return (
    <div className="flex items-center justify-between h-[46px] border border-[#F5F5F5] bg-[#FAFAFA] px-5 rounded-[10px]">
      {/* Left */}
      <div className="flex items-center gap-3">
        {icon && (
          <div className="">
            {icon}
          </div>
        )}

        <span className="text-[16px] leading-[30px] font-normal text-[#3C3D51]">
          {label}
        </span>
      </div>

      {/* Right */}
      <div className="max-w-[70%] text-right text-[16px] leading-[30px] font-medium text-[#060317]">
        {value}
      </div>
    </div>
  );
}