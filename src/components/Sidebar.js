import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const showSidebar = useSelector((store) => store.config.showSidebar);

  return !showSidebar ? null : (
    <div className="min-w-52 p-4 shadow-md">
      <section>
        <ul className="text-l">
          <li>Home</li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </section>
      <section>
        <h1 className="font-bold pt-5 text-xl">Subscription</h1>
        <ul className="text-l">
          <li>Gaming</li>
          <li>Movies</li>
          <li>Music</li>
          <li>Sports</li>
        </ul>
      </section>
      <section>
        <h1 className="font-bold pt-5 text-xl">Watch later</h1>
        <ul className="text-l">
          <li>Home</li>
          <li>Sports</li>
          <li>Music</li>
          <li>Gaming</li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
