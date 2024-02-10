import React from "react";
import getTimeDifference from "../utils/timeDifference";
import LikeIcon from "../assets/LikeIcon.svg";

const Comment = ({ snippet }) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textOriginal,
  } = snippet;
  return (
    <div className="flex w-full my-4 lg:my-8">
      <div>
        <img src={authorProfileImageUrl} className="h-10 rounded-full" />
      </div>
      <div className="pl-4 w-full">
        <h4 className="mb-1 lg:mb-2">
          <span className="font-semibold text-sm lg:text-l">
            {authorDisplayName}
          </span>
          <span className="ml-2 text-sm lg:text-lg text-gray-500">
            {getTimeDifference(publishedAt)}
          </span>
        </h4>
        <p className="mb-1 text-sm lg:text-lg lg:mb-2">{textOriginal}</p>
        <div className="flex gap-3 lg:gap-6 items-center">
          <div className="flex gap-1 items-center hover:bg-gray-100 p-2 hover:rounded-full">
            <img src={LikeIcon} className="w-3 lg:w-5" />
            <span className="text-sm lg:text-l">{likeCount}</span>
          </div>
          <div className="rotate-180 hover:bg-gray-100 p-2 hover:rounded-full -z-10">
            <img src={LikeIcon} className="w-3 lg:w-5" />
          </div>
          <button className="p-2 text-sm lg:text-l hover:bg-gray-100 hover:rounded-full">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
