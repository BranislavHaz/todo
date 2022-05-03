import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import TodoSearchItems from "../components/TodoSearchItems";
import TodoAddItem from "../components/TodoAddItem";
import Index from "../components/pages/Index";
import TodoList from "../components/TodoListItem";
import Error from "../components/pages/Error";

import * as $ from "./Dashboard.styled";

const Dashboard = () => {
  const { todoList, isActiveTodoAddForm } = useSelector((state) => state.todo);

  const isCorrect = useMemo(() => {
    let isCorrect = true;
    !todoList?.length && (isCorrect = false);
    return isCorrect;
  }, [todoList]);

  return (
    <$.Wrap>
      {isCorrect && <TodoSearchItems />}
      {isActiveTodoAddForm && <TodoAddItem />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todolist/:id" element={<TodoList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </$.Wrap>
  );
};

export default Dashboard;
