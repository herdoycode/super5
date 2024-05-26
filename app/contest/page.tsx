import Footer from "@/components/Footer";
import { Grid } from "@radix-ui/themes";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <Grid rows="120px 1fr" className="h-dvh bg-secondary">
      <div className="relative bg-primary rounded-b-3xl flex items-center justify-center flex-col text-white">
        <h1 className="font-semibold">RR vs KKR</h1>
        <p className="text-sm">Starts in 1D : 18H:28M:15S</p>

        <div className="absolute w-full bottom-[-25%] flex items-center justify-center px-3">
          <div className="flex items-center justify-between bg-white dark:bg-black w-full p-3 gap-3 rounded-3xl text-sm shadow-sm relative">
            <button className="py-1 text-[13px] px-2 rounded-3xl bg-primary text-white">
              Contest
            </button>
            <button className="py-1 text-[13px] px-2 rounded-3xl bg-orange-300 text-white">
              My Picks
            </button>
            <button className="py-1 text-[13px] px-2 rounded-3xl bg-orange-300 text-white">
              Leaderboard
            </button>
            <button className="py-1 text-[13px] px-3 rounded-3xl bg-orange-300 text-white">
              Rules
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-auto pb-2 px-6 pt-[50px]">
        <div className="bg-white dark:bg-black p-5 rounded-2xl">
          <div className="w-full flex items-center py-5">
            <div className="flex-1">
              <h1 className="text-xl font-semibold">Win iPhone 15</h1>
              <p className="text-sm">Answer All 5 Correct*</p>
            </div>
            <div className="flex-1">
              <Image
                width={400}
                height={320}
                src="/iphone.png"
                className="w-full object-cover"
                alt="iphone"
              />
            </div>
          </div>
          <button className="w-full bg-green-500 text-white rounded-3xl py-2">
            Join 10 Super coins
          </button>
        </div>

        <div className=" bg-white dark:bg-black mt-6 p-3 rounded-2xl">
          <div className="flex items-center justify-between py-2 border-b font-semibold">
            <p>Rank</p>
            <p>Warning</p>
          </div>
          <div>
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2 py-3 border-b shadow-sm"
              >
                <p className="text-sm"> {i + 1} </p>
                <h3>500 Supercoins</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default ProfilePage;
