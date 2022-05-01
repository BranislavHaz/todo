import React from "react";
import { Routes, Route } from "react-router-dom";
import FilterTodoItems from "../components/FilterTodoItems";
import SearchTodoItems from "../components/SearchTodoItems";
import Index from "../components/pages/Index";
import TodoList from "../components/TodoList";
import NotExist from "../components/pages/NotExist";

const Dashboard = () => {
  return (
    <>
      <SearchTodoItems />
      <FilterTodoItems />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todolist/:id" element={<TodoList />} />
        <Route path="*" element={<NotExist />} />
      </Routes>
    </>
  );
};

export default Dashboard;
