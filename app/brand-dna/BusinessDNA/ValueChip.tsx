type Props = {
  label: string;
};

export default function ValueChip({ label }: Props) {
  return (
    <span className="rounded-full border border-[#000000] py-[6px] px-[28px] bg-[#FAFAFA] px-4 py-2 text-[20px] font-normal text-[#737474]">
      {label}
    </span>
  );
}