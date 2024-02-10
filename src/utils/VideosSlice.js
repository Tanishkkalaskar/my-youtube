import { createSlice } from "@reduxjs/toolkit";

const VideosSlice = createSlice({
  name: "videos",
  initialState: {
    popularVideos: null,
    activeCategoryVideos: null,
    activeCategory: "All",
    currentWatchVideo: null,
    channelDetails: null,
    comments: null,
  },
  reducers: {
    addPopularVideos: (state, action) => {
      if (!state.popularVideos) {
        state.popularVideos = action.payload;
      } else {
        state.popularVideos = [...state.popularVideos, ...action.payload];
      }
    },
    updateActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    addActiveCategoryVideos: (state, action) => {
      state.activeCategoryVideos = action.payload;
    },
    clearActiveCategoryVideos: (state, action) => {
      state.activeCategoryVideos = null;
    },
    addCurrentWatchVideo: (state, action) => {
      state.currentWatchVideo = action.payload;
    },
    addChannelDetails: (state, action) => {
      state.channelDetails = action.payload;
    },
    addComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const {
  addPopularVideos,
  updateActiveCategory,
  addActiveCategoryVideos,
  clearActiveCategoryVideos,
  addCurrentWatchVideo,
  addChannelDetails,
  addComments,
} = VideosSlice.actions;
export default VideosSlice.reducer;
