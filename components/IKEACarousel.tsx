"use client";

import { CarouselCard } from "@/components/CarouselCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { CardInfo } from "@/lib/types";
import { VerticalCard } from "@/components/VerticalCard";

export const IKEACarousel = ({ cardInfo }: { cardInfo: CardInfo[] }) => {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(cardInfo.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current === cardInfo.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev === cardInfo.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => {
          if (interval) {
            clearInterval(interval);
          }
        };
      }, [cardInfo.length]);

  return (
    <div className={"flex flex-col"}>
      <div className={"overflow-hidden relative"}>
        <div
          className={`flex flex-row transition ${cardInfo[0].type === "vertical" ? "gap-4" : null} ease-out duration-500`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {cardInfo.map((info, index) => {
            return info.type === "horizontal" ? (
              <CarouselCard key={index} cardInfo={info} />
            ) : (
              <VerticalCard key={index} cardInfo={info} />
            );
          })}
        </div>
        <div
          className={
            "absolute top-0 flex justify-between items-center h-full w-full"
          }
        >
          <Button
            size={"icon"}
            className={"rounded-full hover:cursor-pointer ml-2"}
            onClick={previousSlide}
          >
            <ChevronLeft />
          </Button>
          <Button
            size={"icon"}
            className={"rounded-full hover:cursor-pointer mr-2"}
            onClick={nextSlide}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className={"mt-1 justify-center items-center w-full flex "}>
        {cardInfo.map((_, index) => (
          <div
            onClick={() => {
              setCurrent(index);
            }}
            key={`square` + index}
            className={`w-full h-0.5 hover:cursor-pointer rounded-lg transition ease-in duration-400 ${index === current ? "bg-black" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
