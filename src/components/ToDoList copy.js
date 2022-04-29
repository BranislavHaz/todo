import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getToDoItems } from "../redux/globalSlice";

const ToDoList = () => {
  const dispatch = useDispatch();
  const { currentItems } = useSelector((state) => state.global);

  // dispatch for get data to currentItems
  useEffect(() => {
    dispatch(getToDoItems(1));
  }, [dispatch]);

  /*   const todos = currentItems?.map((todo) => ({
    title: todo.title,
  })); */

  return (
    <div>
      <h1>ahoj</h1>
      {currentItems?.map((todo) => {
        <div>{todo.title}</div>;
      })}
    </div>
  );
};

export default ToDoList;
