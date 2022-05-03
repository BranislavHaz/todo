import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUrlParams } from "../redux/globalSlice";
import { setActiveFilter } from "../redux/globalSlice";
import { getTodoList, setTodoAddForm } from "../redux/todoSlice";

import TodoFilterItems from "./TodoFilterItems";
import TodoItem from "./TodoItem";
import TodoErrorMessage from "./TodoErrorMessage";

import * as $ from "./TodoListItem.styled";

const TodoListItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { searchTerm, activeFilter } = useSelector((state) => state.global);
  const { categoryListItems } = useSelector((state) => state.category);
  const { todoList, isTodoListLoaded, isTodoListAvailable } = useSelector(
    (state) => state.todo
  );

  const getCategoryName = () => {
    const currentCategory = categoryListItems?.find(
      (category) => category.id === id
    );
    return currentCategory?.name;
  };

  useEffect(() => {
    dispatch(getTodoList(id));
    dispatch(setUrlParams(+id));
    dispatch(setActiveFilter("all"));
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
    dispatch(setTodoAddForm(true));
  };

  return (
    <$.Wrap>
      <$.Title>{getCategoryName()}</$.Title>
      {isTodoListAvailable && <$.Button onClick={handleClick} />}
      {isTodoListLoaded && <TodoFilterItems />}
      {isTodoListLoaded ? filteredItems(activeFilter) : <TodoErrorMessage />}
    </$.Wrap>
  );
};

export default TodoListItem;
