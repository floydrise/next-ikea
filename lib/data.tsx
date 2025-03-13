import { CardInfo, GrayCard } from "@/lib/types";
import {
  ArrowRight,
  CalendarCheck,
  SquarePen,
  Store,
  Warehouse,
} from "lucide-react";

export const headerCards: CardInfo[] = [
  {
    type: "horizontal",
    imgUrl: "/CarouselImages/CarouselImg1.jpg",
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
    imgUrl: "/CarouselImages/CarouselImg2.jpg",
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
    imgUrl: "/NowInIKEA/NowInIKEA1.jpg",
    color: "bg-yellow-200",
    text: { header: "Пролетта идва с колекция TJARLEK", color: "text-black" },
  },
  {
    type: "vertical",
    imgUrl: "/NowInIKEA/NowInIKEA2.jpg",
    color: "bg-amber-300",
    text: {
      header: "Откриване на ИКЕА Перник",
      para: "Ритейл Парк Перник Плаза",
      color: "text-blue-700",
    },
  },
  {
    type: "vertical",
    imgUrl: "/NowInIKEA/NowInIKEA3.jpg",
    color: "bg-stone-200",
    text: { header: "Вижте новате брошура кухни", color: "text-black" },
  },
  {
    type: "vertical",
    imgUrl: "/NowInIKEA/NowInIKEA4.jpg",
    color: "bg-red-100",
    text: { header: "Съвети за по-безопасен дом", color: "text-black" },
  },
];
export const skogsduvaCard: CardInfo = {
  type: "horizontal",
  imgUrl: "/CarouselImages/CarouselImg3.jpg",
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
    imgUrl: "/OffersImages/offersCard1.jpg",
    color: "bg-cyan-500",
    text: {
      header: "Купи сега, плати по-късно с TBI Bank",
      color: "text-white",
    },
  },
  {
    type: "vertical",
    imgUrl: "/OffersImages/offersCard2.jpg",
    color: "bg-amber-200",
    text: {
      header: "Продукти под 10 лв.",
      color: "text-black",
    },
  },
  {
    type: "vertical",
    imgUrl: "/OffersImages/offersCard3.jpg",
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
      color: "text-white",
    },
    button: <ArrowRight />,
  },
  {
    type: "image",
    color: "bg-[url('/Advice/AdviceImg1.jpg')]",
    button: "Пестене на енергия",
  },
  {
    type: "image",
    color: "bg-[url('/Advice/AdviceImg2.jpg')]",
    button: "Пестене на енергия",
  },
  {
    type: "image",
    color: "bg-[url('/Advice/AdviceImg3.jpg')]",
    button: "Пестене на енергия",
  },
  {
    type: "image",
    color: "bg-[url('/Advice/AdviceImg4.jpg')]",
    button: "Пестене на енергия",
  },
  {
    type: "image",
    color: "bg-[url('/Advice/AdviceImg5.jpg')]",
    button: "Пестене на енергия",
  },
  {
    type: "image",
    color: "bg-[url('/Advice/AdviceImg6.jpg')]",
    button: "Пестене на енергия",
  },
];
export const ikeaIdeasCards: CardInfo[] = [
  {
    type: "vertical",
    imgUrl: "/IKEAIdeas/IkeaIdeas1.jpg",
    color: "bg-sky-100",
    text: { header: "Обща стая за родители и бебе", color: "text-black" },
  },
  {
    type: "vertical",
    imgUrl: "/IKEAIdeas/IkeaIdeas2.jpg",
    color: "bg-stone-100",
    text: {
      header: "Спалня в бяло - за красив и свеж облик",
      color: "text-black",
    },
  },
  {
    type: "vertical",
    imgUrl: "/IKEAIdeas/IkeaIdeas3.jpg",
    color: "bg-rose-50",
    text: { header: "Модерна малка спалня", color: "text-black" },
  },
  {
    type: "vertical",
    imgUrl: "/IKEAIdeas/IkeaIdeas4.jpg",
    color: "bg-rose-50",
    text: {
      header: "Вижте други вдъхновяващи идеи от ИКЕА",
      color: "text-black",
    },
  },
];
export const links = [
  "Баня",
  "Бебета и деца",
  "Градина",
  "Дневна",
  "Домашен офис",
  "Коридор",
  "Кухня",
  "Мокро помещение",
  "Спалня",
  "Трапезаря",
];
export const orderAndBuy: GrayCard[] = [
  {
    icon: <SquarePen />,
    header: "Програми за проектиране на ИКЕА",
  },
  {
    icon: <Store />,
    header: "Поръчай и вземи от мобилен хъб",
  },
  {
    icon: <Warehouse />,
    header: "Поръчай и вземи",
  },
];
export const services: GrayCard[] = [
  {
    icon: <SquarePen />,
    header: "Съвети за обзавеждане на дома",
  },
  {
    icon: <CalendarCheck />,
    header: "Онлайн запазване на час",
  },
  {
    icon: <Store />,
    header: "Поръчай и вземи",
  },
  {
    icon: <Warehouse />,
    header: "Поръчай и вземи от мобилен хъб",
  },
];

export const familyAndBusiness: CardInfo[] = [
  {
    type: "horizontal",
    imgUrl: "/IKEAFamily.jpg",
    color: "bg-sky-600",
    text: {
      header: "IKEA Family",
      para: "Програма IKEA Family е за всички, които споделяме една и съща страст - любовта към дома. Има много причини да се присъедините към IKEA Family - специални привилегии, редовна информация за всички намаления, покани за интересни събития, вдъхновяващи предложения и още ...",
      color: "text-white",
    },
    button: "Виж повече",
  },
  {
    type: "horizontal",
    imgUrl: "/IKEABusiness.jpg",
    color: "bg-orange-300",
    text: {
      header: "IKEA и за вашия бизнес",
      para: "Времето и ресурсите са ценни - независимо в кой сектор е бизнесът ви. За това ви предлагаме разнообразие от добре проектирани мебели, с които лесно ще можете да обзаведете фирмата си по практичен и стилен начин",
      color: "text-black",
    },
    button: "Виж повече",
  },
];
