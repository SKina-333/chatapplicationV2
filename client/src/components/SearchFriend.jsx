import React from "react";

export default function SearchFriend() {
  return (
    <div>
      <label
        htmlFor="userID"
        className="block text-sm/6 font-Poppins text-[#666161] text-end"
      >
        Find your friends
      </label>
      <div className="mt-2">
        <input
          id="userID"
          name="username"
          type="text"
          placeholder="@username"
          className="block w-full rounded-[10px] bg-[#e3edf0] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
        />
      </div>
    </div>
  );
}
