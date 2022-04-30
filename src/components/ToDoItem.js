import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodoItem, getTodoItems, editTodoItem } from "../redux/todoSlice";

const TodoItem = ({ data }) => {
  const { urlParams } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const date = new Date(data.deadline).toLocaleString();
  // const date = new Date(todo.deadline).toLocaleDateString();
  // const date = new Date(todo.deadline).toLocaleTimeString();

  const handleDelete = (e) => {
    dispatch(deleteTodoItem(urlParams, e.target.id));
    dispatch(getTodoItems(urlParams));
  };

  const handleEdit = (e) => {
    dispatch(editTodoItem(urlParams, e.target.id));
    dispatch(getTodoItems(urlParams));
  };

  return (
    <div className="ano">
      <p>{data.id}</p>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <p>{date}</p>
      <button id={data.id} onClick={handleEdit}>
        dokončené
      </button>
      <button id={data.id} onClick={handleDelete}>
        vymazať
      </button>
    </div>
  );
};

export default TodoItem;
