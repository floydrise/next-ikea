import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const MenuButtonSm = () => {
  return (
    <div className={"flex gap-2"}>
      <div className={"xl:hidden hover:cursor-pointer ml-2"}>
        <div
          className={
            "hover:bg-zinc-200 hover:rounded-full flex justify-center p-3 "
          }
        >
          <MenuIcon className={"h-5 w-5"} />
        </div>
      </div>
      <Link href={"/"}>
        <div className="w-24 h-10 flex items-center justify-center">
          <Image
            src={"/Ikea_logo.png"}
            alt="ikea logo"
            width={90}
            height={90}
            className="w-full h-full"
          />
        </div>
      </Link>
    </div>
  );
};
