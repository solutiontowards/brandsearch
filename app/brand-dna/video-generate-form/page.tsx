import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import TopBar from "@/app/create-image/TopBar";
import UploadCreativeCard from "./UploadCreativeCard";

export default function VideoGeneratePage() {
  return (
      <div className="flex min-h-screen bg-[#141414]">
        <Sidebar />
  
        <main className="bg-[#141414] py-[15px] px-[17px] w-full">
          <section className="relative min-h-screen overflow-hidden rounded-[20px] ps-[73px] pe-[84px] pt-[43px] pb-[23px] bg-[#F1F1F1]">
            <TopBar showSettings={false} />
            <div className="mt-[-20px] flex justify-center">
                <UploadCreativeCard />
          </div>
          </section>
        </main>
      </div>
    );
}