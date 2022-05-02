import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CategoryError from "./CategoryError";

import {
  CategoryListWrap,
  CategoryListUl,
  CategoryItem,
} from "./CategoryList.styled";

const CategoryList = () => {
  const { categoriesList, errors } = useSelector((state) => state.todo);

  return (
    <CategoryListWrap>
      {errors.categoryError && <CategoryError />}
      <CategoryListUl>
        {!errors.categoryError &&
          categoriesList
            ?.slice()
            .sort((a, b) => (a > b ? 1 : -1))
            .map((el, id) => {
              return (
                <CategoryItem key={id}>
                  <Link to={`/todolist/${el.id}`}>{el.name}</Link>
                </CategoryItem>
              );
            })}
      </CategoryListUl>
    </CategoryListWrap>
  );
};

export default CategoryList;
