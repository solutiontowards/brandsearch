"use client";

import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { menuItems } from "../../../data/sidebar";

import brandSearchLogo from "../../../../public/image/menu/Logo.png";
import profileImage from "../../../../public/image/menu/profile.png";

export default function Sidebar() {
  return (
    <aside
      className="
        sticky
        top-0
        left-0
        z-20
        h-screen
        w-[80px]
        shrink-0
        overflow-visible
        bg-[linear-gradient(180deg,#111326_0%,#29113B_100%)]
        py-5
        shadow-[8px_0_20px_rgba(0,0,0,.12)]
      "
    >
      <div className="flex h-full flex-col items-center justify-between">
        {/* ================= Logo + Menu ================= */}
        <div className="flex flex-col items-center gap-7">
          <Link href="/">
            <Image
              src={brandSearchLogo}
              alt="Logo"
              width={38}
              height={38}
              priority
            />
          </Link>

          <nav className="flex flex-col items-center gap-[20px] min-[1440px]:gap-[35px] [perspective:1000px]">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.label}
                {...item}
                isActive={item.href === "/dashboard"}
              />
            ))}
          </nav>
        </div>

        {/* ================= Profile ================= */}
        <div className="pb-2">
          <button className="transition-transform duration-300 hover:scale-105">
            <Image
              src={profileImage}
              alt="Profile"
              width={42}
              height={42}
              className="rounded-xl border border-white/20"
            />
          </button>
        </div>
      </div>
    </aside>
  );
}