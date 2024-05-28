import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

const Refer = () => {
  return (
    <div className="pb-16">
      <div className="bg-refer px-4 pb-7 pt-4 text-center flex items-center justify-center flex-col gap-2 text-white">
        <h1 className="text-xl font-bold">Refer your friends and Earn</h1>
        <div className="flex items-center justify-center w-full">
          <Image width={120} height={100} src="/gift.png" alt="gift" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image src="/coin.png" width={20} height={20} alt="coin" />
          <p className="text-sm font-semibold">100</p>
        </div>
        <p className="font-semibold">Super Coin</p>
        <p className="text-sm px-6">
          Your friend gets 100 super coins to sign up and, you get 100 super
          coins too every time!
        </p>

        <div className="p-4 bg-[#ffa07a] w-[280px] space-y-3 rounded-3xl border-dashed border-2 border-white">
          <div className="flex items-end justify-between">
            <p className="text-[12px]">Your referral code </p>
            <button className="bg-primary px-3 py-2 text-sm rounded-3xl">
              Copy Code
            </button>
          </div>
          <div className="flex items-end justify-between">
            <p className="font-semibold">ABCDG1234</p>
            <button className="bg-primary px-3 py-2 text-sm rounded-3xl">
              Copy Link
            </button>
          </div>
        </div>
        <p>Share your Referral code via</p>
      </div>
      <div className="overflow-auto pb-2 py-4 px-3">
        <div className="bg-white dark:bg-black p-4 text-sm border rounded-3xl">
          <p className="text-center font-semibold">
            Were you referred by your friend?
          </p>
          <form className="w-full my-3 flex flex-col">
            <label htmlFor="i">Enter referral code</label>
            <input type="text" className="outline-none border-b" />
          </form>
          <div className="flex items-center gap-4">
            <Button>Verify</Button>
            <Button variant="secondary">Redeem 50 coins</Button>
          </div>
        </div>
        <div className="flex items-center justify-between py-8">
          <Button className="bg-green-500 shadow-md">
            <FaWhatsapp className="text-xl mr-1" /> Invite Via WhatsApp
          </Button>
          <Button variant="secondary" className="shadow-md">
            <IoShareSocialOutline className="text-xl mr-1" /> Other Options
          </Button>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How it work?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Refer;
