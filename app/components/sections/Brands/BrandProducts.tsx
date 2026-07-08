import Image from "next/image";
import { Play, Star, Video } from "lucide-react";
import { trendingProducts } from "@/app/data/trendingProducts";

const countryFlags: Record<string, string> = {
  Sweden: "🇸🇪",
  Finland: "🇫🇮",
  Germany: "🇩🇪",
  USA: "🇺🇸",
};

const trafficTrendValues = [2, 4, 3, 5, 4, 6, 5];

export default function BrandProducts() {
  return (
    <section className="mt-8">
      <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm">
        <div className="bg-[#25C85B] px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white">
          <div className="grid grid-cols-[0.5fr_2.6fr_1.1fr_1.6fr_1fr_1.1fr_0.8fr] items-center gap-4">
            <span>#</span>
            <span>Products Info</span>
            <span>Country</span>
            <span>Shop</span>
            <span>Unit Sold</span>
            <span>Traffic</span>
            <span>Traffic Trend</span>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          {trendingProducts.map((product, index) => (
            <div key={product.id} className="grid grid-cols-[0.5fr_2.6fr_1.1fr_1.6fr_1fr_1.1fr_0.8fr] items-center gap-4 px-6 py-5 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111827] shadow-sm">
                  {index + 1}
                </span>
                <Star size={16} className="text-[#10B981]" />
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-[22px] bg-slate-100">
                  <Image src={product.image} alt={product.productName} fill sizes="100%" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#141617] truncate">
                    {product.productName}
                  </p>
                  <p className="mt-1 text-xs text-[#6B7280]">
                    Price: {product.priceRange}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-[#141617]">
                <span className="text-xl">{countryFlags[product.country] ?? "🌐"}</span>
                <span>{product.country}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={product.avatarSrc ?? "/image/trending-logo.png"}
                    alt={product.store}
                    fill
                    sizes="100%"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#141617] truncate">
                    {product.store}
                  </p>
                  <p className="mt-1 text-xs text-[#6B7280] truncate">
                    [NEW] {product.category} · Unit Sold: {product.unitSold}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#141617]">{product.unitSold}</p>
                <p className="mt-1 text-xs text-[#6B7280]">avg revenue</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#141617]">{product.traffic}</p>
                <p className="mt-1 text-xs text-[#6B7280]">
                  {product.platformMetrics[0]?.value ?? "0k"} apr traffic
                </p>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex h-12 items-end gap-1 overflow-hidden rounded-[18px] bg-[#EEF2FF] px-2 py-2">
                  {trafficTrendValues.map((value, sparkIndex) => (
                    <span
                      key={sparkIndex}
                      className="inline-block rounded-full bg-[#4338CA]"
                      style={{ width: 6, height: `${value * 5 + 10}px` }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#F7ECFF] text-[#6D28D9] shadow-sm transition hover:bg-[#EDE6FF]">
                    <Play size={16} />
                  </button>
                  <button className="inline-flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#FFF7ED] text-[#C2410C] shadow-sm transition hover:bg-[#FFEDD5]">
                    <Video size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-slate-200 bg-[#F8FAFC] px-6 py-4">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] border border-slate-300 text-slate-500 transition hover:bg-white">
            «
          </button>
          <button className="inline-flex h-10 min-w-[38px] items-center justify-center rounded-[14px] bg-white px-3 text-sm font-semibold text-[#111827] shadow-sm">
            1
          </button>
          {[2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="inline-flex h-10 min-w-[38px] items-center justify-center rounded-[14px] bg-white px-3 text-sm font-medium text-[#6B7280] transition hover:bg-slate-100"
            >
              {page}
            </button>
          ))}
          <span className="text-sm text-[#6B7280]">...</span>
          <button className="inline-flex h-10 min-w-[38px] items-center justify-center rounded-[14px] bg-white px-3 text-sm font-medium text-[#6B7280] transition hover:bg-slate-100">
            10
          </button>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] border border-slate-300 text-slate-500 transition hover:bg-white">
            »
          </button>
        </div>
      </div>
    </section>
  );
}
