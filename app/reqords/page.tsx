import Footer from "@/components/Footer";
import { Grid } from "@radix-ui/themes";

const Reqords = () => {
  return (
    <Grid rows="100px 1fr 100px" className="h-dvh">
      <div className="bg-primary flex items-center justify-around py-8"></div>
      <div className="overflow-auto"></div>
      <Footer />
    </Grid>
  );
};

export default Reqords;
