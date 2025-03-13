import {OrderAndBuy} from "@/components/OrderAndBuy";
import {familyAndBusiness, services} from "@/lib/data";
import React from "react";
import {CarouselCard} from "@/components/CarouselCard";

export const Services = () => {
  return <section>
      <div className={"mt-16 mb-6 flex items-center justify-between"}>
          <h1 className={"font-bold text-2xl"}>Услуги на ИКЕА</h1>
          <p className={"font-light text-sm underline hover:cursor-pointer"}>
              Вижте всички услуги
          </p>
      </div>
      <OrderAndBuy grayCards={services} />
      <div className={"mt-16 flex flex-col gap-14"}>
          {familyAndBusiness.map((info, index) => (
              <CarouselCard cardInfo={info} key={index} />
          ))}
      </div>
  </section>;
};
