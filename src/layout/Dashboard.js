import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import FilterTodoItems from "../components/FilterTodoItems";
import SearchTodoItems from "../components/SearchTodoItems";
import AddTodoItem from "../components/AddTodoItem";
import Index from "../components/pages/Index";
import TodoList from "../components/TodoList";
import Error from "../components/pages/Error";

import { DashboardWrap } from "./Dashboard.styled";

const Dashboard = () => {
  const { todoList, showAddTodoForm } = useSelector((state) => state.todo);

  const isCorrect = useMemo(() => {
    let isCorrect = true;
    !todoList?.length && (isCorrect = false);
    return isCorrect;
  }, [todoList]);

  return (
    <DashboardWrap>
      {isCorrect && (
        <>
          <SearchTodoItems />
          <FilterTodoItems />
        </>
      )}
      {showAddTodoForm && <AddTodoItem />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/todolist/:id"
          element={<TodoList isCorrect={isCorrect} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </DashboardWrap>
  );
};

export default Dashboard;
