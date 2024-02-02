import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_API, YOUTUBE_API_KEY } from "../utils/constants";
import { addPopularVideos } from "../utils/VideosSlice";
import MaincontainerShimmer from "./MaincontainerShimmer";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const popularVideos = useSelector((store) => store.videos.popularVideos);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();

    dispatch(addPopularVideos(json.items));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return !popularVideos ? (
    <MaincontainerShimmer></MaincontainerShimmer>
  ) : (
    <div className="flex flex-wrap gap-6 px-5">
      {popularVideos.map((video) => (
        <Link key={video.id} to={"watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
