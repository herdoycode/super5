import { Grid } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
const HowTo = () => {
  return (
    <Grid rows="110px 2fr" className="h-dvh">
      <div className="bg-primary home-bg px-3 flex items-center text-white justify-center relative">
        <h1 className="text-xl font-semibold">How to Play</h1>
        <div className="absolute text-3xl left-3 top-9">
          <Link href="/profile">
            <IoIosArrowBack className="text-white" />
          </Link>
        </div>
      </div>
      <div className="p-3 overflow-auto">
        <div className="p-6 shadow-lg rounded-3xl border bg-white dark:bg-black">
          <h1 className="text-xl font-semibold mb-3">What is Super5</h1>
          <p className="text-sm">
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry&apos;s standard
          </p>
        </div>

        <div className="flex items-center justify-between mt-7">
          <div className="w-12 h-12 flex items-center justify-center font-semibold rounded-full shadow-md bg-white dark:bg-black">
            1
          </div>
          <div className="border-2 border-dashed border-primary flex-1"></div>
          <div className="w-12 h-12 flex items-center justify-center font-semibold rounded-full shadow-md bg-white dark:bg-black">
            2
          </div>
          <div className="border-2 border-dashed border-primary flex-1"></div>
          <div className="w-12 h-12 flex items-center justify-center font-semibold rounded-full shadow-md bg-white dark:bg-black">
            3
          </div>
          <div className="border-2 border-dashed border-primary flex-1"></div>
          <div className="w-12 h-12 flex items-center justify-center font-semibold rounded-full shadow-md bg-white dark:bg-black">
            4
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h1 className="font-semibold">Select Matches</h1>
          <h1 className="font-semibold ms-3">Make Your Prediction</h1>
          <h1 className="font-semibold ms-2">Join Free Contest</h1>
          <h1 className="font-semibold text-end">Enjoy Match</h1>
        </div>

        <h1 className="mt-8 text-xl font-semibold">1. Select a Match</h1>
        <div className="px-6 py-2">
          <p className="text-sm">
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry&apos;s standard.
          </p>
          <div className="flex items-center justify-center w-full py-5">
            <Image width={200} height={200} src="/howto.jpg" alt="howto" />
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default HowTo;
