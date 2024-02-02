import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Maincontianer from "./Maincontianer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
