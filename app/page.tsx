import Image from "next/image";
import React from "react";
import TopSlider from "./TopSlider";
import { Grid } from "@radix-ui/themes";
import Footer from "@/components/Footer";
import Link from "next/link";
import MyMatches from "./MyMatches";
import UpcomingMatch from "./UpcomingMatch";
import { ScrollArea } from "@/components/ui/scroll-area";

const Home = () => {
  return (
    <Grid rows="80px 1fr 65px" className="h-dvh">
      <div className="bg-primary flex items-center justify-between px-4 pt-4">
        <Image src="/logo.png" width={120} height={60} alt="logo" />
        <div className="flex border items-center justify-between gap-1 rounded-3xl text-xl text-white py-1 px-2">
          <Image width={25} height={25} src="/coin.png" alt="coin" />
          <span className="text-[18px]">5045</span>
        </div>
      </div>
      <div className="overflow-scroll pb-2">
        <div className="w-full flex items-center justify-center pt-2">
          <TopSlider />
        </div>
        <div className="px-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[15p]">My Matches</h3>
            <Link href="/" className="underline text-primary">
              View All
            </Link>
          </div>
          <div className="w-full flex items-center justify-center py-1">
            <MyMatches />
          </div>
        </div>
        <div className="px-4">
          <h3 className="font-semibold text-[15p]">Upcoming Matches</h3>
          <div className="w-full flex items-center justify-center py-1">
            <UpcomingMatch />
          </div>
        </div>
      </div>
      <Footer />
    </Grid>
  );
};

export default Home;
