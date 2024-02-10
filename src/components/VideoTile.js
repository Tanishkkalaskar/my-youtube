import React from "react";
import getTimeDifference from "../utils/timeDifference";

const VideoTile = ({ snippet }) => {
  const { title, publishedAt, channelTitle, description, thumbnails } = snippet;

  return (
    <div className="px-4 lg:px-10 mt-8 flex gap-4 lg:gap-8">
      <div>
        <img src={thumbnails.medium.url} />
      </div>
      <div>
        <h3 className="font-semibold text-sm lg:text-xl mb-1 lg:mb-2">
          {title}
        </h3>
        <p className="text-xs lg:text-l text-gray-600 mb-1 lg:mb-4">
          {getTimeDifference(publishedAt)}
        </p>
        <p className="text-xs lg:text-l text-gray-600 mb-1 lg:mb-4">
          {channelTitle}
        </p>
        <p className="text-xs lg:text-l text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default VideoTile;
