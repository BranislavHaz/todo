import React from "react";
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
  const { urlParams } = useSelector((state) => state.global);
  const { showAddTodoForm } = useSelector((state) => state.todo);

  return (
    <DashboardWrap>
      {urlParams && <SearchTodoItems />}
      {urlParams && <FilterTodoItems />}
      {showAddTodoForm && <AddTodoItem />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todolist/:id" element={<TodoList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </DashboardWrap>
  );
};

export default Dashboard;
