import ProductTopBar from "./ProductTopBar";
import RevenueCard from "./RevenueCard";
import TrafficChart from "./TrafficChart";

export default function HeroCenter() {
  return (
    <div className="flex flex-col gap-4">
      {/* Full Width */}
      <ProductTopBar />

      {/* Bottom Row */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <RevenueCard />

        <TrafficChart />
      </div>
    </div>
  );
}