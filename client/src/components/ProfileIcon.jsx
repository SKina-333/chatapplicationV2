import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
export default function ProfileIcon() {
  return (
    <div>
      <div className=" py-2 px-3 flex flex-row items-center gap-4 rounded-xl hover:bg-[#00000010] transition duration-300">
        <div className="w-[45px] h-[45px] rounded-full bg-gray-500"></div>
        <div className="grow font-Poppins text-sm text-[#565555]">username</div>
        <div className="">
          <button type="button" className="py-2">
            <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
          </button>
        </div>
      </div>
    </div>
  );
}
