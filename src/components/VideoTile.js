import React from "react";
import getTimeDifference from "../utils/timeDifference";

const VideoTile = ({ snippet }) => {
  const { title, publishedAt, channelTitle, description, thumbnails } = snippet;

  return (
    <div className="px-10 mt-8 flex gap-8">
      <div>
        <img src={thumbnails.medium.url} />
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-l text-gray-600 mb-4">
          {getTimeDifference(publishedAt)}
        </p>
        <p className="text-l text-gray-600 mb-4">{channelTitle}</p>
        <p className="text-l text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default VideoTile;
