import { MenuIcon } from "lucide-react";

export const MenuButtonLg = () => {
  return (
    <div
      className={"hidden fixed xl:block py-8 w-24"}
    >
      <div className={"hover:cursor-pointer flex flex-col justify-center items-center"}>
        <div
          className={
            "hover:bg-zinc-200 hover:rounded-full flex justify-center p-3"
          }
        >
          <MenuIcon className={"h-5 w-5"} />
        </div>
        <p className={"text-xs hidden md:hidden lg:block"}>Меню</p>
      </div>
    </div>
  );
};
