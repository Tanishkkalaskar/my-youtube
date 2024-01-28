import React from "react";
import { Outlet } from "react-router-dom";
import Maincontianer from "./Maincontianer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
