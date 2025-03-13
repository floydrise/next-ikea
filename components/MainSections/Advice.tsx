import { ShadCarousel } from "@/components/ShadCarousel";
import { adviceCards } from "@/lib/data";
import React from "react";

export const Advice = () => {
  return (
    <section>
      <h1 className={"mt-16 mb-6 font-bold text-2xl"}>
        Вижте лесни и достъпни начини за по-устойчив начин на живот у дома
      </h1>
      <ShadCarousel cardInfo={adviceCards} />
    </section>
  );
};
