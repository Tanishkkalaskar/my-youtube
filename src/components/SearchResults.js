import React, { useEffect, useState } from "react";
import { json, Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import MaincontainerShimmer from "./MaincontainerShimmer";
import VideoTile from "./VideoTile";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log(searchQuery);
    getSearchResults();
  }, [searchQuery]);

  const getSearchResults = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_API + searchQuery + YOUTUBE_API_KEY
    );
    const json = await data.json();
    setSearchResults(json.items);
    console.log(json);
  };

  return searchResults.length == 0 ? (
    <MaincontainerShimmer />
  ) : (
    <div>
      {searchResults.map((result) => {
        const { videoId } = result.id;
        return (
          <Link to={"/watch?v=" + videoId}>
            {" "}
            <VideoTile
              key={result.id.videoId}
              id={result.id}
              snippet={result.snippet}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;
