import { GrayCard } from "@/lib/types";

export const OrderAndBuy = ({ grayCards }: { grayCards: GrayCard[] }) => {
  return (
    <div className={"flex flex-col lg:flex-row justify-between gap-2"}>
      {grayCards.map((info, index) => (
        <div
          key={index}
          className={
            "flex flex-col gap-2 justify-center items-center w-full h-40 lg:h-36 bg-gray-100 hover:cursor-pointer"
          }
        >
          {info.icon}
          <h1 className={"font-bold"}>{info.header}</h1>
          <p className={"font-light text-sm underline"}>Виж повече</p>
        </div>
      ))}
    </div>
  );
};
