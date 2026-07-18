"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Cell,
} from "recharts";
import Image from "next/image";

const data = [
    { day: "Sun", value: 220 },
    { day: "", value: 275 },
    { day: "", value: 220 },
    { day: "", value: 220 },
    { day: "Mon", value: 250 },
    { day: "", value: 160 },
    { day: "", value: 160 },
    { day: "Tue", value: 130 },
    { day: "", value: 220 },
    { day: "", value: 220 },
    { day: "Wed", value: 250 },
    { day: "", value: 275 },
    { day: "", value: 275 },
    { day: "", value: 305, active: true },
    { day: "Thu", value: 220 },
    { day: "", value: 250 },
    { day: "", value: 220 },
    { day: "Fri", value: 275 },
    { day: "", value: 100 },
    { day: "", value: 250 },
    { day: "Sat", value: 160 },
    { day: "", value: 130 },
];

export default function BrandRevenue() {
    return (
        <div className="rounded-[10px] bg-white pt-[25px] pb-[15px] px-6">
            {/* Heading */}
            <div className="flex gap-[45px] items-center relative">
                <div className="bg-[#FAFAFA] border border-[#F5F5F5] rounded-[10px] h-[88px] w-[221px] px-[14px] pt-[11px] pb-[13px]">

                <p className="text-[18px] leading-[25px] text-[#808B96]">
                    Sale Revenue
                </p>


                <h2 className="mt-[3px] text-[24px] leading-[34px] font-medium text-[#141617]">
                    $197k - $229k
                </h2>
            </div>
            <span className="absolute h-[70px] w-[1px] bg-[#808B964D] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            <div>
                <p className="text-[18px] leading-[25px] text-[#808B96]">
                    Total Unit Sold
                </p>


                <h2 className="mt-[3px] text-[24px] leading-[34px] font-medium text-[#141617]">
                    100.8k
                </h2>
            </div>
            </div>

            {/* Chips */}
            <div className="chartBg mt-[10px] bg-[url('/image/chartBg.png')] bg-cover bg-top bg-no-repeat">

                <div className="flex justify-between">
                    <div className="flex gap-[10px]">
                        <div className="flex items-center gap-2 rounded-full text-[15px] leading-[16px] bg-[#00C43717] px-4 py-[7px]">
                            <span className="font-medium">7D</span>
                            <span className="font-semibold text-[#4CAF50]">
                                ▲ 14%
                            </span>
                        </div>

                        <div className="flex items-center gap-2 rounded-full text-[15px] leading-[16px] bg-[#F4F4F4] px-4 py-[7px]">
                            <span className="font-medium">Live</span>
                            <span className="font-semibold text-red-500">
                                ▼ 14%
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="flex items-center gap-2 rounded-full text-[15px] leading-[16px] bg-[#00C43717] px-4 py-[7px]">
                            <span className="font-medium">7D</span>
                            <span className="font-semibold text-[#4CAF50]">
                                ▲ 14%
                            </span>
                        </div>

                        <div className="flex items-center gap-2 rounded-full text-[15px] leading-[16px] bg-[#F4F4F4] px-4 py-[7px]">
                            <span className="font-medium">Live</span>
                            <span className="font-semibold text-red-500">
                                ▼ 14%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Chart */}

                <div className="mt-4 h-[192px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis
                                dataKey="day"
                                tickLine={false}
                                axisLine={false}
                                tick={{ fontSize: 16 }}
                            />

                            <YAxis
                                orientation="right"
                                domain={[0, 320]}
                                ticks={[100, 200, 300]}
                                tickFormatter={(v) => `$${v}`}
                                axisLine={false}
                                tickLine={false}
                            />

                            <Bar
                                dataKey="value"
                                radius={[10, 10, 0, 0]}
                                barSize={16}
                            >
                                {data.map((item, index) => (
                                    <Cell
                                        key={index}
                                        fill={
                                            item.active
                                                ? "#32C85A"
                                                : "#BDEFCB"
                                        }
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            {/* Countries */}

            <div className="mt-2 flex items-center justify-center gap-5 rounded-[18px] border border-[#ECECEC] bg-[#FAFAFA] py-5">
                <div className="flex items-center gap-2">
                    <span className="text-xl">
                        <Image
                            src="/image/sg-logo.png"
                            alt=""
                            width={17}
                            height={17}
                            className="h-[17px] w-[17px] rounded-full"
                        />
                    </span>
                    <span className="text-[18px] leading-[26px] font-medium text-[#141617]">
                        <strong>90%</strong>{" "}
                        <span className="text-[#808B96] font-normal">SG</span>
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xl">
                        <Image
                            src="/image/us-logo.svg"
                            alt=""
                            width={17}
                            height={17}
                            className="h-[17px] w-[17px] rounded-full"
                        />
                    </span>
                    <span className="text-[18px] leading-[26px] font-medium text-[#141617]">
                        <strong>4%</strong>{" "}
                        <span className="text-[#808B96] font-normal">US</span>
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-[18px] leading-[26px] font-medium text-[#141617]">🇮🇳</span>
                    <span className="text-[18px] ">
                        <strong>2%</strong>{" "}
                        <span className="text-[#808B96] font-normals">IN</span>
                    </span>
                </div>
            </div>
        </div>
    );
}