import React from "react";
import Maincontianer from "./Maincontianer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Maincontianer></Maincontianer>
    </div>
  );
};

export default Body;
