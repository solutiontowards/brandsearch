import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import TopBar from "@/app/create-image/TopBar";
import SaveCreativeCard from "./SaveCreativeCard";

export default function DashboardPage() {
  return (
      <div className="flex min-h-screen bg-[#141414]">
        <Sidebar />
  
        <main className="bg-[#141414] py-[15px] px-[17px] w-full">
          <section className="relative min-h-screen overflow-hidden rounded-[20px] px-[73px] py-[43px] bg-[#F1F1F1]">
            <TopBar showSettings={false} />
            <div className="mt-[80px] flex justify-center">
            <SaveCreativeCard
              current={1}
              total={3}
            />
          </div>
          </section>
        </main>
      </div>
    );
}