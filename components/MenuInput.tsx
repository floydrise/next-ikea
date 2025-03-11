import {Input} from "@/components/ui/input";
import {CameraIcon, SearchIcon} from "lucide-react";

export const MenuInput = () => {
  return (
      <div className={"hidden md:block ml-4 relative w-3xl"}>
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
  );
};
