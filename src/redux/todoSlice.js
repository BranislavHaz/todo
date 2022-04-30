import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: null,
  todoList: null,
  urlParams: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setItems: (state, action) => {
      state.todoList = action.payload;
    },
    setUrlParams: (state, action) => {
      state.urlParams = action.payload;
    },
  },
});

export const { setList, setItems, setUrlParams } = todoSlice.actions;

export default todoSlice.reducer;

// Load todo list
export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get(`https://626abc396a86cd64adb203dd.mockapi.io/api/list`)
      .then((resp) => dispatch(setList(resp.data)));
  };
};

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
    axios
      .post("https://626abc396a86cd64adb203dd.mockapi.io/api/list", {
        name: data,
      })
      .then(
        axios
          .get("https://626abc396a86cd64adb203dd.mockapi.io/api/list")
          .then((resp) => dispatch(setList(resp.data)))
      );
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

// Put a todo item
export const editTodoItem = (idList, idTodo) => {
  return (dispatch) => {
    axios
      .put(
        `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${idList}/todolist/${idTodo}`,
        { isCompleted: true }
      )
      .then(
        axios
          .get(
            `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${idList}/todolist`
          )
          .then((resp) => dispatch(setItems(resp.data)))
      );
  };
};

// Delete a todo item
export const deleteTodoItem = (idList, idTodo) => {
  return (dispatch) => {
    axios
      .delete(
        `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${idList}/todolist/${idTodo}`
      )
      .then(
        axios
          .get(
            `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${idList}/todolist`
          )
          .then((resp) => dispatch(setItems(resp.data)))
      );
  };
};
