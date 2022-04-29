import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./redux/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});
