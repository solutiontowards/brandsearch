type Props = {
  label: string;
};

export default function ValueChip({ label }: Props) {
  return (
    <span className="rounded-full border border-[#D7D7D7] bg-[#FAFAFA] px-4 py-2 text-[12px] font-medium text-[#555]">
      {label}
    </span>
  );
}