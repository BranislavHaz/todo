import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://626abc396a86cd64adb203dd.mockapi.io/api/list";

const initialState = {
  categoryListItems: [],
  categoryCurrentName: "",
  isCategoryListLoaded: true,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryList: (state, action) => {
      state.categoryListItems = action.payload;
    },
    setCategoryName: (state, action) => {
      state.categoryCurrentName = action.payload;
    },
    setCategoryLoad: (state, action) => {
      state.isCategoryListLoaded = action.payload;
    },
  },
});

export const { setCategoryList, setCategoryName, setCategoryLoad } =
  categorySlice.actions;

export default categorySlice.reducer;

// Get category items
export const getCategoryItems = () => {
  return (dispatch) => {
    axios
      .get(baseUrl)
      .then((resp) => dispatch(setCategoryList(resp.data)))
      .then(() => dispatch(setCategoryLoad(true)))
      .catch(() => dispatch(setCategoryLoad(false)));
  };
};

// Post category item
export const postCategoryItems = (data) => {
  return (dispatch) => {
    axios
      .post(baseUrl, {
        name: data,
      })
      .then(() => dispatch(getCategoryItems()));
  };
};
