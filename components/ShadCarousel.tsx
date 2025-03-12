"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardInfo } from "@/lib/types";
import { VerticalCard } from "@/components/VerticalCard";

export const ShadCarousel = ({ cardInfo }: { cardInfo: CardInfo[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {cardInfo.map((info, index) => (
          <CarouselItem key={index} className={"lg:basis-1/3 basis-1/2"}>
            <VerticalCard cardInfo={info} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={"hidden sm:flex"} />
      <CarouselNext className={"hidden sm:flex"} />
    </Carousel>
  );
};
