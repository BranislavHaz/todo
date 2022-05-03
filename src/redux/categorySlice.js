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

// Load category items
export const loadCategoryItems = () => {
  return (dispatch) => {
    axios.get(apiUrl).then((resp) => dispatch(setCategories(resp.data)));
  };
};

// Post category item
export const postTodoCategory = (data) => {
  return (dispatch) => {
    axios
      .post(apiUrl, {
        name: data,
      })
      .then(() => dispatch(loadCategoryItems()));
  };
};

// Delete category item
export const deleteTodoCategory = (idList) => {
  return (dispatch, getState) => {
    axios.delete(`${apiUrl}/${idList}`).then(() => {
      dispatch(loadCategoryItems());
    });
  };
};
