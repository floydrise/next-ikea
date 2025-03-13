import {ShadCarousel} from "@/components/ShadCarousel";
import {nowInIKEACard, skogsduvaCard} from "@/lib/data";
import {CarouselCard} from "@/components/CarouselCard";
import React from "react";

export const NowInIkea = () => {
  return (
      <section>
          <h1 className={"mt-16 mb-6 font-bold text-2xl"}>Сега в ИКЕА</h1>
          <ShadCarousel cardInfo={nowInIKEACard} />
          <div className={"mt-16"}>
              <CarouselCard cardInfo={skogsduvaCard} />
          </div>
      </section>
  );
};
