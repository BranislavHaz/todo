import React from "react";

const ToDoItem = ({ data }) => {
  const date = new Date(data.deadline).toLocaleString();
  // const date = new Date(todo.deadline).toLocaleDateString();
  // const date = new Date(todo.deadline).toLocaleTimeString();

  return (
    <div>
      <p>{data.id}</p>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <p>{date}</p>
    </div>
  );
};

export default ToDoItem;
