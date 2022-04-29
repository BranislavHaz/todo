/* import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../redux/globalSlice";

const ToDoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.global);

  useEffect(() => {
    async function getToDoItems(id) {
      const response = await fetch(
        `https://626abc396a86cd64adb203dd.mockapi.io/api/list/${id}/todos`
      );
      const data = await response.json();
      dispatch(setItems(data));
    }
    getToDoItems(2);
  }, [dispatch]);

  return (
    <div>
      <h1>ahoj</h1>
      {todos?.map((todo) => {
        return <div>{todo.title}</div>;
      })}
    </div>
  );
};

export default ToDoList; */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getToDoItems } from "../redux/globalSlice";

const ToDoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(getToDoItems(2));
  }, [dispatch]);

  return (
    <div>
      <h1>ahoj</h1>
      {todos?.map((todo) => {
        const date = new Date(todo.deadline).toLocaleString();
        // const date = new Date(todo.deadline).toLocaleDateString();
        // const date = new Date(todo.deadline).toLocaleTimeString();

        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.text}</p>
            <p>{date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
