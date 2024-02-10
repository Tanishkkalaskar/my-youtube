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
    closeSidebar: (state) => {
      state.showSidebar = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = configSlice.actions;
export default configSlice.reducer;
