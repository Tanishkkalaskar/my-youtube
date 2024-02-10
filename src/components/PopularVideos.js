import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_MOST_POPULAR_API } from "../utils/constants";
import { addPopularVideos } from "../utils/VideosSlice";
import MaincontainerShimmer from "./MaincontainerShimmer";
import VideoCard from "./VideoCard";

const PopularVideos = () => {
  const dispatch = useDispatch();
  const popularVideos = useSelector((store) => store.videos.popularVideos);

  const [hasMoreVideos, setHasMoreVideos] = useState(true);
  const nextPageToken = useRef(null);
  const resultsFetchedTillNow = useRef(null);
  const totalResults = useRef(null);
  const shimmer = useRef(null);

  const getPopularVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_API);
    const json = await data.json();
    if (!json?.nextPageToken) setHasMoreVideos(false);
    nextPageToken.current = json?.nextPageToken;
    totalResults.current = json?.pageInfo?.totalResults;
    resultsFetchedTillNow.current = json?.pageInfo?.resultsPerPage;
    dispatch(addPopularVideos(json.items));
  };

  const getMorePopularVideos = async () => {
    if (!nextPageToken.current) {
      setHasMoreVideos(false);
      return;
    }
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&pageToken=" +
        nextPageToken.current +
        "&regionCode=US&key=AIzaSyD2W9i6LQXFYFFqfoOhompPKYkjtAcYXgE"
    );
    const json = await data.json();
    nextPageToken.current = json?.nextPageToken;
    resultsFetchedTillNow.current += json?.pageInfo?.resultsPerPage;
    dispatch(addPopularVideos(json.items));
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  useEffect(() => {
    if (!shimmer.current) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting) getMorePopularVideos();
      },
      { threshold: 0.1 }
    );
    observer.observe(shimmer.current);
    return () => {
      if (shimmer.current) {
        observer.unobserve(shimmer.current);
      }
    };
  }, [popularVideos]);

  return !popularVideos ? (
    <MaincontainerShimmer />
  ) : (
    <div className="flex flex-wrap gap-6">
      {popularVideos?.map((video, index) => {
        return (
          // using index as a key because api is returing duplicate data (using index is not recommended)
          <Link key={index} to={"watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
      {hasMoreVideos && (
        <div ref={shimmer}>
          <MaincontainerShimmer />
        </div>
      )}
    </div>
  );
};

export default PopularVideos;
