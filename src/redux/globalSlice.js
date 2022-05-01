import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: null,
  urlParams: null,
  activeFilter: "all",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setUrlParams: (state, action) => {
      state.urlParams = action.payload;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { setSearchTerm, setUrlParams, setActiveFilter } =
  globalSlice.actions;

export default globalSlice.reducer;
