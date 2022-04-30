import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const { todos } = useSelector((state) => state.global);

  useEffect(() => {
    console.log("hello");
  }, [todos]);

  return (
    <div>
      <h1>Active</h1>
      {todos
        ?.filter((todo) => !todo.isCompleted)
        .sort((a, b) => (a.deadline < b.deadline ? 1 : -1))
        .map((todo, id) => {
          return <ToDoItem key={id} data={todo} />;
        })}
    </div>
  );
};

export default ToDoList;
