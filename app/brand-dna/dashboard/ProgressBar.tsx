"use client";

type Props = {
  value: number;
  max: number;
};

export default function ProgressBar({
  value,
  max,
}: Props) {
  const percentage = (value / max) * 100;

  return (
    <div className="h-[8px] w-[220px] overflow-hidden rounded-full bg-[#ECECEC]">
      <div
        className="h-full rounded-full bg-[#34C759] transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}