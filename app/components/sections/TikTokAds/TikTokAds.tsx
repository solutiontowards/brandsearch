import TikTokAdCard from "./TikTokAdCard";
import { tiktokAds } from "@/app/data/tiktokAds";

export default function TikTokAds() {
  return (
    <section className="mt-5">

      {/* Section Header */}

      {/* <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-[24px] font-semibold leading-8 text-[#141617]">
            TikTok Ads
          </h2>

          <p className="mt-1 text-[14px] text-[#808B96]">
            Discover the latest top-performing TikTok advertisements.
          </p>

        </div>

      </div> */}

      {/* Cards */}

      <div className="grid grid-cols-4 min-[1500px]:grid-cols-5 gap-6 overflow-hidden">
  {tiktokAds.map((ad, index) => (
    <div
      key={ad.id}
      className={
        index < 4
          ? "block"
          : index < 5
          ? "hidden min-[1500px]:block"
          : "hidden"
      }
    >
      <TikTokAdCard ad={ad} />
    </div>
  ))}
</div>

    </section>
  );
}