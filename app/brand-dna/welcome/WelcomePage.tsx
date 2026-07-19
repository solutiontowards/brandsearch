"use client";

import WelcomeCards from "./WelcomeCards";
import WelcomeButton from "./StartButton";

export default function WelcomePage() {
    return (
        <main className=" bg-[#141414] py-[15px] px-[17px]">
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden rounded-[20px] bg-[#F1F1F1]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
                    style={{
                        backgroundImage: "url('/image/welcomebg.png')",
                    }}
                />

                {/* Content */}
                <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center px-6">
                    {/* Heading */}
                    <h1 className="text-center text-[75px] font-normal leading-[85px] text-[#141617] mb-[35px]">
                        Describe the mood
                        <br />
                        We will make the board
                    </h1>

                    {/* Subtitle */}
                    <p className="text-center text-[26px] leading-[30px] font-normal text-[#737474]">
                        We are going to create your moodboard in second
                    </p>

                    {/* Cards */}
                    <div className="mt-[75px]">
                        <WelcomeCards />
                    </div>

                    {/* Button */}
                    <div className="mt-[71px]">
                        <WelcomeButton />
                    </div>
                </div>
            </section>
        </main>
    );
}