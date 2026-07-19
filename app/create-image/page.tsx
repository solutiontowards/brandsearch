
import CreateImagePage from "@/app/create-image/CreateImagePage";
import Dashboard from "@/app/brand-dna/dashboard/Dashboard";
import Sidebar from "@/app/components/layout/Sidebar/Sidebar";

export default function DashboardPage() {
  return (
      <div className="flex min-h-screen bg-[#141414]">
        <Sidebar />
  
        <main className="bg-[#141414] py-[15px] px-[17px] w-full">
          
          <CreateImagePage />
        </main>
      </div>
    );
}