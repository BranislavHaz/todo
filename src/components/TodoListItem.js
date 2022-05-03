import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUrlParams } from "../redux/globalSlice";
import { setActiveFilter, setMobileMenu } from "../redux/globalSlice";
import { getTodoList, showAddTodoForm } from "../redux/todoSlice";

import TodoFilterItems from "./TodoFilterItems";
import TodoItem from "./TodoItem";
import TodoErrorMessage from "./TodoErrorMessage";

import {
  TodoListWrap,
  TodoListTitle,
  AddTodoButton,
} from "./TodoListItem.styled";

const TodoListItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { searchTerm, activeFilter } = useSelector((state) => state.global);
  const { categoriesList, todoList, errors } = useSelector(
    (state) => state.todo
  );
  const [categoryName, setCategoryName] = useState(null);

  /*   const getCategoryName = () => {
    const currentCategory = categoriesList?.find(
      (category) => category.id === id
    );
    setCategoryName(currentCategory.name);
  }; */

  useEffect(() => {
    dispatch(getTodoList(id));
    dispatch(setUrlParams(+id));
    dispatch(setActiveFilter("all"));
    dispatch(setMobileMenu(false));
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
      <TodoListTitle>{categoryName && categoryName}</TodoListTitle>
      <AddTodoButton onClick={handleClick} />
      <TodoFilterItems />
      {errors.todoError ? <TodoErrorMessage /> : filteredItems(activeFilter)}
    </TodoListWrap>
  );
};

export default TodoListItem;
