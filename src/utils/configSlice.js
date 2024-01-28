import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    showSidebar: true,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggleSidebar } = configSlice.actions;
export default configSlice.reducer;
