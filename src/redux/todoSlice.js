import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://626abc396a86cd64adb203dd.mockapi.io/api/list";

const initialState = {
  searchTerm: null,
  categories: null,
  todoList: null,
  urlParams: null,
  activeFilter: "all",
  contentError: false,
  modalError: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
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
    setContentError: (state, action) => {
      state.contentError = action.payload;
    },
    setModalError: (state, action) => {
      state.modalError = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setCategories,
  setItems,
  setUrlParams,
  setActiveFilter,
  setContentError,
  setModalError,
} = todoSlice.actions;

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
      .then(() => dispatch(getTodoCategories()))
      .then(() => dispatch(setModalError(false)))
      .catch(() => {
        dispatch(setModalError(true));
      });
  };
};

// Load todo items
export const getTodoItems = (idList) => {
  return (dispatch) => {
    axios
      .get(`${apiUrl}/${idList}/todolist`)
      .then((resp) => dispatch(setItems(resp.data)))
      .then(() => dispatch(setContentError(false)))
      .catch(() => {
        dispatch(setContentError(true));
      });
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
      .then(() => dispatch(getTodoItems(idList)))
      .then(() => dispatch(setModalError(false)))
      .catch(() => {
        dispatch(setModalError(true));
      });
  };
};

// Mark as done todo item
export const editTodoItem = (idList, idTodo) => {
  return (dispatch) => {
    axios
      .put(`${apiUrl}/${idList}/todolist/${idTodo}`, { isCompleted: true })
      .then(() => dispatch(getTodoItems(idList)))
      .then(() => dispatch(setModalError(false)))
      .catch(() => {
        dispatch(setModalError(true));
      });
  };
};

// Delete todo item
export const deleteTodoItem = (idList, idTodo) => {
  return (dispatch) => {
    axios
      .delete(`${apiUrl}/${idList}/todolist/${idTodo}`)
      .then(() => dispatch(getTodoItems(idList)))
      .then(() => dispatch(setModalError(false)))
      .catch(() => {
        dispatch(setModalError(true));
      });
  };
};
