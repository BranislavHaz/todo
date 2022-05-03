import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";
import categorySlice from "./categorySlice";
import todoSlice from "./todoSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    category: categorySlice,
    todo: todoSlice,
  },
});
