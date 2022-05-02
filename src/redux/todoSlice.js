import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://626abc396a86cd64adb203dd.mockapi.io/api/list";

const initialState = {
  categoriesList: [],
  todoList: [],
  showAddTodoForm: false,
  errors: {
    todoError: false,
    categoryError: false,
  },
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
    showAddTodoForm: (state, action) => {
      state.showAddTodoForm = action.payload;
    },
    setError: (state, action) => {
      switch (action.payload.type) {
        case "todo":
          state.errors.todoError = action.payload.state;
          break;
        case "category":
          state.errors.categoryError = action.payload.state;
          break;
        default:
          break;
      }
    },
  },
});

export const { setCategories, setTodo, showAddTodoForm, setError } =
  todoSlice.actions;

export default todoSlice.reducer;

// Load todo categories
export const getTodoCategories = () => {
  return (dispatch) => {
    axios
      .get(apiUrl)
      .then((resp) => dispatch(setCategories(resp.data)))
      .then(() => dispatch(setError({ type: "category", state: false })))
      .catch(() => dispatch(setError({ type: "category", state: true })));
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

// Delete todo category
export const deleteTodoCategory = (idList) => {
  return (dispatch) => {
    axios
      .delete(`${apiUrl}/${idList}`)
      .then(() => dispatch(getTodoCategories()));
  };
};

// Load todo items
export const getTodoList = (idList) => {
  return (dispatch) => {
    axios
      .get(`${apiUrl}/${idList}/todolist`)
      .then((resp) => dispatch(setTodo(resp.data)))
      .then(() => dispatch(setError({ type: "todo", state: false })))
      .catch(() => dispatch(setError({ type: "todo", state: true })));
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

// Edit todo item
export const editTodoItem = (idList, idTodo) => {
  return (dispatch, getState) => {
    const list = getState().todo.todoList;
    const isCompleted = list.find((todo) => todo.id === idTodo).isCompleted;

    axios
      .put(`${apiUrl}/${idList}/todolist/${idTodo}`, {
        isCompleted: !isCompleted,
      })
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
