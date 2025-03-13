import React from "react";
import { Intro } from "@/components/MainSections/Intro";
import { NowInIkea } from "@/components/MainSections/NowInIkea";
import { Offers } from "@/components/MainSections/Offers";
import { Advice } from "@/components/MainSections/Advice";
import { Ideas } from "@/components/MainSections/Ideas";
import { Changes } from "@/components/MainSections/Changes";
import { Services } from "@/components/MainSections/Services";

export default function Home() {
  return (
    <main className={"flex flex-col my-16 mx-4 md:mx-0 xl:ml-22"}>
      <Intro />
      <NowInIkea />
      <Offers />
      <Advice />
      <Ideas />
      <Changes />
      <Services />
    </main>
  );
}
