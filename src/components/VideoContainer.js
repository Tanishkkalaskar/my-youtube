import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API } from "../utils/constants";
import { addPopularVideos } from "../utils/VideosSlice";
import MaincontainerShimmer from "./MaincontainerShimmer";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const popularVideos = useSelector((store) => store.videos.popularVideos);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json.items);
    dispatch(addPopularVideos(json.items));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return !popularVideos ? (
    <MaincontainerShimmer></MaincontainerShimmer>
  ) : (
    <div className="flex flex-wrap gap-4 justify-center">
      {popularVideos.map((video) => (
        <VideoCard key={video.id} info={video}></VideoCard>
      ))}
    </div>
  );
};

export default VideoContainer;
