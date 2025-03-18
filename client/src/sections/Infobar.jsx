import React from "react";
import SearchFriend from "../components/SearchFriend.jsx"
import Notification from "../components/Notification.jsx"
import AllFriend from "../components/AllFriends.jsx"
export default function Infobar() {
  return (
    <div className="bg-linear-to-r from-[#BEC9CF] to-[#CCCCD8] rounded-tl-[40px] rounded-bl-[40px] w-[350px] p-5">
      <div className="flex flex-col gap-5">
        <SearchFriend />
        <Notification />
        <AllFriend />
      </div>
      <div></div>
    </div>
  );
}
