import { Badge } from "@radix-ui/themes";
import Image from "next/image";

const UpcomingMatch = () => {
  return (
    <div className="space-y-6 w-full">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="max-w-[390px] border overflow-hidden rounded-2xl"
        >
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
          <div className="p-1 bg-orange-100 text-center border-t">
            <p className="text-[13px] font-semibold">WIN iPhone FREE</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingMatch;
