import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getToDoItems } from "../redux/globalSlice";

const ToDoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.global);

  useEffect(() => {
    // aj v AddToDoForm.js
    dispatch(getToDoItems(1));
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

useEffect(() => {
  ...some actions
}, [reduxStateObject]);
