"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

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
    <div>
      <Carousel setApi={setApi} className="w-full max-w-sm px-3">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-6 bg-yellow-300 w-full border rounded-3xl">
                <div className="flex items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </div>
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
