import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUrlParams } from "../redux/globalSlice";
import { getTodoList } from "../redux/todoSlice";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { searchTerm, activeFilter } = useSelector((state) => state.global);
  const { todoList } = useSelector((state) => state.todo);
  const { loadItems } = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getTodoList(id));
    dispatch(setUrlParams(+id));
  }, [dispatch, id]);

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
      {loadItems && "ajajaj vyskytla sa chybička"}
      {activeFilter === "all" && filteredItems(activeFilter)}
      {activeFilter === "active" && filteredItems(activeFilter)}
      {activeFilter === "done" && filteredItems(activeFilter)}
    </div>
  );
};

export default TodoList;
