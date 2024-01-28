import { createSlice } from "@reduxjs/toolkit";

const VideosSlice = createSlice({
  name: "videos",
  initialState: {
    popularVideos: null,
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
  },
});

export const { addPopularVideos } = VideosSlice.actions;
export default VideosSlice.reducer;
