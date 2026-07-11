import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import SavedAdsSection from "@/app/components/sections/SavedAds/SavedAdsSection";

import { recentlyViewedAds } from "@/app/data/recentlyViewedAds";

export default function SavedPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="mt-[15px] mr-[15px] flex-1 overflow-y-auto rounded-[20px] bg-[#F8F8F8] p-6">

        {/* Page Title */}
        <h1 className="mb-6 text-[24px] font-semibold text-[#141617]">
          Saved Items
        </h1>

        {/* Meta */}
        <SavedAdsSection
          title="Meta Ads"
          ads={recentlyViewedAds}
        />

        {/* Instagram */}
        <div className="mt-8">
          <SavedAdsSection
            title="Insta Ads"
            ads={recentlyViewedAds}
          />
        </div>

        {/* TikTok */}
        <div className="mt-8">
          <SavedAdsSection
            title="TikTok Ads"
            ads={recentlyViewedAds}
          />
        </div>

      </main>
    </div>
  );
}