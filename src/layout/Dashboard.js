import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "../components/TodoList";

const Dashboard = () => {
  const [filter, setFilter] = useState("all");

  const handleClick = (e) => {
    e.preventDefault();
    setFilter(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <a onClick={handleClick} href="/">
            <li id="all">Všetky</li>
          </a>
          <a onClick={handleClick} href="/">
            <li id="active">Aktívne</li>
          </a>
          <a onClick={handleClick} href="/">
            <li id="done">Dokončené</li>
          </a>
        </ul>
      </nav>
      <Routes>
        <Route path="/todolist/:id" element={<TodoList filter={filter} />} />
      </Routes>
    </>
  );
};

export default Dashboard;
