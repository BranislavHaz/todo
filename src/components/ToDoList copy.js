import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getToDoItems } from "../redux/globalSlice";

const ToDoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.global);
  const [activeItems, setActiveItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  useEffect(() => {
    dispatch(getToDoItems(1));
    todos?.map((todo) => {
      todo.isCompleted
        ? setCompletedItems((prev) => [...prev, todo])
        : setActiveItems((prev) => [...prev, todo]);
    });
    console.log(completedItems);
    console.log(activeItems);
  }, [dispatch]);

  return (
    <div>
      <h1>Completed</h1>
      {completedItems?.map((todo, id) => {
        const date = new Date(todo.deadline).toLocaleString();
        // const date = new Date(todo.deadline).toLocaleDateString();
        // const date = new Date(todo.deadline).toLocaleTimeString();

        return (
          <div key={id}>
            <h1>{todo.title}</h1>
            <p>{todo.text}</p>
            <p>{date}</p>
          </div>
        );
      })}

      <h1>Active</h1>
      {activeItems?.map((todo, id) => {
        const date = new Date(todo.deadline).toLocaleString();
        // const date = new Date(todo.deadline).toLocaleDateString();
        // const date = new Date(todo.deadline).toLocaleTimeString();

        return (
          <div key={id}>
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
