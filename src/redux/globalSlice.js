import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

// Load todo items
export const getToDoItems = (id) => {
  return (dispatch) => {
    axios
      .get(`https://626abc396a86cd64adb203dd.mockapi.io/api/list/${id}/todos`)
      .then((resp) => dispatch(setItems(resp.data)));
  };
};

// Post a list name
export const postNameList = (data) => {
  return (dispatch) => {
    axios.post("https://626abc396a86cd64adb203dd.mockapi.io/api/list", {
      name: data,
    });
  };
};

// Post a todo item
export const postToDoItem = (id, data) => {
  return (dispatch) => {
    axios.post(
      `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${id}/todos`,
      {
        listId: id,
        title: data.title,
        text: data.text,
        deadline: +new Date(data.deadline),
        isCompleted: false,
      }
    );
  };
};
