import {IKEACarousel} from "@/components/IKEACarousel";
import {headerCards, orderAndBuy} from "@/lib/data";
import {OrderAndBuy} from "@/components/OrderAndBuy";
import React from "react";

export const Intro = () => {
  return (
      <section>
          <IKEACarousel cardInfo={headerCards} />
          <div className={"mt-16"}>
              <OrderAndBuy grayCards={orderAndBuy} />
          </div>
      </section>
  );
};
