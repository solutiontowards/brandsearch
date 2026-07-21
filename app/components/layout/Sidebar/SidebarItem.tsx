"use client";

import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export interface SidebarItemProps {
  label: string;
  href: string;
  image?: string | StaticImageData;
  description?: string;
  shortcut?: string;
  isActive?: boolean;
  children?: SidebarItemProps[];
}

export default function SidebarItem({
  label,
  href,
  image,
  description,
  shortcut,
  isActive = false,
  children,
}: SidebarItemProps) {

  const buttonRef = useRef<HTMLDivElement>(null);

  const popupRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const updatePosition = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    setPosition({
      left: rect.right + 18,
      top: rect.top + rect.height / 2,
    });
  };

  useLayoutEffect(() => {
    if (!isHovered) return;

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isHovered]);
  return (
    <>
      <div
        ref={buttonRef}
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          // Delay so the cursor can move from the icon to the popup
          setTimeout(() => {
            if (!popupRef.current?.matches(":hover")) {
              setIsHovered(false);
            }
          }, 80);
        }}
      >
        <Link href={href}>
          <motion.div
            whileHover={{
              rotate: 10,
              scale: 1.08,
              y: -2,
            }}
            transition={{
              type: "spring",
              stiffness: 450,
              damping: 18,
            }}
            className={clsx(
              "flex h-[35px] w-[35px] min-[1440px]:h-[46px] min-[1440px]:w-[46px] items-center justify-center rounded-[7.42px] transition-colors",
              isActive
                ? "bg-[#342C3B] backdrop-blur-[42px]"
                : "hover:bg-[#3A3056]"
            )}
          >
            {image && (
              <motion.div
                whileHover={{
                  rotateY: 18,
                  rotateZ: 10,
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                }}
              >
                <Image
                  src={image}
                  alt={label}
                  width={27}
                  height={27}
                  className="object-contain"
                />
              </motion.div>
            )}
          </motion.div>
        </Link>
      </div>

      {/* Portal popup will come here in Part 3 */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isHovered && (
              <motion.div
                ref={popupRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{
                  opacity: 0,
                  x: -15,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -15,
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 28,
                }}
                style={{
                  position: "fixed",
                  left: position.left,
                  top: position.top,
                  transform: "translateY(-50%)",
                  zIndex: 999999,
                }}
                className="
            w-[320px]
            overflow-hidden
            rounded-[18px]
            border
            border-white/10
            bg-[#161B2E]/95
            backdrop-blur-[42px]
            shadow-[0_20px_80px_rgba(0,0,0,.45)]
          "
              >
                {/* Arrow */}
                <div
                  className="
              absolute
              -left-[6px]
              top-1/2
              h-3
              w-3
              -translate-y-1/2
              rotate-45
              border-l
              border-b
              border-white/10
              bg-[#161B2E]
            "
                />

                {/* Header */}
                <div className="border-b border-white/10 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-semibold text-white">
                      {label}
                    </h3>

                    {shortcut && (
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-[#C7CBD7]">
                        {shortcut}
                      </span>
                    )}
                  </div>

                  {description && (
                    <p className="mt-2 text-[13px] leading-5 text-[#9DA3B5]">
                      {description}
                    </p>
                  )}
                </div>

                {/* ===== Submenu starts in Part 4 ===== */}
                {children && children.length > 0 ? (
                  <div className="py-3">
                    {children.map((child, index) => (
                      <motion.div
                        key={child.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 400,
                          damping: 28,
                        }}
                      >
                        <Link
                          href={child.href}
                          className="
            mx-2
            mb-1
            flex
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            transition-all
            duration-300
            hover:bg-white/10
          "
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              rotate: 20,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                            }}
                            className="h-2.5 w-2.5 rounded-full bg-[#7C5CFC]"
                          />

                          <span className="flex-1 text-[14px] font-medium text-[#D8DBE7]">
                            {child.label}
                          </span>

                          <motion.svg
                            whileHover={{ x: 3 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M9 6L15 12L9 18"
                              stroke="#8F96AA"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="px-6 py-5 text-[14px] text-[#9DA3B5]">
                    Open {label}
                  </div>
                )}

              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}