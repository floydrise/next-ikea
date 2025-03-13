import Image from "next/image";
import { CardInfo } from "@/lib/types";

export const CarouselCard = ({ cardInfo }: { cardInfo: CardInfo }) => {
  return (
    <div
      className={
        "flex hover:cursor-pointer shrink-0 w-full flex-col lg:flex-row"
      }
    >
      <Image
        src={cardInfo.imgUrl ?? ""}
        alt={"Card image"}
        width={1000}
        height={500}
      />
      <div
        className={`p-10 flex flex-col justify-start flex-1/2 items-start gap-6 ${cardInfo.color}`}
      >
        <h1
          className={`${cardInfo?.text?.color} ${cardInfo.button !== "Виж повече" ? "underline decoration-0" : null} font-bold text-xl`}
        >
          {cardInfo?.text?.header}
        </h1>
        <p className={`font-light ${cardInfo?.text?.color}`}>
          {cardInfo?.text?.para}
        </p>
        <button
          className={
            "bg-white rounded-full py-2 px-4 hover:bg-gray-300 hover:cursor-pointer"
          }
        >
          <p className={"font-bold text-sm"}>{cardInfo.button}</p>
        </button>
      </div>
    </div>
  );
};
