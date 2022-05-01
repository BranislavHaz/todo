import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";
import todoSlice from "./todoSlice";
import errorSlice from "./errorSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    todo: todoSlice,
    error: errorSlice,
  },
});
