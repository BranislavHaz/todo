import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getToDoItems } from "../redux/globalSlice";

import ToDoList from "../components/ToDoList";

const ToDoWall = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToDoItems(1));
  }, [dispatch]);

  return (
    <>
      <ToDoList />
    </>
  );
};

export default ToDoWall;
