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
      .get(`https://xxx.mockapi.io/api/list/${id}/todolist`)
      .then((resp) => dispatch(setItems(resp.data)));
  };
};

// Delete todo item
export const deleteTodoItem = (idList, idTodo) => {
  return (dispatch) => {
    axios
      .delete(`https://xxx.mockapi.io/api/list/${idList}/todolist/${idTodo}`)
      .then(
        axios
          .get(`https://xxx.mockapi.io/api/list/${idList}/todolist`)
          .then((resp) => dispatch(setItems(resp.data)))
      );
  };
};
