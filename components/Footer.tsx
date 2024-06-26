"use client";
import { navItems } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentPath = usePathname();
  return (
    <div className="flex w-full items-center justify-around rounded-t-2xl border bg-secondary py-2">
      {navItems.map((item) => (
        <Link
          key={item.id}
          className={currentPath === item.path ? "text-primary" : ""}
          href={item.path}
        >
          <div className="flex items-center justify-center flex-col text-[24px]">
            {item.icon}
            <span className="text-[11px]"> {item.label} </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
