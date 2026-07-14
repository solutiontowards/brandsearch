import Image from "next/image";

export default function TrafficTrend() {
  return (
    <div className="flex justify-center">
      <Image
        src="/image/blue-graph.png"
        alt="Traffic Trend"
        width={120}
        height={45}
        className="h-auto w-[120px]"
      />
    </div>
  );
}