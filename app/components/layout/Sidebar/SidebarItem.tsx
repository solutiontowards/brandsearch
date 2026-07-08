import clsx from "clsx";
import { CircleHelp, LayoutGrid, LogOut, Settings } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export interface SidebarItemProps {
  label: string;
  href: string;
  image?: string | StaticImageData;
  icon?: "settings" | "help" | "logout";
  isActive?: boolean;
  badge?: number;
  isCollapsed?: boolean;
  children?: SidebarItemProps[];
}

export default function SidebarItem({
  label,
  href,
  image,
  icon,
  isActive = false,
  badge,
  isCollapsed = false,
  children,
}: SidebarItemProps) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className={clsx(
          "flex items-center rounded-lg text-[16px] font-medium leading-[20px] tracking-normal transition-all duration-200",
          isCollapsed ? "justify-center px-3 py-3" : "px-4 py-3 gap-[14px]",
          isActive
            ? "rounded-[10px] bg-[#ffffff61] text-white font-bold shadow-md backdrop-blur-[54px]"
            : "text-[#FFFFFFDB] hover:bg-white/10 hover:text-white"
        )}
        title={isCollapsed ? label : undefined}
      >
        <div className="flex h-13.75 w-13.75 items-center justify-center flex-shrink-0">
          {icon ? (
            <div className="flex h-13.75 w-13.75 items-center justify-center text-white">
              {icon === "settings" && <Settings size={24} />}
              {icon === "help" && <CircleHelp size={24} />}
              {icon === "logout" && <LogOut size={24} />}
            </div>
          ) : image ? (
            <Image
              src={image}
              alt={label}
              width={55}
              height={55}
              className="h-13.75 w-13.75 object-contain"
            />
          ) : (
            <LayoutGrid size={24} />
          )}
        </div>

        {!isCollapsed && (
          <>
            <span className="flex-1">{label}</span>

            {badge !== undefined && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs text-white">
                {badge}
              </span>
            )}
          </>
        )}

        {isCollapsed && (
          <div className="pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap rounded-md bg-slate-700 px-3 py-1.5 text-sm text-white shadow-lg group-hover:block">
            {label}
          </div>
        )}
      </Link>

      {children && children.length > 0 && !isCollapsed && (
        <div className="pointer-events-none absolute left-full top-0 z-20 hidden min-w-[220px] rounded-[14px] border border-white/10 bg-slate-950/95 p-2 shadow-xl transition-all duration-200 group-hover:block group-hover:pointer-events-auto">
          {children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="block rounded-[10px] px-4 py-3 text-sm text-[#E1E3E8] transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}