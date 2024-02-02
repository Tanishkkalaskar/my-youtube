import { createSlice } from "@reduxjs/toolkit";

const VideosSlice = createSlice({
  name: "videos",
  initialState: {
    popularVideos: null,
    currentWatchVideo: null,
    channelDetails: null,
    comments: null,
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
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
  addCurrentWatchVideo,
  addChannelDetails,
  addComments,
} = VideosSlice.actions;
export default VideosSlice.reducer;
