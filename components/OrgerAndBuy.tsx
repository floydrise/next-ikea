import { SquarePen, Store, Warehouse } from "lucide-react";
import Link from "next/link";

export const OrderAndBuy = () => {
  return (
    <div className={"flex mt-16 flex-col lg:flex-row justify-between gap-2"}>
      <Link
        href={"#"}
        className={
          "flex flex-col gap-2 justify-center items-center w-full h-40 lg:h-36 bg-gray-100"
        }
      >
        <SquarePen />
        <p className={"font-bold"}>Програми за проектиране на ИКЕА</p>
        <p className={"font-light text-sm underline"}>Виж повече</p>
      </Link>
      <Link
        href={"#"}
        className={
          "flex flex-col gap-2 justify-center items-center w-full h-40 lg:h-36 bg-gray-100"
        }
      >
        <Store />
        <p className={"font-bold"}>Поръчай и вземи от мобилен хъб</p>
        <p className={"font-light text-sm underline"}>Виж повече</p>
      </Link>
      <Link
        href={"#"}
        className={
          "flex flex-col gap-2 justify-center items-center w-full h-40 lg:h-36 bg-gray-100"
        }
      >
        <Warehouse />
        <p className={"font-bold"}>Поръчай и вземи</p>
        <p className={"font-light text-sm underline"}>Виж повече</p>
      </Link>
    </div>
  );
};
