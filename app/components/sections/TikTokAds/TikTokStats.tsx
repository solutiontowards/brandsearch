type TikTokStatsProps = {
  views: string;
  days: string;
  relatedAds: string;
  roas: string;
};

export default function TikTokStats({
  views,
  days,
  relatedAds,
  roas,
}: TikTokStatsProps) {
  return (
    <div className="flex justify-between">

      {/* Views */}
      <div className="flex flex-col items-center justify-start min-h-[35.84px]">
        <span className="text-[12px] leading-1 mb-[3.84px] font-normal text-[#808B96]">
          Views
        </span>

        <span className="text-[14px] leading-[20px] font-bold text-[#141617]">
          {views}
        </span>
      </div>

      {/* Days */}
      <div className="flex flex-col items-center justify-start min-h-[35.84px]">
        <span className="text-[12px] leading-1 mb-[3.84px] font-normal text-[#808B96]">
          Days
        </span>

        <span className="text-[14px] leading-[20px] font-bold text-[#141617]">
          {days}
        </span>
      </div>

      {/* Related Ads */}
      <div className="flex flex-col items-center justify-start min-h-[35.84px]">
        <span className="text-[12px] leading-1 mb-[3.84px] font-normal text-[#808B96]">
          Related Ads
        </span>

        <span className="text-[14px] leading-[20px] font-bold text-[#141617]">
          {relatedAds}
        </span>
      </div>

      {/* ROAS */}
      <div className="flex flex-col items-center justify-center min-h-[35.84px]">
        <span className="text-[12px] leading-1 mb-[3.84px] font-normal text-[#808B96]">
          ROAS
        </span>

        <span className="text-[14px] leading-[20px] font-bold text-[#141617]">
          {roas}
        </span>
      </div>

    </div>
  );
}