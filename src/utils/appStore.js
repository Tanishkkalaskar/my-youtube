import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import videosReducer from "./VideosSlice";
import searchReducer from "./SearchSlice";

const appStore = configureStore({
  reducer: {
    config: configReducer,
    videos: videosReducer,
    search: searchReducer,
  },
});

export default appStore;
