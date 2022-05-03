import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: null,
  urlParams: null,
  activeFilter: "all",
  mobileMenu: false,
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
    setMobileMenu: (state, action) => {
      state.mobileMenu = action.payload;
    },
  },
});

export const { setSearchTerm, setUrlParams, setActiveFilter, setMobileMenu } =
  globalSlice.actions;

export default globalSlice.reducer;
