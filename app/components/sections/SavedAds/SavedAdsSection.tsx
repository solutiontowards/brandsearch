import RecentlyViewedCard from "../RecentlyViewedAds/RecentlyViewedCard";
import type { RecentlyViewedAd } from "@/app/data/recentlyViewedAds";

type SavedAdsSectionProps = {
  title: string;
  ads: RecentlyViewedAd[];
};

export default function SavedAdsSection({
  title,
  ads,
}: SavedAdsSectionProps) {
  return (
    <section className="rounded-[16px] bg-white p-6">
      {/* Section Heading */}
      <div className="mb-6 flex items-center gap-2">
        <h2 className="text-[20px] font-medium text-[#141617]">
          {title}
        </h2>

        <div className="h-px flex-1 bg-[#D9D9D9]" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {ads.map((ad) => (
          <RecentlyViewedCard
            key={ad.id}
            ad={ad}
          />
        ))}
      </div>
    </section>
  );
}