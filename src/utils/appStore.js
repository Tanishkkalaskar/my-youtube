import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import videosReducer from "./VideosSlice";
import searchReducer from "./SearchSlice";
import chatReducer from "./chatSlice";

const appStore = configureStore({
  reducer: {
    config: configReducer,
    videos: videosReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default appStore;
