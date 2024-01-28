import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  let { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  const imgUrl = thumbnails.medium.url;

  function calculateDaysDifference(givenDateStr) {
    // Convert the given date string to a Date object
    const givenDate = new Date(givenDateStr);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = currentDate - givenDate;

    // Convert milliseconds to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
  }

  const daysDifference = calculateDaysDifference(publishedAt);
  title = title.length > 50 ? title.slice(0, 79) + "..." : title;

  return (
    <div className="w-72">
      <div>
        <img src={imgUrl} />
      </div>
      <div>
        <h4 className="font-bold my-2">{title}</h4>
        <p className="text-gray-600">{channelTitle}</p>
        <p className="text-gray-600">
          {viewCount} views ・ {daysDifference} days ago
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
