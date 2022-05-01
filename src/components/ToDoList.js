import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodoItems, setUrlParams } from "../redux/todoSlice";

import TodoItem from "./TodoItem";

const TodoList = ({ filter }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { searchTerm, todoList } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodoItems(id));
    dispatch(setUrlParams(+id));
  }, [dispatch, id]);

  const filteredItems = todoList?.filter((todo) => {
    if (!searchTerm) {
      return todo;
    } else {
      console.log(todo.text);
      return todo?.title.toLowerCase().includes(searchTerm);
    }
  });

  console.log(filteredItems);

  return (
    <div>
      {filter === "all" &&
        filteredItems?.map((todo, id) => <TodoItem key={id} data={todo} />)}
      {filter === "active" &&
        filteredItems
          ?.filter((todo) => !todo.isCompleted)
          .map((todo, id) => <TodoItem key={id} data={todo} />)}
      {filter === "done" &&
        filteredItems
          ?.filter((todo) => todo.isCompleted)
          .map((todo, id) => <TodoItem key={id} data={todo} />)}
    </div>
  );
};

export default TodoList;
