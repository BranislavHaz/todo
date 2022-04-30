import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodoItems, setUrlParams } from "../redux/todoSlice";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodoItems(+id));
    dispatch(setUrlParams(+id));
  }, [dispatch]);

  return (
    <div>
      <h1>{id}</h1>
      {todoList
        ?.filter((todo) => !todo.isCompleted)
        .sort((a, b) => (a.deadline < b.deadline ? 1 : -1))
        .map((todo, id) => {
          return <TodoItem key={id} data={todo} />;
        })}
    </div>
  );
};

export default TodoList;
