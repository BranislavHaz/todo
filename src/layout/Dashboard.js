import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import FilterTodoItems from "../components/FilterTodoItems";
import SearchTodoItems from "../components/SearchTodoItems";
import AddTodoItem from "../components/AddTodoItem";
import Index from "../components/pages/Index";
import TodoList from "../components/TodoList";
import NotExist from "../components/pages/NotExist";

import { DashboardWrap } from "./Dashboard.styled";

const Dashboard = () => {
  const { showAddTodoForm } = useSelector((state) => state.todo);

  return (
    <DashboardWrap>
      <SearchTodoItems />
      <FilterTodoItems />
      {showAddTodoForm && <AddTodoItem />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todolist/:id" element={<TodoList />} />
        <Route path="*" element={<NotExist />} />
      </Routes>
    </DashboardWrap>
  );
};

export default Dashboard;
