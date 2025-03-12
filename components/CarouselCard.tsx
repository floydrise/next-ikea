import Image from "next/image";
import {CardInfo} from "@/lib/types";

export const CarouselCard = ({ cardInfo }: { cardInfo: CardInfo }) => {
  return (
    <div className={"flex shrink-0 w-full flex-col lg:flex-row"}>
      <div>
        <Image src={cardInfo.imgUrl} alt={"Card image"} width={1000} height={500} />
      </div>
      <div
        className={
          `p-10 xl:w-1/2 flex flex-col justify-start items-start gap-6 ${cardInfo.color}`
        }
      >
        <h1 className={`${cardInfo.text.color} font-bold text-xl`}>{cardInfo.text.header}</h1>
        <p className={`font-light ${cardInfo.text.color}`}>
            {cardInfo.text.para}
        </p>
        <button
          className={
            "bg-white rounded-full py-2 px-4 hover:bg-gray-300 hover:cursor-pointer"
          }
        >
          <p className={"font-bold text-sm"}>Виж повече</p>
        </button>
      </div>
    </div>
  );
};
