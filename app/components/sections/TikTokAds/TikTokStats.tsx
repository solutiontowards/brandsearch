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
    <div className="mt-5 grid grid-cols-4 rounded-[14px] border border-[#00000014] bg-white">

      {/* Views */}
      <div className="flex flex-col items-center justify-center border-r border-[#00000014] py-4">
        <span className="text-[13px] font-normal text-[#808B96]">
          Views
        </span>

        <span className="mt-1 text-[18px] font-semibold text-[#141617]">
          {views}
        </span>
      </div>

      {/* Days */}
      <div className="flex flex-col items-center justify-center border-r border-[#00000014] py-4">
        <span className="text-[13px] font-normal text-[#808B96]">
          Days
        </span>

        <span className="mt-1 text-[18px] font-semibold text-[#141617]">
          {days}
        </span>
      </div>

      {/* Related Ads */}
      <div className="flex flex-col items-center justify-center border-r border-[#00000014] py-4">
        <span className="text-center text-[13px] font-normal text-[#808B96]">
          Related Ads
        </span>

        <span className="mt-1 text-[18px] font-semibold text-[#141617]">
          {relatedAds}
        </span>
      </div>

      {/* ROAS */}
      <div className="flex flex-col items-center justify-center py-4">
        <span className="text-[13px] font-normal text-[#808B96]">
          ROAS
        </span>

        <span className="mt-1 text-[18px] font-semibold text-[#F5A623]">
          {roas}
        </span>
      </div>

    </div>
  );
}