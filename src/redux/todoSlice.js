import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://626abc396a86cd64adb203dd.mockapi.io/api/list";

const initialState = {
  categoriesList: null,
  todoList: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categoriesList = action.payload;
    },
    setTodo: (state, action) => {
      state.todoList = action.payload;
    },
  },
});

export const { setCategories, setTodo } = todoSlice.actions;

export default todoSlice.reducer;

// Load todo categories
export const getTodoCategories = () => {
  return (dispatch) => {
    axios.get(apiUrl).then((resp) => dispatch(setCategories(resp.data)));
  };
};

// Post todo category
export const postTodoCategory = (data) => {
  return (dispatch) => {
    axios
      .post(apiUrl, {
        name: data,
      })
      .then(() => dispatch(getTodoCategories()));
  };
};

// Load todo items
export const getTodoList = (idList) => {
  return (dispatch, getState) => {
    axios
      .get(`${apiUrl}/${idList}/todolist`)
      .then((resp) => dispatch(setTodo(resp.data)));
  };
};

// Post todo item
export const postTodoItem = (idList, data) => {
  return (dispatch) => {
    axios
      .post(`${apiUrl}/${idList}/todolist`, {
        listId: idList,
        title: data.title,
        text: data.text,
        deadline: +new Date(data.deadline),
        isCompleted: false,
      })
      .then(() => dispatch(getTodoList(idList)));
  };
};

// Mark as done todo item
export const editTodoItem = (idList, idTodo) => {
  return (dispatch) => {
    axios
      .put(`${apiUrl}/${idList}/todolist/${idTodo}`, { isCompleted: true })
      .then(() => dispatch(getTodoList(idList)));
  };
};

// Delete todo item
export const deleteTodoItem = (idList, idTodo) => {
  return (dispatch) => {
    axios
      .delete(`${apiUrl}/${idList}/todolist/${idTodo}`)
      .then(() => dispatch(getTodoList(idList)));
  };
};
