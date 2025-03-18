import React from "react";
import ProfileIcon from "./ProfileIcon";

export default function AllFriends() {
  return (
    <div className="">
      <div className="block text-sm/6 font-Poppins text-[#666161] text-end mb-2">
        Direct Messages
      </div>
      <div className="flex flex-col gap-2">
        <ProfileIcon />
      </div>
    </div>
  );
}
