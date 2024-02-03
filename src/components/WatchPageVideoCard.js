import React from "react";
import getTimeDifference from "../utils/timeDifference";

const WatchPageVideoCard = ({ snippet }) => {
  const { title, publishedAt, channelTitle, description, thumbnails } = snippet;

  return (
    <div className="flex h-36 gap-4 px-4 mt-4">
      <div className="w-1/3 h-36">
        <img src={thumbnails.medium?.url} />
      </div>
      <div className="w-3/4">
        <h3 className="font-semibold text-md mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {getTimeDifference(publishedAt)}
        </p>
        <p className="text-sm text-gray-600 mb-4">{channelTitle}</p>
      </div>
    </div>
  );
};

export default WatchPageVideoCard;
