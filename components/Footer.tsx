"use client";
import { navItems } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentPath = usePathname();
  return (
    <div className="flex fixed bottom-0 w-full items-center justify-around h-[90px] rounded-t-3xl border">
      {navItems.map((item) => (
        <Link
          key={item.id}
          className={
            currentPath === item.path ? "text-2xl text-primary" : "text-2xl"
          }
          href={item.path}
        >
          <div className="flex items-center justify-center flex-col gap-1">
            {item.icon}
            <span className="text-sm"> {item.label} </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
