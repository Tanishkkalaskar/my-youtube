import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import useCurrentVideo from "../utils/useCurrentVideo";
import CommentList from "./CommentList";
import LiveChatList from "./LiveChatList";
import VideoInfo from "./VideoInfo";
import VideoInfoShimmer from "./VideoInfoShimmer";
import WatchPageVideoCard from "./WatchPageVideoCard";

const WatchPage = () => {
  const currentWatchVideo = useSelector(
    (store) => store.videos.currentWatchVideo
  );
  const recommendedVideos = useSelector((store) => store.videos.popularVideos);
  const activeCategory = useSelector((store) => store.config.activeCategory);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useCurrentVideo(id);

  return (
    <div className="w-full p-6 flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[70%] lg:h-[100vh] flex flex-col overflow-y-auto">
        <iframe
          className="w-full aspect-video rounded-lg"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        {!currentWatchVideo ? (
          <VideoInfoShimmer />
        ) : (
          <>
            <VideoInfo info={currentWatchVideo} />
            <CommentList id={id} />
          </>
        )}
      </div>
      <div className="w-full lg:w-[30%] lg:h-[100vh] overflow-y-auto">
        <LiveChatList />
        {recommendedVideos
          ?.filter((video) => video.id != id)
          .map((video, index) => {
            const id = activeCategory == "All" ? video.id : video.id.videoId;

            return (
              <Link key={index} to={"/watch?v=" + id}>
                <WatchPageVideoCard snippet={video.snippet} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default WatchPage;
