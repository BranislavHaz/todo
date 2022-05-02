import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUrlParams } from "../redux/globalSlice";
import { getTodoList, setFilter, showAddTodoForm } from "../redux/todoSlice";

import TodoItem from "./TodoItem";
import NotExist from "./pages/NotExist";

import { TodoListWrap, AddTodoButton } from "./TodoList.styled";

const TodoList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { searchTerm, activeFilter } = useSelector((state) => state.global);
  const { categoriesList, todoList } = useSelector((state) => state.todo);

  /*   useEffect(() => {
    dispatch(getTodoList(id));
    dispatch(setUrlParams(+id));
  }, [dispatch, id, categoriesList]); */

  useEffect(() => {
    dispatch(getTodoList(id));
    dispatch(setUrlParams(+id));
  }, [id]);

  const searchedItems = todoList?.filter((todo) => {
    if (!searchTerm) {
      return todo;
    } else {
      return todo?.title.toLowerCase().includes(searchTerm);
    }
  });

  const filteredItems = (filter) => {
    let filtered = searchedItems;

    if (filter === "active") {
      filtered = searchedItems?.filter((todo) => !todo.isCompleted);
    }

    if (filter === "done") {
      filtered = searchedItems?.filter((todo) => todo.isCompleted);
    }

    return filtered
      ?.sort((a, b) => (a > b ? 1 : -1))
      .map((todo, id) => <TodoItem key={id} data={todo} />);
  };

  const handleClick = () => {
    dispatch(showAddTodoForm(true));
  };

  return (
    <TodoListWrap>
      <AddTodoButton onClick={handleClick} />
      {filteredItems(activeFilter)}
      {/* {activeFilter === "all" && filteredItems(activeFilter)}
      {activeFilter === "active" && filteredItems(activeFilter)}
      {activeFilter === "done" && filteredItems(activeFilter)} */}
    </TodoListWrap>
  );
};

export default TodoList;
