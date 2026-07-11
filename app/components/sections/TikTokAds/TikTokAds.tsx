import TikTokAdCard from "./TikTokAdCard";
import { tiktokAds } from "@/app/data/tiktokAds";

export default function TikTokAds() {
  return (
    <section className="mt-8">

      {/* Section Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-[24px] font-semibold leading-8 text-[#141617]">
            TikTok Ads
          </h2>

          <p className="mt-1 text-[14px] text-[#808B96]">
            Discover the latest top-performing TikTok advertisements.
          </p>

        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {tiktokAds.map((ad) => (
          <TikTokAdCard
            key={ad.id}
            ad={ad}
          />
        ))}

      </div>

    </section>
  );
}