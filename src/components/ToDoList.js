import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodoItems, setUrlParams } from "../redux/todoSlice";

import TodoItem from "./TodoItem";

const TodoList = ({ filter }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodoItems(id));
    dispatch(setUrlParams(+id));
  }, [dispatch, id]);

  return (
    <div>
      {filter === "all" &&
        todoList?.map((todo, id) => <TodoItem key={id} data={todo} />)}
      {filter === "active" &&
        todoList
          ?.filter((todo) => !todo.isCompleted)
          .map((todo, id) => <TodoItem key={id} data={todo} />)}
      {filter === "done" &&
        todoList
          ?.filter((todo) => todo.isCompleted)
          .map((todo, id) => <TodoItem key={id} data={todo} />)}
    </div>
  );
};

export default TodoList;
