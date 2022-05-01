import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const { categories } = useSelector((state) => state.todo);

  return (
    <>
      {categories?.map((el, id) => {
        return (
          <Link key={id} to={`/todolist/${el.id}`}>
            {el.name}
          </Link>
        );
      })}
    </>
  );
};

export default CategoryList;
