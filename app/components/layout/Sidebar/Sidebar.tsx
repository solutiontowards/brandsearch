"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { menuItems, supportItems } from "../../../data/sidebar";
import brandSearchLogo from "../../../public/image/brandsearchlogo.png";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`left-sidebar sticky left-0 top-0 flex h-full min-h-screen flex-col justify-between overflow-hidden pb-10 pt-10 text-white shadow-[8px_0px_21px_0px_#878C9D14] transition-all duration-300 ${isCollapsed ? "w-24 px-3" : "w-77.75 px-7"}`}>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 flex items-center justify-between px-1">
            {!isCollapsed && (
              <Link href="/" className="flex items-start justify-start">
                <div className="flex h-auto w-auto items-center justify-start overflow-visible bg-transparent shadow-none">
                  <Image
                    src={brandSearchLogo}
                    alt="BrandSearch logo"
                    width={174}
                    height={174}
                    className="h-auto w-auto object-contain"
                  />
                </div>
              </Link>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-white"
              aria-label="Toggle sidebar"
            >
              {isCollapsed ? (
                <ChevronRight size={20} />
              ) : (
                <ChevronLeft size={20} />
              )}
            </button>
          </div>

          {!isCollapsed && (
            <div className="relative mb-10 mt-13 px-4 text-[14px] font-normal uppercase leading-5 text-[#989EAD]">
              MENU
              <span className="absolute top-1/2 left-[60px] h-px w-[25px] -translate-y-1/2 bg-[#989EAD]"></span>
            </div>
          )}

          <nav className="space-y-[10px]">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.label}
                label={item.label}
                href={item.href}
                image={item.image}
                children={item.children}
                isActive={item.href === "/dashboard"}
                isCollapsed={isCollapsed}
              />
            ))}
          </nav>
        </div>

        <div className="mt-[42px] border-t border-slate-700 pt-[50px]">
          {!isCollapsed && (
            <div className="relative mb-[30px] px-4 text-[14px] font-normal uppercase leading-[20px] text-[#989EAD]">
              Support
              <span className="absolute top-1/2 left-[90px] h-px w-[25px] -translate-y-1/2 bg-[#989EAD]" />
            </div>
          )}
          <div className="space-y-[10px]">
            {supportItems.map((item) => (
              <SidebarItem
                key={item.label}
                label={item.label}
                href={item.href}
                icon={item.icon}
                isCollapsed={isCollapsed}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
