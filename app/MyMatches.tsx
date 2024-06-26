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

const MyMatches = () => {
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
              <div className="w-full border overflow-hidden rounded-2xl">
                <div className="bg-gradient-to-tr flex items-center justify-between py-1 bg-secondary px-3 text-[14px]">
                  <p>IPL-20024-T20</p>
                  <div className="flex items-center gap-2">
                    <Image width={20} height={20} src="/coin.png" alt="coin" />
                    <p className="text-primary">You Won 10 Super Coin</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1 px-3">
                  <div className="flex items-center gap-2">
                    <Image src="/raj.png" width={40} height={40} alt="raj" />
                    <p className="font-semibold">RR</p>
                  </div>
                  <Button variant="secondary">Completed</Button>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">PBKS</p>
                    <Image src="/pan.png" width={40} height={40} alt="raj" />
                  </div>
                </div>
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

export default MyMatches;
