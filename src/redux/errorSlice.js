import { createSlice } from "@reduxjs/toolkit";
import { setCategories, setTodo } from "./todoSlice";

const initialState = {
  loadCategories: false,
  loadItems: false,
  notFound: false,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setNotFound: (state, action) => {
      state.notFound = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setCategories, (state, action) => {
      action.payload.length > 0
        ? (state.loadCategories = false)
        : (state.loadCategories = true);
    });
    builder.addCase(setTodo, (state, action) => {
      action.payload.length > 0
        ? (state.loadItems = false)
        : (state.loadItems = true);
    });
  },
});

export const { setNotFound } = errorSlice.actions;

export default errorSlice.reducer;
