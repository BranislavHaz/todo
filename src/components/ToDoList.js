import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUrlParams } from "../redux/globalSlice";
import { getTodoList } from "../redux/todoSlice";
import { setNotFound } from "../redux/errorSlice";

import TodoItem from "./TodoItem";
import NotExist from "./pages/NotExist";

const TodoList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { searchTerm, activeFilter } = useSelector((state) => state.global);
  const { categoriesList, todoList } = useSelector((state) => state.todo);
  const { loadCategories, loadItems, notFound } = useSelector(
    (state) => state.error
  );

  useEffect(() => {
    dispatch(getTodoList(id));
    dispatch(setUrlParams(+id));

    categoriesList?.length >= id
      ? dispatch(setNotFound(false))
      : dispatch(setNotFound(true));
  }, [dispatch, id, categoriesList]);

  const searchedItems = todoList?.filter((todo) => {
    if (!searchTerm) {
      return todo;
    } else {
      return todo?.title.toLowerCase().includes(searchTerm);
    }
  });

  const filteredItems = (filter) => {
    let filtered = searchedItems;

    if (filter === "active")
      filtered = searchedItems?.filter((todo) => !todo.isCompleted);

    if (filter === "done")
      filtered = searchedItems?.filter((todo) => todo.isCompleted);

    return filtered?.map((todo, id) => <TodoItem key={id} data={todo} />);
  };

  return (
    <div>
      {((loadCategories || loadItems) && "ajajaj vyskytla sa chybička") ||
        (notFound && <NotExist />)}
      {activeFilter === "all" && filteredItems(activeFilter)}
      {activeFilter === "active" && filteredItems(activeFilter)}
      {activeFilter === "done" && filteredItems(activeFilter)}
    </div>
  );
};

export default TodoList;
