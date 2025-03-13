import { IKEACarousel } from "@/components/IKEACarousel";
import { OrderAndBuy } from "@/components/OrderAndBuy";
import { ShadCarousel } from "@/components/ShadCarousel";
import { CarouselCard } from "@/components/CarouselCard";
import {
  headerCards,
  nowInIKEACard,
  skogsduvaCard,
  offersCards,
  adviceCards,
  ikeaIdeasCards,
  links,
} from "@/lib/data";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
          <ShadCarousel cardInfo={adviceCards} />
        </section>
        {/*IKEA Ideas section*/}
        <section>
          <h1 className={"mt-16 mb-6 font-bold text-2xl"}>ИКЕА идеи</h1>
          <ShadCarousel cardInfo={ikeaIdeasCards} />
        </section>
        {/*Changes section*/}
        <section>
          <div className={"md:w-120"}>
            <h1 className={"mt-16 mb-2 font-bold text-2xl"}>
              Малки промени, с които да освежите дома си
            </h1>
            <p className={"text-sm"}>
              Следвайте ни{" "}
              <Link href={"#"} className={"underline"}>
                @ikeabulgaria
              </Link>
            </p>
          </div>
          <div className={"flex mt-10 pb-6 gap-4 overflow-scroll border-b"}>
            {links.map((link, index) => (
              <Button
                key={index}
                variant={"outline"}
                className={"rounded-full hover:cursor-pointer font-bold"}
              >
                {link}
              </Button>
            ))}
          </div>
          <div
            className={
              "mt-8 grid gap-6 grid-cols-2 auto-rows-max lg:grid-cols-3"
            }
          >
            <Image
              src={"/Gallery/Gallery1.jpg"}
              alt={"pic"}
              width={400}
              height={400}
            />
            <Image
              src={"/Gallery/Gallery2.jpg"}
              alt={"pic"}
              width={400}
              height={400}
              // className={"h-3/4 object-cover"}
            />
            <Image
              src={"/Gallery/Gallery3.jpg"}
              alt={"pic"}
              width={400}
              height={400}
            />
            <Image
              src={"/Gallery/Gallery4.jpg"}
              alt={"pic"}
              width={400}
              height={400}
            />
            <Image
              src={"/Gallery/Gallery5.jpg"}
              alt={"pic"}
              width={400}
              height={400}
            />
            <Image
              src={"/Gallery/Gallery6.jpg"}
              alt={"pic"}
              width={400}
              height={400}
            />
            <Image
              src={"/Gallery/Gallery7.jpg"}
              alt={"pic"}
              width={400}
              height={400}
            />
            <Image
              src={"/Gallery/Gallery8.jpg"}
              alt={"pic"}
              width={400}
              height={400}
            />
            <Image
              src={"/Gallery/Gallery9.jpg"}
              alt={"pic"}
              width={400}
              height={400}
            />
          </div>
          <div className={"flex gap-10 justify-center items-center mt-10 flex-col"}>
            <div className={"flex flex-col gap-2 justify-center items-center"}>
              <p className={"font-light text-sm"}>9 от 351</p>
              <div className={"w-48 h-1 rounded-full bg-gradient-to-r  from-blue-700 from-5% to-gray-200 to-5%"}></div>
            </div>
            <div>
              <Button variant={"outline"} size={"lg"} className={"rounded-full border-black hover:cursor-pointer hover:border-2"}>Зареди още</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
