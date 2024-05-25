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
    <div className="w-dvw px-3">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-4 w-full border rounded-3xl">
                <Grid columns="2fr 3fr">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/phone.png"
                      width={80}
                      height={80}
                      alt="iphone"
                    />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-[22px] text-primary">
                      Win IPhone Free
                    </h2>
                    <p className="text-[14px]">
                      Join our Free contest & Predict 5 questions
                    </p>
                    <Button size="sm" className="text-[12px]">
                      LEARN HOW TO PLAY
                    </Button>
                  </div>
                </Grid>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={
                i === current - 1
                  ? "w-3 h-3 rounded-full bg-primary"
                  : "w-3 h-3 rounded-full bg-secondary"
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
