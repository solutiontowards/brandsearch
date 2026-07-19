"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function InputField({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="www.example.com"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-[90px] w-full rounded-[20px] border-[2px] border-[#8B8B8B4D] bg-[#F5F2F2] px-[50px] text-[30px] text-[#00000066] outline-none transition-all placeholder:text-[#00000066] focus:border-[#8B8B8B4D] focus:bg-white focus:ring-2 focus:ring-[#8B8B8B4D]"
    />
  );
}