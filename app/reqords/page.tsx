import Footer from "@/components/Footer";
import { Grid } from "@radix-ui/themes";

const Reqords = () => {
  return (
    <Grid rows="80px 1fr 65px" className="h-dvh">
      <div className="bg-primary flex items-center justify-between px-4 pt-4"></div>
      <div className="overflow-auto pb-2"></div>
      <Footer />
    </Grid>
  );
};

export default Reqords;
