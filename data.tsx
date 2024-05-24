"use client";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";

export const navItems = [
  { id: 1, icon: <AiFillHome />, path: "/", label: "Home" },
  { id: 2, icon: <MdSportsCricket />, path: "/matches", label: "My Matches" },
  { id: 3, icon: <FaGift />, path: "/reqords", label: "Rewords" },
  { id: 4, icon: <FaUserPlus />, path: "/refer", label: "Refer & Earn" },
  { id: 5, icon: <FaUser />, path: "/profile", label: "Profile" },
];
