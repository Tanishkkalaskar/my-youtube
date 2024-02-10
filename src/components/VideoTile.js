import React from "react";
import getTimeDifference from "../utils/timeDifference";

const VideoTile = ({ snippet }) => {
  const { title, publishedAt, channelTitle, description, thumbnails } = snippet;

  return (
    <div className="px-4 flex gap-4 lg:px-10 lg:h-52 lg:gap-0">
      <div className="w-1/3 h-36">
        <img src={thumbnails.medium.url} />
      </div>
      <div className="w-3/4">
        <h3 className="font-semibold text-sm lg:text-2xl mb-1 lg:mb-2">
          {title}
        </h3>
        <p className="text-xs lg:text-xl text-gray-600 mb-1 lg:mb-4">
          {getTimeDifference(publishedAt)}
        </p>
        <p className="text-xs lg:text-xl text-gray-600 mb-1 lg:mb-4">
          {channelTitle}
        </p>
        <p className="text-xs lg:text-xl text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default VideoTile;
