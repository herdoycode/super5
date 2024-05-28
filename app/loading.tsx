import Footer from "@/components/Footer";
import { Skeleton } from "@radix-ui/themes";
import Image from "next/image";
import TopSlider from "./TopSlider";

const HomeLoading = () => {
  return (
    <>
      <div className="overflow-auto pb-16">
        <div className="home-bg flex bg-transparent items-center justify-between px-4 pb-2">
          <Image src="/logo.png" width={120} height={60} alt="logo" />
          <div className="flex border dark:border-white items-center justify-between gap-1 rounded-3xl text-xl text-white py-1 px-2">
            <Image width={25} height={25} src="/coin.png" alt="coin" />
            <span className="text-[18px]">5045</span>
          </div>
        </div>
        <div className="pb-2">
          <div className="w-full flex items-center justify-center pt-4">
            <TopSlider />
          </div>
          {/* <div className="px-4">
          <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[15p]">My Matches</h3>
          <Link href="/" className="underline text-primary">
              View All
              </Link>
              </div>
              <div className="w-full flex items-center justify-center py-1">
              <MyMatches />
              </div>
            </div> */}
          <div className="px-4">
            <h3 className="font-semibold text-[15p]">Upcoming Matches</h3>
            <div className="w-full flex items-center justify-center py-1">
              <div className="w-full flex flex-col items-center justify-center gap-6">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div className="w-full border overflow-hidden rounded-2xl">
                    <div className="bg-gradient-to-tr flex items-center justify-between py-1 bg-secondary px-3">
                      <Skeleton className="w-36 h-4" />
                      <Skeleton className="w-12 h-5" />
                    </div>
                    <div className="flex items-center justify-between py-4 px-3">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <p className="font-semibold">
                          <Skeleton className="h-4 w-10" />
                        </p>
                      </div>
                      <div className="flex items-center justify-center flex-col">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-4 w-8" />
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">
                          <Skeleton className="h-4 w-10" />
                        </p>
                        <Skeleton className="h-10 w-10 rounded-full" />
                      </div>
                    </div>
                    <div className="p-1 bg-orange-100 dark:bg-gray-800 text-center border-t">
                      <p className="text-[13px] font-semibold">
                        <Skeleton className="h-4 w-full" />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default HomeLoading;
