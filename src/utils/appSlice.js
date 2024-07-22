import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    video: [],
    category: "All",
    searchSuggestion: [],
  },
  reducers: {
    // action
    setHomeVideo: (state, action) => {
      state.video = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchSuggestion: (state, action) => {
      state.searchSuggestion = action.payload;
    },
  },
});
export const { setHomeVideo, setCategory, setSearchSuggestion } =
  appSlice.actions;
export default appSlice.reducer;
