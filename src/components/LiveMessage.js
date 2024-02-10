import React from "react";
import { USER_ICON } from "../utils/constants";

const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex gap-2 py-2 lg:gap-4 lg:py-4 items-center border-gray-200 border-b-2 ">
      <img className="h-10 bg-gray-200 p-2 rounded-full" src={USER_ICON} />
      <div>
        <h4 className="font-semi-bold text-xs lg:text-lg">{name}</h4>
        <p className="text-gray-700 text-xs lg:text-lg">{message}</p>
      </div>
    </div>
  );
};

export default LiveMessage;
