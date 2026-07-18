import HeroLeft from "./HeroLeft";
import ShopInfoCard from "./ShopInfoCard";
import RevenueCard from "./RevenueCard";
import TrafficChart from "./TrafficChart";
import PixelsTabs from "./PixelsTabs";

export default function BrandDetailTopCard() {
  return (
    <section className="mt-[15px] grid grid-cols-[421px_minmax(0,1fr)] gap-4">
  <HeroLeft />

  <div className="min-w-0">
    <div className="flex flex-col gap-4">
    
          {/* Bottom Row */}
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <RevenueCard />
    
            <TrafficChart />
          </div>
          <div className="flex gap-[15px]">
            <ShopInfoCard />
            <PixelsTabs />
          </div>
        </div>
  </div>
</section>
  );
}