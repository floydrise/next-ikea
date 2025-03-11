import Link from "next/link";
import {Heart, ShoppingBasket, Truck, User} from "lucide-react";

export const NavSideButtons = () => {
  return (
      <div className={"flex shrink-0"}>
          <Link
              href={"#"}
              className={
                  "flex justify-center gap-2 items-center hover:bg-zinc-300 rounded-full p-2 md:py-2 md:px-6"
              }
          >
              <User />
              <p className={"hidden xl:block font-bold text-xs"}>
                  Вход/Регистрация
              </p>
          </Link>
          <Link
              href={"#"}
              className={
                  "flex justify-center items-center hover:bg-zinc-300 rounded-full p-2"
              }
          >
              <Truck />
          </Link>
          <Link
              href={"#"}
              className={
                  "flex justify-center items-center hover:bg-zinc-300 rounded-full p-2"
              }
          >
              <Heart />
          </Link>
          <Link
              href={"#"}
              className={
                  "flex justify-center items-center hover:bg-zinc-300 rounded-full p-2"
              }
          >
              <ShoppingBasket />
          </Link>
      </div>
  );
};
