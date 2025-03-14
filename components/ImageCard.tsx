import { Button } from "@/components/ui/button";
import { CardInfo } from "@/lib/types";
import React from "react";

export const ImageCard = ({ cardInfo }: { cardInfo: CardInfo }) => {
  return (
    <div
      className={`${cardInfo.color} bg-cover bg-center flex flex-col justify-between items-center  h-84 hover:cursor-pointer`}
    >
      {cardInfo.text ? (
        <h1 className={`${cardInfo.text.color} m-4 font-bold text-xl`}>
          {cardInfo.text.header}
        </h1>
      ) : (
        <span></span>
      )}
      <Button
        variant={"outline"}
        className={"rounded-full mb-5 hover:cursor-pointer whitespace-normal "}
        size={typeof cardInfo.button === "object" ? "icon" : "default"}
      >
        <span className={"font-bold text-xs sm:text-base"}>{cardInfo.button}</span>
      </Button>
    </div>
  );
};
