import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_API } from "../utils/constants";
import { addChannelDetails } from "../utils/VideosSlice";
import LikeIcon from "../assets/LikeIcon.svg";
import ShareIcon from "../assets/Share.svg";
import SaveIcon from "../assets/SaveIcon.svg";

const VideoInfo = ({ info }) => {
  const dispatch = useDispatch();
  const channelDetails = useSelector((store) => store.videos.channelDetails);

  const { snippet, statistics } = info;
  const { channelId, channelTitle, title, description, publishedAt } = snippet;
  const { viewCount, likeCount } = statistics;

  const originalDate = new Date(publishedAt);

  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = originalDate.toLocaleDateString("en-GB", options);

  useEffect(() => {
    getChannelDetails();
    return () => dispatch(addChannelDetails(null));
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_API + channelId + YOUTUBE_API_KEY);
    const json = await data.json();
    dispatch(addChannelDetails(json.items[0]));
  };

  return !channelDetails ? null : (
    <div className="my-4">
      <h2 className="font-bold text-md lg:text-3xl">{title}</h2>
      <div className="flex my-4 justify-between">
        <div className="flex gap-1 lg:gap-4 items-center ">
          <img
            className="w-5 lg:w-12 rounded-full"
            src={channelDetails.snippet.thumbnails.medium.url}
          />
          <div>
            <p className="font-semibold text-xs lg:text-xl">{channelTitle}</p>
            <p className="text-gray-700 text-xs lg:text-sm">
              {channelDetails.statistics.subscriberCount}
            </p>
          </div>
          <button className="p-1 lg:px-4 lg:py-2  bg-black text-xs lg:text-lg text-white rounded-full">
            Subscribe
          </button>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="flex gap-4 lg:gap-0 lg:bg-gray-100 rounded-full">
            <p className="flex gap-1 items-center lg:p-4 lg:border-r-2 lg:border-gray-200">
              <img src={LikeIcon} className="w-4 lg:w-7" />
              <span className="hidden lg:inline-block">{likeCount}</span>
            </p>
            <p className="rotate-180 lg:p-4">
              <img src={LikeIcon} className="w-4 lg:w-7" />
            </p>
          </div>

          <p className="flex gap-2 items-center lg:bg-gray-100 rounded-full lg:px-6 lg:py-4">
            <img src={ShareIcon} className="w-4 lg:w-7" />
            <span className="hidden lg:inline-block">Share</span>
          </p>
          <p className="flex lg:gap-2 items-center lg:bg-gray-100 lg:rounded-full lg:px-6 lg:py-4">
            <img src={SaveIcon} className="w-4 lg:w-7" />
            <span className="hidden lg:inline-block">Save</span>
          </p>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-semibold text-sm lg:text-l my-2">
          {viewCount} views &nbsp;&nbsp; {formattedDate}
        </h4>
        <p className="text-sm lg:text-l">{description}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
