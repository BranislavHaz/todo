import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todoList: null,
  urlParams: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.todoList = action.payload;
    },
    setUrlParams: (state, action) => {
      state.urlParams = action.payload;
    },
  },
});

export const { setItems, setUrlParams } = todoSlice.actions;

export default todoSlice.reducer;

// Load todo items
export const getTodoItems = (id) => {
  return (dispatch) => {
    axios
      .get(
        `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${id}/todolist`
      )
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
      .post(
        `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${id}/todolist`,
        {
          listId: id,
          title: data.title,
          text: data.text,
          deadline: +new Date(data.deadline),
          isCompleted: false,
        }
      )
      .then(
        axios
          .get(
            `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${id}/todolist`
          )
          .then((resp) => dispatch(setItems(resp.data)))
      );
  };
};
