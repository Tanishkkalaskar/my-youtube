import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import {
  addActiveCategoryVideos,
  clearActiveCategoryVideos,
} from "../utils/VideosSlice";
import MaincontainerShimmer from "./MaincontainerShimmer";
import VideoCard from "./VideoCard";

const CategoryVideos = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((store) => store.videos.activeCategory);
  const activeCategoryVideos = useSelector(
    (store) => store.videos.activeCategoryVideos
  );

  const getActiveCategoryVideos = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_API + activeCategory + YOUTUBE_API_KEY
    );
    const json = await data.json();
    dispatch(addActiveCategoryVideos(json.items));
  };

  useEffect(() => {
    getActiveCategoryVideos();
    return () => dispatch(clearActiveCategoryVideos());
  }, [activeCategory]);

  return !activeCategoryVideos ? (
    <MaincontainerShimmer />
  ) : (
    <div className="flex flex-wrap gap-6">
      {activeCategoryVideos?.map((video) => {
        return (
          <Link key={video.id.videoId} to={"watch?v=" + video.id.videoId}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryVideos;
