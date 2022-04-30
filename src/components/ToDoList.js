import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodoItems } from "../redux/todoSlice";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodoItems(1));
  }, [dispatch]);

  return (
    <div>
      <h1>Active</h1>
      {todo
        ?.filter((todo) => !todo.isCompleted)
        .sort((a, b) => (a.deadline < b.deadline ? 1 : -1))
        .map((todo, id) => {
          return <TodoItem key={id} data={todo} />;
        })}
    </div>
  );
};

export default TodoList;
