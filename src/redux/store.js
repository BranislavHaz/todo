import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";
import todoSlice from "./todoSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    todo: todoSlice,
  },
});
