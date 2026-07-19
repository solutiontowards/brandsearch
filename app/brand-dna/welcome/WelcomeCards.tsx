"use client";

import WelcomeCard from "./WelcomeCard";
import { moodCards } from "./data";

export default function WelcomeCards() {
    return (
        <div className="relative h-[330px] w-[1065px]">
            <div
                className="absolute left-[0px]"
                style={{ zIndex: 1 }}
            >
                <WelcomeCard {...moodCards[0]} />
            </div>

            <div
                className="absolute left-[265px]"
                style={{ zIndex: 2 }}
            >
                <WelcomeCard {...moodCards[1]} />
            </div>

            <div
                className="absolute left-[535px]"
                style={{ zIndex: 3 }}
            >
                <WelcomeCard {...moodCards[2]} />
            </div>

            <div
                className="absolute left-[calc(100%-264px)]"
                style={{ zIndex: 4 }}
            >
                <WelcomeCard {...moodCards[3]} />
            </div>
        </div>
    );
}