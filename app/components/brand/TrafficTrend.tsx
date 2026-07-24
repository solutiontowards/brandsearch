import Image from "next/image";

export default function TrafficTrend() {
  return (
    <div className="flex justify-center">
      <Image
        src="/image/blue-graph.png"
        alt="Traffic Trend"
        width={89}
        height={32}
        className="h-auto w-[88.5px]"
      />
    </div>
  );
}