import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodoCategories } from "../redux/todoSlice";
import AddTodoCategory from "../components/AddTodoCategory";
import CategoryList from "../components/CategoryList";

import { Header } from "./Navbar.styled";

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoCategories());
  }, [dispatch]);

  return (
    <Header>
      <AddTodoCategory />
      <CategoryList />
    </Header>
  );
};

export default Navbar;
