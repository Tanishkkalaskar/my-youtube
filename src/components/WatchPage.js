import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  return (
    <div className="w-[60%]">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default WatchPage;
