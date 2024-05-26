"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, label: "Contest", path: "/contest" },
  { id: 2, label: "My Picks", path: "/contest/picks" },
  { id: 3, label: "Leaderboard", path: "/contest/leaderboard" },
  { id: 4, label: "Rules", path: "/contest/rules" },
];

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div className="flex items-center justify-between bg-white dark:bg-black w-full p-3 gap-3 rounded-3xl text-sm shadow-sm relative">
      {navLinks.map((link) => (
        <Link key={link.id} href={link.path}>
          <button
            className={
              link.path === currentPath
                ? "py-1 text-[14px] px-2 rounded-3xl bg-primary text-white"
                : "py-1 text-[14px] px-2 rounded-3xl bg-orange-300 text-white"
            }
          >
            {link.label}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
