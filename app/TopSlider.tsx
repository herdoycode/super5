"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Grid } from "@radix-ui/themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const TopSlider = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-dvw px-4">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="w-full border rounded-3xl h-[120px] bg-blue-100 dark:bg-gray-800">
                <Grid columns="2fr 3fr">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/phone.png"
                      width={80}
                      height={80}
                      alt="iphone"
                    />
                  </div>
                  <div className="pr-5 space-y-1">
                    <h2 className="text-[20px] text-primary">
                      Win IPhone Free
                    </h2>
                    <p className="text-[14px] font-semibold">
                      Join our Free contest & Predict 5 questions
                    </p>
                    <button className="text-[11px] w-full bg-primary p-1 rounded-md text-white">
                      LEARN HOW TO PLAY
                    </button>
                  </div>
                </Grid>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-1 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={
                i === current - 1
                  ? "w-2 h-2 rounded-full bg-primary"
                  : "w-2 h-2 rounded-full bg-secondary"
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
