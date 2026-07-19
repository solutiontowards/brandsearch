import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function BusinessInfoCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "rounded-[14px] border border-[#ECECEC] bg-white p-5 h-[220px]",
        className
      )}
    >
      {children}
    </div>
  );
}