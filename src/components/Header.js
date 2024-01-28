import React from "react";
import { useDispatch } from "react-redux";
import {
  HAMBURGER_ICON,
  YOUTUBE_LOGO,
  USER_ICON,
  SEARCH_ICON,
} from "../utils/constants";
import { toggleSidebar } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="grid grid-flow-col p-6 shadow-md items-center">
      <div className="flex col-span-1 gap-4">
        <img
          className="h-9 cursor-pointer"
          alt="hamburger-icon"
          src={HAMBURGER_ICON}
          onClick={handleSidebarToggle}
        />
        <img className="h-9" alt="youtube-logo" src={YOUTUBE_LOGO} />
      </div>
      <div className="flex justify-center col-span-10">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 p-3 border border-gray-400 rounded-l-full"
        />
        <button className="p-4 bg-slate-100 border border-gray-400 border border-l-0 rounded-r-full">
          <img className="h-5" src={SEARCH_ICON} />
        </button>
      </div>
      <div className="flex justify-end col-span-1">
        <img className="h-9" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
