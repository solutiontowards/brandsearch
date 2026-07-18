"use client";

import Image from "next/image";
import {
  BadgeDollarSign,
  CalendarDays,
  Star,
  Store,
  Users,
  ShoppingBag,
} from "lucide-react";

export default function ShopInfoCard() {
  return (
    <div className="rounded-[10px] w-[614px] bg-white pt-[21px] pb-[18px] ps-[25px] pe-[24px] shadow-[0px_6px_18px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[5px] border border-[#00000033]">
            <Image
              src="/image/shopImg.png"
              alt="Shop"
              width={28}
              height={28}
              className="object-cover rounded-[5px]"
            />
          </div>
          <h2 className="text-[16px] leading-[20px] font-medium text-[#060317]">
            About Dr.Melaxin Shop
          </h2>
        </div>

        <div className="flex h-[32px] items-center rounded-[5px] bg-[#ED4B7217] px-[14px] py-[6px]">
          <ShoppingBag
            size={14}
            className="text-[#060317] me-[9px]"
          />

          <span className="text-[14px] leading-[20px] font-normal text-[#3C3D51]">
            Total Item Sold: 
          </span>

          <span className="text-[16px] leading-[20px] font-medium text-[#060317]">
             20.1k
          </span>
        </div>
      </div>

      <div className="mt-[18px] border-t border-[#808B9621]"></div>

      {/* Rows */}
      <div className="mt-[11px] space-y-[10px]">
        <InfoRow
          icon={<Store size={22} />}
          label="Shop Rating"
          value={
            <div className="flex items-center gap-1 rounded-full bg-[#EEF2FF] px-5 py-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  fill="#3B5FFF"
                  className="text-[#3B5FFF]"
                />
              ))}
            </div>
          }
        />

        <InfoRow
          icon={<BadgeDollarSign size={22} />}
          label="Avg Price"
          value={
            <span className="text-[18px] leading-[20px] font-bold text-[#000000]">
              USD $127K
            </span>
          }
        />

        <InfoRow
          icon={<CalendarDays size={22} />}
          label="Created Date"
          value={
            <span className="text-[18px] leading-[20px] font-bold text-[#000000]">
              Jun 09, 2026
            </span>
          }
        />

        <InfoRow
          icon={<Users size={22} />}
          label="Total Afilate Creator"
          value={
            <span className="text-[18px] leading-[20px] font-bold text-[#000000]">
              37 P
            </span>
          }
        />
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex h-[47px] items-center justify-between rounded-[10px] border border-[#F5F5F5] bg-[#FAFAFA] px-5 py-3">
      <div className="flex items-center gap-4">
        <div className="text-[#141617]">{icon}</div>

        <span className="text-[16px] leading-[20px] font-400 text-[#3C3D51]">
          {label}
        </span>
      </div>

      {value}
    </div>
  );
}