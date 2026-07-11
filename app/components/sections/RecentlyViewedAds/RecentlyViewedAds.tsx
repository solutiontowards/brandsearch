import RecentlyViewedCard from "./RecentlyViewedCard";
import { recentlyViewedAds } from "@/app/data/recentlyViewedAds";

export default function RecentlyViewedAds() {
  return (
    <section className="rounded-[16px] bg-white p-6">
      {/* Heading */}
      <div className="mb-6 flex items-center gap-2">
        <h2 className="text-[24px] font-semibold leading-8 text-[#141617]">
          Recently Viewed Ads
        </h2>

        <div className="h-px flex-1 bg-[#D9D9D9]" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {recentlyViewedAds.map((ad) => (
          <RecentlyViewedCard
            key={ad.id}
            ad={ad}
          />
        ))}
      </div>
    </section>
  );
}