import Image from "next/image";
import {CardInfo} from "@/lib/types";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";

export const VerticalCard = ({ cardInfo }: { cardInfo: CardInfo }) => {

  return (
      <div className={"flex hover:underline hover:cursor-pointer decoration-0 shrink-0 h-full flex-col"}>
          <div>
              <Image src={cardInfo.imgUrl ?? ""} alt={"Card image"} width={1000} height={1000} />
          </div>
          <div
              className={
                  `flex flex-col justify-start items-start gap-6 p-5 flex-1 ${cardInfo.color}`
              }
          >
              <h1 className={`${cardInfo?.text?.color} font-bold text-xl`}>{cardInfo?.text?.header}</h1>
              <p className={`font-light ${cardInfo?.text?.color}`}>
                  {cardInfo?.text?.para}
              </p>
              <Button
                  size={"icon"}
                  variant={"outline"}
                  className={"rounded-full hover:cursor-pointer"}
              >
                  <ArrowRight/>
              </Button>
          </div>
      </div>
  );
};
