import {ShadCarousel} from "@/components/ShadCarousel";
import {ikeaIdeasCards} from "@/lib/data";
import React from "react";

export const Ideas = () => {
  return <section>
      <h1 className={"mt-16 mb-6 font-bold text-2xl"}>ИКЕА идеи</h1>
      <ShadCarousel cardInfo={ikeaIdeasCards} />
  </section>;
};
