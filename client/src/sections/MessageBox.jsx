import React from "react";

export default function MessageBox() {
  return (
    <div className="grow px-10 pt-5 flex flex-col gap-5">
      <div className="flex flex-col items-start gap-4">
        <div className="w-[125px] h-[125px] bg-gray-500 rounded-full"></div>
        <div className="font-Poppins text-4xl">username</div>
        <div className="font-Poppins text-xl text-[#747171]">
          This is the beginning of your direct message history with{" "}
          <span className="font-[700]">username</span>
        </div>
      </div>
      <div className="grow "></div>
      <div className="flex flex-row gap-5">
        <input
          id="text"
          name="text"
          type="text"
          placeholder="Message @username"
          className=" rounded-md grow bg-[#C5D4DE] px-5 py-4 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
        />
        <button className=" rounded-md h-[60px] w-[70px] bg-[#C5D4DE]"></button>
      </div>
    </div>
  );
}
