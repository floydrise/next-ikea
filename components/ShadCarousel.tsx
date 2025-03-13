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
import {ImageCard} from "@/components/ImageCard";

export const ShadCarousel = ({ cardInfo }: { cardInfo: CardInfo[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {cardInfo.map((info, index) => (
          <CarouselItem key={index} className={`${info.type === "image" ? "xl:basis-1/5 lg:basis-1/4 md:basis-1/3" : "lg:basis-1/3"}  basis-1/2`}>
              {info.type === "image" ? <ImageCard cardInfo={info}/> : <VerticalCard cardInfo={info} />}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={"hidden sm:flex"} />
      <CarouselNext className={"hidden sm:flex"} />
    </Carousel>
  );
};
