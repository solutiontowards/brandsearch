import BusinessDNA from "@/app/brand-dna/BusinessDNA/BusinessDNA";

export default function Page() {
    return (
        <main className=" bg-[#141414] py-[15px] px-[17px]">
            <section className="pb-[95px] ps-[65px] pt-[38px] pe-[52px] relative z-1 min-h-screen overflow-hidden rounded-[20px] bg-[#F1F1F1]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 -z-1"
                    style={{
                        backgroundImage: "url('/image/welcomebg.png')",
                    }}
                />
                <BusinessDNA />
            </section>
        </main>
    );
}