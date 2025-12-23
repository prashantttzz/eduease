import Image from "next/image";
import { Camera } from "lucide-react";
import React from "react";

const Account = () => {
  return (
    <div className="h-full">
      <div className="md:h-10 h-15 p-5 flex items-center text-lg md:text-sm">
        Account Setting
      </div>

      <div className="bg-[#F7F8F9] p-5 md:p-2 h-full">
        <div className="flex gap-5 md:gap-2 pt-10 md:pt-5">
          <div className="relative h-20 w-20 md:h-15 md:w-15">
            <Image
              height={100}
              width={100}
              className="rounded-full h-full w-full object-cover"
              src="/img.avif"
              alt="image"
            />
            <div
              className="
              absolute 
              bottom-0 
              right-0
              h-7 w-7 
              md:h-4 
              md:w-4

              rounded-full 
              bg-purple-600 
              flex 
              items-center 
              justify-center 
              border 
              border-white
              cursor-pointer
            "
            >
              <Camera className="h-3 w-3 text-white" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-lg md:text-xs">Marry Doe</h1>
            <h2 className="text-lg md:text-xs">Marry@gmail.com</h2>
          </div>
        </div>

        <p className="text-lg md:text-xs md:mt-5 mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto
          consectetur aperiam praesentium, perspiciatis nesciunt pariatur.
        </p>
      </div>
    </div>
  );
};

export default Account;
