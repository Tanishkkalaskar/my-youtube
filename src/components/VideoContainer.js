import { useSelector } from "react-redux";
import CategoryVideos from "./CategoryVideos";
import PopularVideos from "./PopularVideos";

const VideoContainer = () => {
  const activeCategory = useSelector((store) => store.videos.activeCategory);
  return activeCategory === "All" ? <PopularVideos /> : <CategoryVideos />;
};

export default VideoContainer;
