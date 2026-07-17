import DetailNavbar from "@/app/components/detail/DetailNavbar";
import DetailTabs from "@/app/components/detail/DetailTabs";
import DetailHero from "@/app/components/detail/DetailHero";
import StatsGrid from "@/app/components/detail/StatsGrid";

import Sidebar from "@/app/components/layout/Sidebar/Sidebar";

export default function ProductDetailsPage() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 space-y-5 min-[1150px]:space-y-0 mt-[15px] mr-[19px] rounded-[20px] bg-[#F1F1F1] pt-[21px] pr-[33px] pl-[40px] pb-[40px]">
        <DetailNavbar />

        {/* Cards */}
        <div className="mt-5 grid grid-cols-1 gap-[25px] md:grid-cols-2 xl:grid-cols-4">
          <DetailTabs />

      <DetailHero />

      <StatsGrid />
        </div>
      </main>
    </div>
  );
}