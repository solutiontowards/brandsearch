import RecentlyViewedCard from "./RecentlyViewedCard";
import { recentlyViewedAds } from "@/app/data/recentlyViewedAds";

export default function RecentlyViewedAds() {
  return (
    <section className="rounded-[10px] bg-white pt-[24px] ps-[34px] pe-[30px] pt-[24px] pb-[32px] mt-5">
      {/* Heading */}
      <div className="mb-[27px] flex items-center justify-between">
        <h2 className="relative text-[23px] leading-[27px] font-semibold text-[#141617]">
          Recently Viewd Ads
          <span className="absolute top-1/2 right-[-30px] h-px w-[25px] -translate-y-1/2 bg-[#141617]" />
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 min-[1500px]:grid-cols-6 gap-[25px] overflow-hidden">
  {recentlyViewedAds.map((ad, index) => (
    <div
      key={ad.id}
      className={
        index < 4
          ? "block"
          : index < 6
            ? "hidden min-[1500px]:block"
            : "hidden"
      }
    >
      <RecentlyViewedCard ad={ad} />
    </div>
  ))}
</div>
    </section>
  );
}