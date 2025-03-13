import {ShadCarousel} from "@/components/ShadCarousel";
import {offersCards} from "@/lib/data";
import React from "react";

export const Offers = () => {
  return (
      <section>
          <h1 className={"mt-16 mb-6 font-bold text-2xl"}>Оферти</h1>
          <ShadCarousel cardInfo={offersCards} />
      </section>
  );
};
