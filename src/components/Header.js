import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_ICON,
  YOUTUBE_LOGO,
  USER_ICON,
  SEARCH_ICON,
  YOUTUBE_SEARCH_SUGGESTIONS_API,
} from "../utils/constants";
import { toggleSidebar } from "../utils/configSlice";
import { cacheSearchSuggestions } from "../utils/SearchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cachedSearchResults = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedSearchResults[searchQuery]) {
        setSearchSuggestions(cachedSearchResults[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(
      cacheSearchSuggestions({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSearch = () => {
    if (!searchQuery) return;
    navigate("/results?search_query=" + searchQuery);
  };

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="sticky top-0 grid grid-flow-col p-1 lg:p-6 shadow-md items-center bg-white">
      <div className="flex col-span-1 gap-1 lg:gap-4">
        <img
          className="h-5 lg:h-9 cursor-pointer"
          alt="hamburger-icon"
          src={HAMBURGER_ICON}
          onClick={handleSidebarToggle}
        />
        <Link to="/">
          {" "}
          <img className="h-5 lg:h-9" alt="youtube-logo" src={YOUTUBE_LOGO} />
        </Link>
      </div>
      <div className="col-span-10">
        <div className="flex">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search"
            className="w-1/2 p-0.5 lg:p-3 border border-gray-400 rounded-l-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              setTimeout(() => setShowSuggestions(false), 200);
            }}
          />
          <button
            className="p-2 lg:p-4 bg-slate-100  border-gray-400 border border-l-0 rounded-r-full"
            onClick={handleSearch}
          >
            <img className="h-2 lg-h-4" src={SEARCH_ICON} />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed w-[9.5rem] lg:w-[53rem] border border-gray-200 border-t-0 rounded-xl shadow-md">
            {searchSuggestions.map((suggestions) => (
              <li
                key={suggestions}
                className="bg-white p-1 lg:p-2 list-none flex gap-4 items-center hover:bg-slate-100 cursor-default"
                onClick={() => {
                  setSearchQuery(suggestions);
                  handleSearch();
                }}
              >
                <img className="h-3 lg:h-8" src={SEARCH_ICON} />
                <span className="text-xs lg:text-lg">{suggestions}</span>
              </li>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-end col-span-1">
        <img className="h-4 lg:h-9" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
