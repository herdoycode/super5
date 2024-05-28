import Footer from "@/components/Footer";
import Image from "next/image";
import TopSlider from "./TopSlider";
import UpcomingMatch from "./UpcomingMatch";

const Home = () => {
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
              <UpcomingMatch />
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

export default Home;
