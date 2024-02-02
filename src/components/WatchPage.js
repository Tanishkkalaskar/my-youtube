import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useCurrentVideo from "../utils/useCurrentVideo";
import CommentList from "./CommentList";

import VideoInfo from "./VideoInfo";

const WatchPage = () => {
  const currentWatchVideo = useSelector(
    (store) => store.videos.currentWatchVideo
  );

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useCurrentVideo(id);

  return (
    <div className="w-full">
      <div className="w-[70%] p-8 flex flex-col">
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
    </div>
  );
};

export default WatchPage;
