import React from "react";
import Infobar from "./Infobar";
import Chatbox from "./Chatbox";

export default function AppContainer() {
  return (
    <div className="bg-linear-to-r from-[#D7E4EB] to-[#E5E5F1] grow rounded-tl-[40px] rounded-bl-[40px] drop-shadow-md flex flex-row py-5 pl-5">
      <Infobar />
      <Chatbox />
    </div>
  );
}
