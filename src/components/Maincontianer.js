import { configure } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const Maincontianer = () => {
  const isSideBarOpen = useSelector((store) => store.config.showSidebar);

  return (
    <div className={isSideBarOpen ? "w-[86%]" : "w-[90%]" + " mx-auto"}>
      <ButtonList></ButtonList>
      <VideoContainer></VideoContainer>
    </div>
  );
};

export default Maincontianer;
