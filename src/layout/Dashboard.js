import React, { useCallback, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TodoFilterItems from "../components/TodoFilterItems";
import TodoSearchItems from "../components/TodoSearchItems";
import TodoAddItem from "../components/TodoAddItem";
import Index from "../components/pages/Index";
import TodoList from "../components/TodoListItem";
import Error from "../components/pages/Error";
import { setUrlParams, setMobileMenu } from "../redux/globalSlice";
import { getTodoList } from "../redux/todoSlice";

import { DashboardWrap } from "./Dashboard.styled";

const Dashboard = () => {
  const { id } = useParams();
  const { todoList, showAddTodoForm, errors } = useSelector(
    (state) => state.todo
  );
  const dispatch = useDispatch();

  const isCorrect = useMemo(() => {
    let isCorrect = true;
    !todoList?.length && (isCorrect = false);
    return isCorrect;
  }, [todoList]);

  return (
    <DashboardWrap>
      {isCorrect && (
        <>
          <TodoSearchItems />
        </>
      )}
      {showAddTodoForm && <TodoAddItem />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todolist/:id" element={<TodoList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </DashboardWrap>
  );
};

export default Dashboard;
