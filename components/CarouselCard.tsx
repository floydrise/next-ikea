import Image from "next/image";

export const CarouselCard = ({ imgUrls }: { imgUrls: string }) => {
  return (
    <div className={"flex shrink-0 w-full flex-col lg:flex-row"}>
      <div>
        <Image src={imgUrls} alt={"asd"} width={1000} height={1000} />
      </div>
      <div
        className={
          "p-10 xl:w-1/2 flex flex-col justify-start items-start gap-6 bg-sky-600"
        }
      >
        <h1 className={"text-white font-bold text-xl"}>IKEA Family Оферти</h1>
        <p className={"font-light text-white"}>
          30% отстъпка на избрани продукти
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
