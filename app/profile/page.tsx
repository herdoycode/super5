import Footer from "@/components/Footer";
import ThemeToggler from "@/components/ThemeToggler";
import { Avatar } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { BiTransfer } from "react-icons/bi";
import { BsWechat } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import { FaFileShield, FaGear } from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { IoPlay } from "react-icons/io5";

const ProfilePage = () => {
  return (
    <div className="pb-16">
      <div className="relative bg-primary rounded-b-3xl h-[110px]">
        <div className="absolute w-full bottom-[-50%] flex items-center justify-center px-6">
          <div className="flex items-center bg-white dark:bg-black w-full p-3 gap-3 rounded-3xl shadow-sm relative">
            <Avatar radius="full" src="/profile.jpg" size="7" fallback="U" />
            <div className="space-y-1">
              <h2 className="font-semibold">Devid Smith</h2>
              <div className="flex items-center gap-2">
                <Image src="/coin.png" width={20} height={20} alt="coin" />{" "}
                <p className="text-sm text-blue-400 font-semibold">
                  SuperCoins : 5913.5
                </p>
              </div>
              <div className="absolute top-2 right-3">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-auto pb-2 px-6 pt-[65px]">
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded-2xl bg-white dark:bg-black shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:text-black rounded-md text-xl">
                <FaGear />
              </div>
              <p className="text-sm">My info & Settings</p>
            </div>

            <IoIosArrowForward className="text-xl" />
          </div>
          <div className="flex items-center justify-between p-2 rounded-2xl bg-white dark:bg-black shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:text-black rounded-md text-xl">
                <BiTransfer />
              </div>
              <p className="text-sm">Transactions</p>
            </div>

            <IoIosArrowForward className="text-xl" />
          </div>
          <div className="flex items-center justify-between p-2 rounded-2xl bg-white dark:bg-black shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:text-black rounded-md text-xl">
                <FaHeadset />
              </div>
              <p className="text-sm">Help and Support</p>
            </div>

            <IoIosArrowForward className="text-xl" />
          </div>
          <div className="flex items-center justify-between p-2 rounded-2xl bg-white dark:bg-black shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:text-black rounded-md text-xl">
                <IoPlay />
              </div>
              <Link href="/profile/howto">
                <p className="text-sm">How to Play</p>
              </Link>
            </div>
            <IoIosArrowForward className="text-xl" />
          </div>
          <div className="flex items-center justify-between p-2 rounded-2xl bg-white dark:bg-black shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:text-black rounded-md text-xl">
                <BsWechat />
              </div>
              <p className="text-sm">FAQs</p>
            </div>

            <IoIosArrowForward className="text-xl" />
          </div>
          <div className="flex items-center justify-between p-2 rounded-2xl bg-white dark:bg-black shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:text-black rounded-md text-xl">
                <FaFileShield />
              </div>
              <p className="text-sm">Privacy Policy</p>
            </div>

            <IoIosArrowForward className="text-xl" />
          </div>
          <div className="flex items-center justify-between p-2 rounded-2xl bg-white dark:bg-black shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:text-black rounded-md text-xl">
                <HiClipboardDocumentList />
              </div>
              <p className="text-sm">Terms and Conditions</p>
            </div>

            <IoIosArrowForward className="text-xl" />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
