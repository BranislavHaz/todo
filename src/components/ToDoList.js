import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodoItems, setUrlParams } from "../redux/todoSlice";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { searchTerm, todoList, activeFilter, contentError } = useSelector(
    (state) => state.todo
  );

  useEffect(() => {
    dispatch(getTodoItems(id));
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
      {contentError && "ajajaj vyskytla sa chybička"}
      {activeFilter === "all" && filteredItems(activeFilter)}
      {activeFilter === "active" && filteredItems(activeFilter)}
      {activeFilter === "done" && filteredItems(activeFilter)}
    </div>
  );
};

export default TodoList;
