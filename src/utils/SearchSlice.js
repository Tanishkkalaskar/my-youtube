import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSearchSuggestions: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { cacheSearchSuggestions } = SearchSlice.actions;
export default SearchSlice.reducer;
