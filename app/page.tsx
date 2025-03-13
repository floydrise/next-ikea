import { IKEACarousel } from "@/components/IKEACarousel";
import { OrderAndBuy } from "@/components/OrderAndBuy";
import { ShadCarousel } from "@/components/ShadCarousel";
import { CarouselCard } from "@/components/CarouselCard";
import { headerCards, nowInIKEACard, skogsduvaCard } from "@/lib/cardsInfo";

export default function Home() {
  return (
    <main>
      <div className={"flex flex-col my-16 mx-4 md:mx-0 xl:ml-22"}>
        <IKEACarousel cardInfo={headerCards} />
        <OrderAndBuy />
        <section>
          <h1 className={"mt-16 mb-6 font-bold text-2xl"}>Сега в ИКЕА</h1>
          <ShadCarousel cardInfo={nowInIKEACard} />
          <div className={"mt-16"}>
            <CarouselCard cardInfo={skogsduvaCard} />
          </div>
        </section>
        <section>

        </section>
      </div>
    </main>
  );
}
