import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  YOUTUBE_API,
  YOUTUBE_API_KEY,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { addPopularVideos } from "../utils/VideosSlice";
import MaincontainerShimmer from "./MaincontainerShimmer";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((store) => store.config.activeCategory);
  const popularVideos = useSelector((store) => store.videos.popularVideos);

  const getPopularVideos = async () => {
    if (activeCategory === "All") {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      dispatch(addPopularVideos(json.items));
    }
  };

  const getActiveCategoryVideos = async () => {
    if (activeCategory !== "All") {
      const data = await fetch(
        YOUTUBE_SEARCH_API + activeCategory + YOUTUBE_API_KEY
      );
      const json = await data.json();
      dispatch(addPopularVideos(json.items));
    } else {
      getPopularVideos();
    }
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  useEffect(() => {
    getActiveCategoryVideos();
  }, [activeCategory]);

  return !popularVideos ? (
    <MaincontainerShimmer></MaincontainerShimmer>
  ) : (
    <div className="flex flex-wrap gap-6">
      {popularVideos?.map((video) => {
        const id = activeCategory == "All" ? video.id : video.id.videoId;
        return (
          <Link key={id} to={"watch?v=" + id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
