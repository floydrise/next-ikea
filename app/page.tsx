import { IKEACarousel } from "@/components/IKEACarousel";
import { OrderAndBuy } from "@/components/OrderAndBuy";
import { ShadCarousel } from "@/components/ShadCarousel";
import { CarouselCard } from "@/components/CarouselCard";
import {
  headerCards,
  nowInIKEACard,
  skogsduvaCard,
  offersCards, adviceCards,
} from "@/lib/cardsInfo";
import React from "react";

export default function Home() {
  return (
    <main>
      <div className={"flex flex-col my-16 mx-4 md:mx-0 xl:ml-22"}>
        {/*Intro section*/}
        <section>
          <IKEACarousel cardInfo={headerCards} />
          <OrderAndBuy />
        </section>
        {/*Now in IKEA section*/}
        <section>
          <h1 className={"mt-16 mb-6 font-bold text-2xl"}>Сега в ИКЕА</h1>
          <ShadCarousel cardInfo={nowInIKEACard} />
          <div className={"mt-16"}>
            <CarouselCard cardInfo={skogsduvaCard} />
          </div>
        </section>
        {/*Offers section*/}
        <section>
          <h1 className={"mt-16 mb-6 font-bold text-2xl"}>Оферти</h1>
          <ShadCarousel cardInfo={offersCards} />
        </section>
        {/*Advice section*/}
        <section>
          <h1 className={"mt-16 mb-6 font-bold text-2xl"}>
            Вижте лесни и достъпни начини за по-устойчив начин на живот у дома
          </h1>

          <ShadCarousel cardInfo={adviceCards}/>

        </section>
      </div>
    </main>
  );
}
