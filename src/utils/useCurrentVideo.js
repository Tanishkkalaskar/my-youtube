import { YOUTUBE_API_KEY, YOUTUBE_WATCH_API } from "../utils/constants";
import { closeSidebar } from "../utils/configSlice";

import { addCurrentWatchVideo } from "../utils/VideosSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const useCurrentVideo = (id) => {
  const dispatch = useDispatch();

  const popularVideos = useSelector((store) => store.videos.popularVideos);
  const currentWatchVideo = useSelector(
    (store) => store.videos.currentWatchVideo
  );

  useEffect(() => {
    dispatch(closeSidebar());

    searchInPouplarVideos();
    if (!currentWatchVideo) {
      getCurrentVideoInfo();
    }

    return () => dispatch(addCurrentWatchVideo(null));
  }, []);

  const searchInPouplarVideos = () => {
    popularVideos?.map((video) => {
      if (video.id === id) {
        dispatch(addCurrentWatchVideo(video));
        return;
      }
    });
  };

  const getCurrentVideoInfo = async () => {
    const data = await fetch(YOUTUBE_WATCH_API + id + YOUTUBE_API_KEY);
    const json = await data.json();
    dispatch(addCurrentWatchVideo(json.items[0]));
  };
};

export default useCurrentVideo;
