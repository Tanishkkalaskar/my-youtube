import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_API } from "../utils/constants";
import getTimeDifference from "../utils/timeDifference";
import formatViews from "../utils/viewCount";

const VideoCard = ({ info }) => {
  const [channelDetails, setChannelDetails] = useState(null);
  const { snippet, statistics } = info;
  let { channelId, channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  const imgUrl = thumbnails.medium.url;

  title = title.length > 50 ? title.slice(0, 65) + "..." : title;

  // useEffect(() => {
  //   getChannelDetails();
  // }, []);

  // const getChannelDetails = async () => {
  //   const data = await fetch(YOUTUBE_CHANNEL_API + channelId + YOUTUBE_API_KEY);
  //   const json = await data.json();
  //   setChannelDetails(json.items[0]);
  // };

  return (
    <div className="w-72">
      <div>
        <img className="rounded-2xl hover:rounded-none" src={imgUrl} />
      </div>
      <div>
        <h4 className="font-bold my-2">{title}</h4>
        <div className="flex items-center gap-2 mb-1">
          {/* {channelDetails && (
            <img
              className="w-8 rounded-full"
              src={channelDetails.snippet.thumbnails.medium.url}
            />
          )} */}
          <p className="text-gray-600">{channelTitle}</p>
        </div>

        <p className="text-gray-600">
          {formatViews(viewCount)} ・ {getTimeDifference(publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
