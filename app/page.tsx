import { IKEACarousel } from "@/components/IKEACarousel";
import { OrderAndBuy } from "@/components/OrderAndBuy";
import { CardInfo } from "@/lib/types";
import {ShadCarousel} from "@/components/ShadCarousel";

export default function Home() {
  const nowInIKEACard: CardInfo[] = [
    {
      type: "vertical",
      imgUrl: "/NowInIKEA1.jpg",
      color: "bg-yellow-200",
      text: { header: "Пролетта идва с колекция TJARLEK", color: "text-black" },
    },
    {
      type: "vertical",
      imgUrl: "/NowInIKEA2.jpg",
      color: "bg-amber-300",
      text: {
        header: "Откриване на ИКЕА Перник",
        para: "Ритейл Парк Перник Плаза",
        color: "text-blue-700",
      },
    },
    {
      type: "vertical",
      imgUrl: "/NowInIKEA3.jpg",
      color: "bg-stone-200",
      text: { header: "Вижте новате брошура кухни", color: "text-black" },
    },
    {
      type: "vertical",
      imgUrl: "/NowInIKEA4.jpg",
      color: "bg-red-100",
      text: { header: "Съвети за по-безопасен дом", color: "text-black" },
    },
  ];

  return (
    <div>
      <div className={"flex flex-col my-16 mx-4 md:mx-0 xl:ml-22"}>
        <IKEACarousel
          cardInfo={[
            {
              type: "horizontal",
              imgUrl: "/CarouselImg1.jpg",
              color: "bg-sky-600",
              text: {
                header: "До 24 март",
                para: "-20% на аксесоари KOMPLEMENT с IKEA Family",
                color: "text-white",
              },
            },
            {
              type: "horizontal",
              imgUrl: "/CarouselImg2.jpg",
              color: "bg-sky-600",
              text: {
                header: "IKEA Family оферти",
                para: "30% отстъпка на избрани продукти с IKEA FAMILY",
                color: "text-white",
              },
            },
          ]}
        />
        <OrderAndBuy />
        <h1 className={"mt-16 mb-6 font-bold text-2xl"}>Сега в ИКЕА</h1>
        {/*<IKEACarousel cardInfo={nowInIKEACard} />*/}
        <ShadCarousel cardInfo={nowInIKEACard}/>
      </div>
    </div>
  );
}
