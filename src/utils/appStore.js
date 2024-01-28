import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import videosReducer from "./VideosSlice";

const appStore = configureStore({
  reducer: {
    config: configReducer,
    videos: videosReducer,
  },
});

export default appStore;
