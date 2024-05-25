import React from "react";
import { Avatar, Grid } from "@radix-ui/themes";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <Grid rows="1fr 100px" className="h-dvh bg-secondary">
      <div className="bg-primary flex items-center justify-around h-[180px] relative">
        <div className="text-3xl cursor-pointer absolute left-10 mb-10 text-white">
          <Link href="/">
            <MdArrowBackIos />
          </Link>
        </div>
        <div className="overflow-auto px-3 absolute bottom-[-75px]">
          <div className="rounded-3xl overflow-hidden bg-white flex items-center justify-between px-6 gap-4 h-[150px]">
            <Avatar src="/profile.jpg" radius="full" size="8" fallback="user" />
            <div className="flex-1">
              <h2 className="text-2xl mb-3">Devid Smith</h2>
              <div className="flex items-center gap-1 text-xl">
                <Image
                  objectFit="cover"
                  src="/coin.png"
                  width={20}
                  height={20}
                  alt="coin"
                />
                <p className="text-blue-500">SuperCoins: 5058</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Grid>
  );
};

export default ProfilePage;
