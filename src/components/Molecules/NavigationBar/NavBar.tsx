import React from "react";
import Location from "@/components/Atoms/Location/Location";
import Login from "@/components/Atoms/Login/Login";
import SearchInput from "@/components/Atoms/Search/Search";
import Shopping from "../Shopping/Shopping";

export default function NavBar() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-around border-b mb-2 p-2">
        <div className="block max-sm:hidden"></div>
        <div className="flex">
          <Location />
        </div>
        <div className="w-[350px] block max-sm:hidden"></div>
        <div className="flex items-center justify-end">
          <Login />
        </div>
      </div>
      <div className="flex flex-row items-center justify-around">
      <div>
        <SearchInput />
      </div>
      <div></div>
      <div>
        <Shopping />
      </div>
      </div>
    </div>
  );
}
