import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useCurrentVideo from "../utils/useCurrentVideo";
import CommentList from "./CommentList";
import LiveChatList from "./LiveChatList";
import VideoInfo from "./VideoInfo";
import WatchPageVideoCard from "./WatchPageVideoCard";

const WatchPage = () => {
  const currentWatchVideo = useSelector(
    (store) => store.videos.currentWatchVideo
  );
  const recommendedVideos = useSelector((store) => store.videos.popularVideos);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useCurrentVideo(id);

  return (
    <div className="w-full p-6 flex gap-4">
      <div className="w-[70%] h-[100vh] flex flex-col overflow-y-auto">
        <iframe
          className="w-full aspect-video rounded-lg"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        {currentWatchVideo && (
          <>
            <VideoInfo info={currentWatchVideo} />
            <CommentList id={id} />
          </>
        )}
      </div>
      <div className="w-[30%] h-[100vh] overflow-y-auto">
        <LiveChatList />
        {recommendedVideos?.map((video) => (
          <WatchPageVideoCard key={video.id} snippet={video.snippet} />
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
