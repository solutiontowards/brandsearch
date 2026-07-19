"use client";
import LanguageForm from "./LanguageForm"

export default function WelcomeLinkPage() {
    return (
        <main className=" bg-[#141414] py-[15px] px-[17px]">
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden rounded-[20px] bg-[#F1F1F1]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
                    style={{
                        backgroundImage: "url('/image/welcomebg.png')",
                    }}
                />

                {/* Soft Glow */}
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FAFAFA] blur-[90px]" />

                {/* Content */}
                <div className="relative z-10 flex w-full max-w-[1000px] flex-col items-center px-6">
                    <h1 className="text-center text-[75px] font-normal leading-[85px] text-[#141617] mb-[35px]">
                        Enter more details
                    </h1>

                    {/* Subtitle */}
                    <p className="text-center text-[26px] leading-[36px] font-normal text-[#737474]">
                        Analyze. Decode. Grow. We transform your business <br /> data into a unique Business DNA.
                    </p>

                    <div className="mt-[90px] w-full max-w-[1074px] h-[392px] rounded-[20px] bg-[#FFFFFF]">
                        <LanguageForm />
                    </div>
                </div>
            </section>
        </main>
    );
}