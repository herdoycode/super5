import { Grid } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "./Navbar";
import Link from "next/link";

const ProfilePage = ({ children }: PropsWithChildren) => {
  return (
    <Grid rows="120px 1fr" className="h-dvh bg-secondary">
      <div className="relative bg-primary rounded-b-3xl flex items-center justify-start pt-6 flex-col text-white">
        <h1 className="text-xl font-semibold">RR vs KKR</h1>
        <p className="text-sm">Starts in 1D : 18H:28M:15S</p>
        <div className="absolute text-3xl left-3 top-9">
          <Link href="/">
            <IoIosArrowBack />
          </Link>
        </div>
        <div className="absolute w-full bottom-[-25%] flex items-center justify-center px-3">
          <Navbar />
        </div>
      </div>
      {children}
    </Grid>
  );
};

export default ProfilePage;
