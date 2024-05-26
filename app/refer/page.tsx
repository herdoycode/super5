import Footer from "@/components/Footer";
import { Grid } from "@radix-ui/themes";
import Image from "next/image";

const Refer = () => {
  return (
    <Grid rows="470px 1fr 65px" className="h-dvh">
      <div className="bg-primary px-4 pt-4 text-center flex items-center justify-center flex-col gap-2 text-white">
        <h1 className="text-xl font-bold">Refer your friends and Earn</h1>
        <div className="flex items-center justify-center w-full">
          <Image width={120} height={100} src="/gift.png" alt="gift" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image src="/coin.png" width={20} height={20} alt="coin" />
          <p className="text-sm font-semibold">100</p>
        </div>
        <p className="font-semibold">Super Coin</p>
        <p className="text-sm px-6">
          Your friend gets 100 super coins to sign up and, you get 100 super
          coins too every time!
        </p>

        <div className="p-5 bg-[#F68456] w-[280px] space-y-3 rounded-3xl">
          <div className="flex items-end justify-between">
            <p className="text-[12px]">Your referral code </p>
            <button className="bg-primary px-3 py-2 text-sm rounded-3xl">
              Copy Code
            </button>
          </div>
          <div className="flex items-end justify-between">
            <p className="font-semibold">ABCDG1234</p>
            <button className="bg-primary px-3 py-2 text-sm rounded-3xl">
              Copy Link
            </button>
          </div>
        </div>
        <p>Share your Referral code via</p>
      </div>
      <div className="overflow-auto pb-2"></div>
      <Footer />
    </Grid>
  );
};

export default Refer;
