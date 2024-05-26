import { Badge } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const UpcomingMatch = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      {Array.from({ length: 10 }).map((_, index) => (
        <Link href="/matches/1" key={index} className="w-full">
          <div className="w-full border overflow-hidden rounded-2xl">
            <div className="bg-gradient-to-tr flex items-center justify-between py-1 bg-secondary px-3">
              <p className="text-[12px] font-semibold">IPL - 20024 - T20</p>
              <button className="rounded-3xl text-12px text-white bg-primary px-3 py-[2px]">
                Joined
              </button>
            </div>
            <div className="flex items-center justify-between py-4 px-3">
              <div className="flex items-center gap-2">
                <Image src="/raj.png" width={40} height={40} alt="raj" />
                <p className="font-semibold">RR</p>
              </div>
              <div className="flex items-center justify-center flex-col">
                <Badge variant="soft">
                  Start In <span className="text-blue-500"> 4h 58min</span>
                </Badge>
                <p>8:00 pm</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">PBKS</p>
                <Image src="/pan.png" width={40} height={40} alt="raj" />
              </div>
            </div>
            <div className="p-1 bg-orange-100 dark:bg-gray-800 text-center border-t">
              <p className="text-[13px] font-semibold">WIN iPhone FREE</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UpcomingMatch;
