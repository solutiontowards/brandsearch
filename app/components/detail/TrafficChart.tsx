"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
    <div className="rounded-[22px] border border-[#ECECEC] bg-white p-8">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <p className="text-[18px] text-[#7B8794]">
            Monthly traffic
          </p>

          <div className="mt-2 flex items-center gap-3">
            <h2 className="text-[42px] font-semibold">
              3.8M
            </h2>

            <span className="text-[18px] font-semibold text-[#3BC25D]">
              ▲10%
            </span>
          </div>
        </div>

        {/* Tabs */}

        <div className="flex rounded-full bg-[#F1F1F3] p-1">
          <button className="rounded-full bg-[#EF4B73] px-5 py-2 text-white">
            30D
          </button>

          <button className="px-5">90D</button>

          <button className="px-5">1Year</button>
        </div>
      </div>

      {/* Chart */}

      <div className="chart-bg mt-8 h-[340px]">
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

      <div className="mt-6 flex items-center justify-center gap-12 rounded-[18px] border border-[#ECECEC] bg-[#FAFAFA] py-5">
        <Country flag="🇸🇬" percent="90%" code="SG" />
        <Country flag="🇺🇸" percent="4%" code="US" />
        <Country flag="🇮🇳" percent="2%" code="IN" />
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