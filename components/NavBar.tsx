import {
  CameraIcon,
  Heart,
  MenuIcon,
  SearchIcon,
  ShoppingBasket,
  Truck,
  User,
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { MenuButtonLg } from "@/components/MenuButtonLg";
import { MenuInput } from "@/components/MenuInput";
import {MenuButtonSm} from "@/components/MenuButtonSm";
import {NavSideButtons} from "@/components/NavSideButtons";
import {NavBottomMenu} from "@/components/NavBottomMenu";

export const NavBar = () => {
  return (
    <>
      <div className={"flex"}>
        <MenuButtonLg />
        <div className={"w-full"}>
          {/*Div top*/}
          <div
            className={
              "flex border-b md:border-none  justify-between py-6 items-center"
            }
          >
            <MenuButtonSm/>
            <MenuInput />
            <NavSideButtons/>
          </div>
          {/*Div bottom*/}
          <NavBottomMenu/>
        </div>
      </div>
      <div className={"md:hidden m-4 relative"}>
        <Input
          className={"pl-10  h-12 rounded-full bg-zinc-100 "}
          placeholder={"Търсете продукти, стаи, идеи ..."}
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
    </>
  );
};
