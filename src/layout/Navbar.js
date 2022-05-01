import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodoCategories } from "../redux/todoSlice";
import AddTodoCategory from "../components/AddTodoCategory";
import CategoryList from "../components/CategoryList";

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoCategories());
  }, [dispatch]);

  return (
    <nav>
      <AddTodoCategory />
      <CategoryList />
    </nav>
  );
};

export default Navbar;
