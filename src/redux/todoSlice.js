import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://626abc396a86cd64adb203dd.mockapi.io/api/list";

const initialState = {
  todoList: [],
  isTodoListLoaded: true,
  isTodoListAvailable: true,
  isActiveTodoAddForm: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    setStateTodoLoad: (state, action) => {
      state.isTodoListLoaded = action.payload;
    },
    setStateTodoAvailable: (state, action) => {
      state.isTodoListAvailable = action.payload;
    },
    setTodoAddForm: (state, action) => {
      state.isActiveTodoAddForm = action.payload;
    },
  },
});

export const {
  setTodoList,
  setStateTodoLoad,
  setStateTodoAvailable,
  setTodoAddForm,
} = todoSlice.actions;

export default todoSlice.reducer;

// Load todo items
export const getTodoList = (idList) => {
  return (dispatch) => {
    dispatch(() => setTodoList([]));
    axios
      .get(`${baseUrl}/${idList}/todolist`)
      .then((resp) => {
        dispatch(setTodoList(resp.data));
        dispatch(setStateTodoLoad(true));
        dispatch(setStateTodoAvailable(true));
      })
      .catch(() => {
        dispatch(setTodoList([]));
        dispatch(setStateTodoLoad(false));
        axios
          .head(`${baseUrl}/${idList}`)
          .then(() => dispatch(setStateTodoAvailable(true)))
          .catch(() => dispatch(setStateTodoAvailable(false)));
      });
  };
};

// Post todo item
export const postTodoItem = (idList, data) => {
  return (dispatch) => {
    axios
      .post(`${baseUrl}/${idList}/todolist`, {
        listId: idList,
        title: data.title,
        text: data.text,
        deadline: +new Date(data.deadline),
        isCompleted: false,
      })
      .then(() => dispatch(getTodoList(idList)));
  };
};

// Edit todo item
export const editTodoItem = (idList, idTodo) => {
  return (dispatch, getState) => {
    const list = getState().todo.todoList;
    const isCompleted = list.find((todo) => todo.id === idTodo).isCompleted;

    axios
      .put(`${baseUrl}/${idList}/todolist/${idTodo}`, {
        isCompleted: !isCompleted,
      })
      .then(() => dispatch(getTodoList(idList)));
  };
};

// Delete todo item
export const deleteTodoItem = (idList, idTodo) => {
  return (dispatch) => {
    axios
      .delete(`${baseUrl}/${idList}/todolist/${idTodo}`)
      .then(() => dispatch(getTodoList(idList)));
  };
};
