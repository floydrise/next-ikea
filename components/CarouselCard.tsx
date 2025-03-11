import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CarouselCard = () => {
  const imageUrls = ["/CarouselImg1.jpg", "/CarouselImg2.jpg"];

  return (
    <div className={"overflow-hidden relative"}>
      <div className={"flex"}>
        {imageUrls.map((imgUrl, index) => (
          <div key={index} className={"flex ml-25 border-black"}>
            <div>
              <Image
                src={imgUrl}
                alt={"Carousel image"}
                width={1800}
                height={1800}
              />
            </div>
            <div className={"w-300 flex justify-center bg-sky-600"}>
              <div
                className={
                  "mt-10 ml-4 flex flex-col justify-start items-start gap-6"
                }
              >
                <h1 className={"text-white font-bold text-2xl"}>
                  IKEA Family Оферти
                </h1>
                <p className={"font-light text-white"}>
                  30% отстъпка на избрани продукти
                </p>
                <button
                  className={
                    "bg-white rounded-full py-2 px-4 hover:bg-gray-200 hover:cursor-pointer"
                  }
                >
                  <p className={"font-bold text-sm"}>Виж повече</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={"absolute top-50 left-20"}>
        <Button size={"icon"} className={"rounded-full"}>
          <ChevronLeft />
        </Button>
      </div>
      <div className={"absolute top-50 right-16"}>
        <Button size={"icon"} className={"rounded-full"}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
