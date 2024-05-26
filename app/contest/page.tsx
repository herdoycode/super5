import { Grid } from "@radix-ui/themes";
import Image from "next/image";

const ProfilePage = () => {
  return (
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
  );
};

export default ProfilePage;
