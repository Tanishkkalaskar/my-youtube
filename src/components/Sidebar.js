import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon.svg";
import SubscriptionIcon from "../assets/SubscriptionIcon.svg";
import ExploreIcon from "../assets/ExploreIcon.svg";
import LibraryIcon from "../assets/LibraryIcon.svg";
import HistoryIcon from "../assets/HistoryIcon.svg";
import WatchLaterIcon from "../assets/WatchLaterIcon.svg";
import LikeIcon from "../assets/LikeIcon.svg";
import YourVideosIcon from "../assets/YourVideosIcon.svg";

const Sidebar = () => {
  const showSidebar = useSelector((store) => store.config.showSidebar);

  return !showSidebar ? null : (
    <div className="w-72 mr-4 p-5 shadow-md">
      <section className="border-gray-200 border-b-2 p-2">
        <ul className="text-xl">
          <Link to="/">
            <li className="flex gap-6">
              <img className="h-6" src={HomeIcon} />
              <span>Home</span>
            </li>
          </Link>
          <li className="flex gap-5 mt-6">
            <img className="h-6" src={SubscriptionIcon} />
            <span>Subscriptions</span>
          </li>
          <li className="flex gap-5 mt-6">
            <img className="h-6" src={ExploreIcon} />
            <span>Explore</span>
          </li>
        </ul>
      </section>
      <section className="border-gray-200 border-b-2 p-2">
        <ul className="text-xl">
          <li className="flex gap-6 mt-5">
            <img className="h-6" src={LibraryIcon} />
            <span>Library</span>
          </li>
          <li className="flex gap-6 mt-5">
            <img className="h-6" src={HistoryIcon} />
            <span>History</span>
          </li>
          <li className="flex gap-6 mt-5">
            <img className="h-6" src={YourVideosIcon} />
            <span>Your videos</span>
          </li>
          <li className="flex gap-6 mt-5">
            <img className="h-6" src={WatchLaterIcon} />
            <span>Watch later</span>
          </li>
          <li className="flex gap-6 mt-5">
            <img className="h-6" src={LikeIcon} />
            <span>Liked videos</span>
          </li>
        </ul>
      </section>
      <section className="border-gray-200 border-b-2 p-2">
        <ul className="text-xl">
          <li className="flex gap-6 mt-5">
            <img className="h-6" src={LibraryIcon} />
            <span>Library</span>
          </li>
          <li className="flex gap-6 mt-5">
            <img className="h-6" src={HistoryIcon} />
            <span>History</span>
          </li>
          <li className="flex gap-6 mt-5">
            <img className="h-6" src={YourVideosIcon} />
            <span>Your videos</span>
          </li>
          <li className="flex gap-6 mt-5">
            <img className="h-6" src={WatchLaterIcon} />
            <span>Watch later</span>
          </li>
          <li className="flex gap-6 mt-5">
            <img className="h-6" src={LikeIcon} />
            <span>Liked videos</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
