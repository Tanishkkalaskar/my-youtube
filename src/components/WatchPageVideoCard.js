import React from "react";
import getTimeDifference from "../utils/timeDifference";

const WatchPageVideoCard = ({ snippet }) => {
  const { title, publishedAt, channelTitle, description, thumbnails } = snippet;

  return (
    <div className="flex h-20 gap-2 px-1 mt-8 lg:h-36 lg:gap-4 lg:px-4 lg:mt-4">
      <div className="w-1/3 h-20 lg:h-36">
        <img src={thumbnails.medium?.url} />
      </div>
      <div className="w-3/4">
        <h3 className="font-semibold text-sm mb-2 lg:text-md lg:mb-2">
          {title}
        </h3>
        <p className="text-xs mb-2 lg:text-sm lg:mb-4 text-gray-600">
          {getTimeDifference(publishedAt)}
        </p>
        <p className="text-xs mb-2 lg:text-sm lg:mb-4 text-gray-600 ">
          {channelTitle}
        </p>
      </div>
    </div>
  );
};

export default WatchPageVideoCard;
