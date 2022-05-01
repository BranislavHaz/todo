import { createSlice } from "@reduxjs/toolkit";
import { setCategories, setTodo } from "./todoSlice";

const initialState = {
  loadCategories: false,
  loadItems: false,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {},
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

export default errorSlice.reducer;
