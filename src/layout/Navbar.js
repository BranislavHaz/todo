import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodoCategories } from "../redux/todoSlice";
import AddTodoCategory from "../components/AddTodoCategory";

const Navbar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodoCategories());
  }, [dispatch]);

  return (
    <nav>
      <AddTodoCategory />
      {categories?.map((el, id) => {
        return (
          <Link key={id} to={`/todolist/${el.id}`}>
            {el.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
