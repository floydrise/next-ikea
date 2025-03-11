import {CameraIcon, Heart, MenuIcon, SearchIcon, ShoppingBasket, Truck, User} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className={"flex"}>
      <div className={"sticky flex justify-center items-center py-8 w-24"}>
        <button className={"hover:cursor-pointer"}>
          <div
            className={
              "hover:bg-zinc-200 hover:rounded-full flex justify-center p-2"
            }
          >
            <MenuIcon className={"h-5 w-5"} />
          </div>
          <p className={"text-xs"}>Меню</p>
        </button>
      </div>
      <div className={"w-full"}>
        {/*Div top*/}
        <div className={"flex justify-around py-8 items-center"}>
          <Link href={"/"}>
          <Image
            src={"/ikea_logo.svg"}
            alt={"ikea logo"}
            height={"90"}
            width={"90"}
            className={""}
          />
          </Link>
          {/*Input*/}
          <div className={"relative"}>
            <Input
              className={"w-180 pl-10  h-12 rounded-full bg-zinc-100 "}
              placeholder={"Търсете продукти, идеи, стаи"}
            />
            <div
              className="absolute inset-y-0 left-0 pl-3
                    flex items-center
                    pointer-events-none"
            >
              <SearchIcon className={"text-gray-600 h-5 w-5"} />
            </div>
            <div
              className="absolute inset-y-0 right-5
                    flex items-center"
            >
              <div className="p-1 rounded-full hover:bg-zinc-300 transition duration-200 cursor-pointer">
                <CameraIcon className="text-gray-600" />
              </div>
            </div>
          </div>
          <Link href={"#"} className={"flex justify-center items-center hover:bg-zinc-300 rounded-full py-2 px-6"}>
            <User/>
            <p className={"font-bold text-xs"}>Вход/Регистрация</p>
          </Link>
          <Link href={"#"} className={"flex justify-center items-center hover:bg-zinc-300 rounded-full p-2"}>
            <Truck/>
          </Link>
          <Link href={"#"} className={"flex justify-center items-center hover:bg-zinc-300 rounded-full p-2"}>
            <Heart/>
          </Link>
          <Link href={"#"} className={"flex justify-center items-center hover:bg-zinc-300 rounded-full p-2"}>
            <ShoppingBasket/>
          </Link>
        </div>
        {/*Div bottom*/}
        <div className={"pb-2 border-b"}>
          <nav className={"flex gap-8"}>
            <Link href={"#"} className={"font-bold text-base hover:underline decoration-0"}>
              Продукти
            </Link>
            <Link href={"#"} className={"font-bold text-base hover:underline decoration-0"}>
              Стаи
            </Link>
            <Link href={"#"} className={"font-bold text-base hover:underline decoration-0"}>
              Вдъхновение
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
