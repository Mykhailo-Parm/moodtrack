"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface SidebarButtonProps {
  to: string;
  children: React.ReactNode;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ to, children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={to}
      className={clsx(
        "w-full cursor-pointer hover:text-white hover:bg-nordic-purple-700 px-5 py-2 rounded-xl flex flex-row items-center gap-2",
        { "bg-nordic-purple-800 text-white": pathname === to }
      )}
    >
      {children}
    </Link>
  );
};

export default SidebarButton;
