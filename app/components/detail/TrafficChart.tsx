"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Image from "next/image";

const data = [
  { day: "Jun 1", value: 260 },
  { day: "", value: 255 },
  { day: "", value: 270 },
  { day: "", value: 240 },
  { day: "", value: 245 },
  { day: "", value: 225 },
  { day: "Jun 8", value: 255 },
  { day: "", value: 250 },
  { day: "", value: 290 },
  { day: "", value: 265 },
  { day: "", value: 270 },
  { day: "", value: 225 },
  { day: "", value: 230 },
  { day: "", value: 210 },
  { day: "Jun 15", value: 230 },
  { day: "", value: 270 },
  { day: "", value: 235 },
  { day: "", value: 245 },
  { day: "", value: 275 },
  { day: "", value: 220 },
  { day: "", value: 230 },
  { day: "", value: 225 },
  { day: "", value: 245 },
  { day: "Jun 30", value: 215 },
];

export default function TrafficChart() {
  return (
    <div className="rounded-[10px] bg-white px-[24px] pt-[22px] pb-[15px]">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <p className="text-[18px] font-normal leading-[26px] text-[#808B96]">
            Monthly traffic
          </p>

          <div className="mt-2 flex items-center gap-3">
            <h2 className="text-[24px] leading-[34px] font-medium text-[#141617]">
              3.8M
            </h2>

            <span className="text-[18px] leading-[32px] font-semibold text-[#38CA6E]">
              ▲10%
            </span>
          </div>
        </div>

        {/* Tabs */}

        <div className="flex rounded-full bg-[#F1F1F1] h-[30px] max-w-[162px] px-[4px] py-[3px]">
          <button className="rounded-full bg-[#ED4B72] text-[14px] leading-5 font-normal px-3 py-[2px] text-white">
            30D
          </button>

          <button className="text-[14px] leading-5 font-normal px-2 py-[2px] text-[#060317]">90D</button>

          <button className="text-[14px] leading-5 font-normal px-2 py-[2px] text-[#060317]">1Year</button>
        </div>
      </div>

      {/* Chart */}

      <div className="chart-bg mt-[35.67px] h-[236px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="trafficGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#5FD36A"
                  stopOpacity={0.25}
                />

                <stop
                  offset="100%"
                  stopColor="#5FD36A"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
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

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#43B04A"
              strokeWidth={3}
              fill="url(#trafficGradient)"
              activeDot={{
                r: 8,
                fill: "#43B04A",
                stroke: "#D9F7DD",
                strokeWidth: 5,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Countries */}

      {/* <div className="mt-6 flex items-center justify-center gap-12 rounded-[18px] border border-[#ECECEC] bg-[#FAFAFA] py-5">
        <Country flag="🇸🇬" percent="90%" code="SG" />
        <Country flag="🇺🇸" percent="4%" code="US" />
        <Country flag="🇮🇳" percent="2%" code="IN" />
      </div> */}

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

function Country({
  flag,
  percent,
  code,
}: {
  flag: string;
  percent: string;
  code: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xl">{flag}</span>

      <span className="text-[18px]">
        <strong>{percent}</strong>{" "}
        <span className="text-[#7B8794]">{code}</span>
      </span>
    </div>
  );
}