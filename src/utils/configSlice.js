import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    showSidebar: true,
    activeCategory: "All",
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.showSidebar = !state.showSidebar;
    },
    closeSidebar: (state) => {
      state.showSidebar = false;
    },
    updateActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { toggleSidebar, closeSidebar, updateActiveCategory } =
  configSlice.actions;
export default configSlice.reducer;
