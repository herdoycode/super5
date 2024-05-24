import Image from "next/image";
import React from "react";
import TopSlider from "./TopSlider";
import { Grid } from "@radix-ui/themes";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <Grid rows="100px 1fr 100px" className="h-dvh">
      <div className="bg-primary flex items-center justify-around py-8">
        <Image src="/logo.png" width={150} height={60} alt="logo" />
        <div className="flex border items-center justify-between gap-1 rounded-3xl text-xl text-white font-semibold py-1 px-2">
          <Image width={25} height={25} src="/coin.png" alt="coin" />
          <span>5045</span>
        </div>
      </div>
      <div className="overflow-auto">
        <div className="w-full flex items-center justify-center py-6">
          <TopSlider />
        </div>
        <div className="px-4">
          <h3 className="font-semibold">My Matches</h3>
          <div className="w-full flex items-center justify-center py-6">
            <TopSlider />
          </div>
        </div>
        <div className="px-4">
          <h3 className="font-semibold">Upcoming Matches</h3>
          <div className="w-full flex items-center justify-center py-6">
            <TopSlider />
          </div>
        </div>
      </div>
      <Footer />
    </Grid>
  );
};

export default Home;
