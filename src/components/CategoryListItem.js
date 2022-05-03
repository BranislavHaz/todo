import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoryErrorMessage from "./CategoryErrorMessage";

import {
  CategoryListWrap,
  CategoryListUl,
  CategoryItem,
} from "./CategoryListItem.styled";

const CategoryListItem = () => {
  const { urlParams } = useSelector((state) => state.global);
  const { categoriesList, errors } = useSelector((state) => state.todo);

  return (
    <CategoryListWrap>
      {errors.categoryError && <CategoryErrorMessage />}
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

export default CategoryListItem;
