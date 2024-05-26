import Footer from "@/components/Footer";
import { Grid } from "@radix-ui/themes";
import { BiErrorCircle } from "react-icons/bi";
import { MdSportsHandball } from "react-icons/md";

const ProfilePage = () => {
  return (
    <Grid rows="120px 1fr 65px" className="h-dvh bg-secondary">
      <div className="relative bg-primary rounded-b-3xl flex items-center justify-center flex-col text-white">
        <h1 className="font-semibold">RR vs KKR</h1>
        <p className="text-sm">Starts in 1D : 18H:28M:15S</p>

        <div className="absolute w-full bottom-[-25%] flex items-center justify-center px-6">
          <div className="flex items-center justify-between bg-white dark:bg-black w-full p-3 gap-3 rounded-3xl text-sm shadow-sm relative">
            <button className="py-2 px-5 rounded-3xl bg-primary text-white">
              1
            </button>
            <button className="py-2 px-5 rounded-3xl bg-orange-300 text-white">
              2
            </button>
            <button className="py-2 px-5 rounded-3xl bg-orange-300 text-white">
              3
            </button>
            <button className="py-2 px-5 rounded-3xl bg-orange-300 text-white">
              4
            </button>
            <button className="py-2 px-5 rounded-3xl bg-orange-300 text-white">
              5
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-auto pb-2 px-6 pt-[50px]">
        <h1 className="text-center text-xl text-primary font-bold mb-3">
          CSK Top Batter?
        </h1>
        <div className="flex items-center justify-between text-sm py-2">
          <p>Option</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BiErrorCircle /> Correct points
            </p>
            <p className="flex items-center gap-1">
              <BiErrorCircle /> Worn points
            </p>
          </div>
        </div>
        <div className="space-y-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2 py-3 rounded-2xl bg-white dark:bg-black shadow-sm"
            >
              <div className="flex items-center gap-3">
                <MdSportsHandball />
                <p className="text-sm font-semibold">Ruturaj Gaikwad</p>
              </div>

              <h3 className="text-green-500 font-bold">85</h3>
              <h3 className="text-primary font-bold">20</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Grid>
  );
};

export default ProfilePage;
