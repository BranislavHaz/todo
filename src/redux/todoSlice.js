import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  searchTerm: null,
  list: null,
  todoList: null,
  urlParams: null,
  activeFilter: "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
    setItems: (state, action) => {
      state.todoList = action.payload;
    },
    setUrlParams: (state, action) => {
      state.urlParams = action.payload;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setList,
  setItems,
  setUrlParams,
  setActiveFilter,
} = todoSlice.actions;

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
export const getTodoItems = (idList) => {
  return (dispatch) => {
    axios
      .get(
        `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${idList}/todolist`
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
      .then(() => dispatch(getTodoList()));
  };
};

// Post a todo item
export const postTodoItem = (idList, data) => {
  return (dispatch) => {
    axios
      .post(
        `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${idList}/todolist`,
        {
          listId: idList,
          title: data.title,
          text: data.text,
          deadline: +new Date(data.deadline),
          isCompleted: false,
        }
      )
      .then(() => dispatch(getTodoItems(idList)));
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
      .then(() => dispatch(getTodoItems(idList)));
  };
};

// Delete a todo item
export const deleteTodoItem = (idList, idTodo) => {
  return (dispatch) => {
    axios
      .delete(
        `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${idList}/todolist/${idTodo}`
      )
      .then(() => dispatch(getTodoItems(idList)));
  };
};
