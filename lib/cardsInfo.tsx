import { CardInfo } from "@/lib/types";
import {ArrowRight} from "lucide-react";


export const headerCards: CardInfo[] = [
  {
    type: "horizontal",
    imgUrl: "/CarouselImg1.jpg",
    color: "bg-sky-600",
    text: {
      header: "До 24 март",
      para: "-20% на аксесоари KOMPLEMENT с IKEA Family",
      color: "text-white",
    },
    button: "Виж повече",
  },
  {
    type: "horizontal",
    imgUrl: "/CarouselImg2.jpg",
    color: "bg-sky-600",
    text: {
      header: "IKEA Family оферти",
      para: "30% отстъпка на избрани продукти с IKEA FAMILY",
      color: "text-white",
    },
    button: "Виж повече",
  },
];
export const nowInIKEACard: CardInfo[] = [
  {
    type: "vertical",
    imgUrl: "/NowInIKEA1.jpg",
    color: "bg-yellow-200",
    text: { header: "Пролетта идва с колекция TJARLEK", color: "text-black" },
  },
  {
    type: "vertical",
    imgUrl: "/NowInIKEA2.jpg",
    color: "bg-amber-300",
    text: {
      header: "Откриване на ИКЕА Перник",
      para: "Ритейл Парк Перник Плаза",
      color: "text-blue-700",
    },
  },
  {
    type: "vertical",
    imgUrl: "/NowInIKEA3.jpg",
    color: "bg-stone-200",
    text: { header: "Вижте новате брошура кухни", color: "text-black" },
  },
  {
    type: "vertical",
    imgUrl: "/NowInIKEA4.jpg",
    color: "bg-red-100",
    text: { header: "Съвети за по-безопасен дом", color: "text-black" },
  },
];
export const skogsduvaCard: CardInfo = {
  type: "horizontal",
  imgUrl: "/CarouselImg3.jpg",
  color: "bg-slate-600",
  text: {
    header: "SKOGSDUVA",
    para: "Запознай се с видри, снежни сови, арктически лисици и още много животни, насекоми и растения от шведската гора с колекцията SKOGSDUVA. С нея възглавницата е и дънер, халатът може да те превърне в рис, а завивката може да вдъхнови приказката за лека нощ. Внесете магията на шведската гора във ваши собствен дом!",
    color: "text-white",
  },
  button: "Виж цялата колекция",
};
export const offersCards: CardInfo[] = [
  {
    type: "vertical",
    imgUrl: "/offersCard1.jpg",
    color: "bg-cyan-500",
    text: { header: "Купи сега, плати по-късно с TBI Bank", color: "text-white" },
  },
  {
    type: "vertical",
    imgUrl: "/offersCard2.jpg",
    color: "bg-amber-200",
    text: {
      header: "Продукти под 10 лв.",
      color: "text-black",
    },
  },
  {
    type: "vertical",
    imgUrl: "/offersCard3.jpg",
    color: "bg-lime-100",
    text: { header: "Активни навън", color: "text-black" },
  },
];
export const adviceCards: CardInfo[] = [
  {
    type: "image",
    color: "bg-green-600",
    text: {
      header: "Малки промени за по-добър живот. Заедно.",
      color: "text-white"
    },
    button: <ArrowRight/>,
  },
  {
    type: "image",
    color: "bg-[url('/AdviceImg1.jpg')]",
    button: "Пестене на енергия",
  },
  {
    type: "image",
    color: "bg-[url('/AdviceImg2.jpg')]",
    button: "Пестене на енергия",
  },
  {
    type: "image",
    color: "bg-[url('/AdviceImg3.jpg')]",
    button: "Пестене на енергия",
  },
  {
    type: "image",
    color: "bg-[url('/AdviceImg4.jpg')]",
    button: "Пестене на енергия",
  },
  {
    type: "image",
    color: "bg-[url('/AdviceImg5.jpg')]",
    button: "Пестене на енергия",
  },
  {
    type: "image",
    color: "bg-[url('/AdviceImg6.jpg')]",
    button: "Пестене на енергия",
  },
];