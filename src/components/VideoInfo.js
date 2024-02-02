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
      <h2 className="font-bold text-3xl">{title}</h2>
      <div className="flex my-4 justify-between">
        <div className="flex gap-4 items-center ">
          <img
            className="w-12 rounded-full"
            src={channelDetails.snippet.thumbnails.medium.url}
          />
          <div>
            <p className="font-semibold text-xl">{channelTitle}</p>
            <p className="text-gray-700 text-sm">
              {channelDetails.statistics.subscriberCount}
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex bg-gray-100 rounded-full">
            <p className="flex gap-1 items-center p-4 border-r-2 border-gray-200">
              <img src={LikeIcon} className="w-7" />
              {likeCount}
            </p>
            <p className="rotate-180 p-4">
              <img src={LikeIcon} className="w-7" />
            </p>
          </div>

          <p className="flex gap-2 items-center bg-gray-100 rounded-full px-6 py-4">
            <img src={ShareIcon} className="w-7" />
            <span>Share</span>
          </p>
          <p className="flex gap-2 items-center bg-gray-100 rounded-full px-6 py-4">
            <img src={SaveIcon} className="w-7" />
            <span>Save</span>
          </p>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-semibold text-l my-2">
          {viewCount} views &nbsp;&nbsp; {formattedDate}
        </h4>
        <p className="text-l">{description}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
