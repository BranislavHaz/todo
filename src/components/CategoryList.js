import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const { categoriesList } = useSelector((state) => state.todo);
  const { loadCategories } = useSelector((state) => state.error);

  return (
    <>
      {loadCategories && "Nenašli sa žiadné kategórie"}
      {categoriesList?.map((el, id) => {
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
