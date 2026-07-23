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

export default function RevenueCard() {
  return (
    <div className="rounded-[10px] bg-white pt-[25px] pb-[15px] px-6">
      {/* Heading */}

      <p className="text-[16px] min-[1660px]:text-[18px] leading-[25px] text-[#808B96]">
        Sale Revenue
      </p>

      <div className="mt-[3px] flex items-center gap-3">
        <h2 className="text-[20px] min-[1660px]:text-[24px] leading-[30px] min-[1660px]:leading-[34px] font-medium text-[#141617]">
          $197k - $229k/day
        </h2>

        <span className="text-[14px] leading-[22px] font-normal text-[#FF0004]">
          -200 (-3.4%)
        </span>
      </div>

      {/* Chips */}
      <div className="chartBg mt-5 bg-[url('/image/chartBg.png')] bg-cover bg-top bg-no-repeat">

        <div className="flex gap-[10px]">
          <div className="flex items-center gap-2 rounded-full text-[13px] min-[1660px]:text-[15px] leading-[14px] leading-[16px] bg-[#00C43717] px-4 py-[7px]">
            <span className="font-medium">7D</span>
            <span className="font-semibold text-[#4CAF50]">
              ▲ 14%
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full text-[13px] min-[1660px]:text-[15px] leading-[14px] leading-[16px] bg-[#F4F4F4] px-4 py-[7px]">
            <span className="font-medium">Live</span>
            <span className="font-semibold text-red-500">
              ▼ 14%
            </span>
          </div>
        </div>

        {/* Chart */}

        <div className="mt-4 h-[206px]">
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

      <div className="mt-2 flex items-center justify-center gap-5 rounded-[18px] border border-[#ECECEC] bg-[#FAFAFA] py-3 min-[1660px]:py-5">
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
          <span className="text-[16px] min-[1660px]:text-[18px] leading-[24px] min-[1660px]:leading-[26px] font-medium text-[#141617]">
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
          <span className="text-[16px] min-[1660px]:text-[18px] leading-[24px] min-[1660px]:leading-[26px] font-medium text-[#141617]">
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