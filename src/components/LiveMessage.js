import React from "react";
import { USER_ICON } from "../utils/constants";

const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex gap-4 items-center border-gray-200 border-b-2 py-4">
      <img className="h-10 bg-gray-200 p-2 rounded-full" src={USER_ICON} />
      <div>
        <h4 className="font-semi-bold">{name}</h4>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default LiveMessage;
