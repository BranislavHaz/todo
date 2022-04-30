import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todo: null,
};

export const todoSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { setItems } = todoSlice.actions;

export default todoSlice.reducer;

// Load todo items
export const getTodoItems = (id) => {
  return (dispatch) => {
    axios
      .get(`https://626abc396a86cd64adb203dd.mockapi.io/api/list/${id}/todo`)
      .then((resp) => dispatch(setItems(resp.data)));
  };
};

// Post a list name
export const postTodoList = (data) => {
  return (dispatch) => {
    axios.post("https://626abc396a86cd64adb203dd.mockapi.io/api/list", {
      name: data,
    });
  };
};

// Post a todo item
export const postTodoItem = (id, data) => {
  return (dispatch) => {
    axios
      .post(`https://626abc396a86cd64adb203dd.mockapi.io/api/list/${id}/todo`, {
        listId: id,
        title: data.title,
        text: data.text,
        deadline: +new Date(data.deadline),
        isCompleted: false,
      })
      .then(
        axios
          .get(
            `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${id}/todo`
          )
          .then((resp) => dispatch(setItems(resp.data)))
      );
  };
};
