import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { setItems } = globalSlice.actions;

export default globalSlice.reducer;

// Post a list name
export const postNameList = createAsyncThunk(
  "global/postNameList",
  async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data,
      }),
    };

    fetch(
      "https://626abc396a86cd64adb203dd.mockapi.io/api/list",
      requestOptions
    );
  }
);

// Load todo items
export const getToDoItems = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${id}/todos`
    );
    const data = await response.json();
    dispatch(setItems(data));
  };
};
