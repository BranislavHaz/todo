import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoCategory } from "../redux/todoSlice";
import CategoryError from "./CategoryError";

import {
  CategoryListWrap,
  CategoryListUl,
  CategoryItem,
  DeleteCategory,
} from "./CategoryList.styled";

import delteIcon from "../img/delete-category.png";

const CategoryList = () => {
  const { categoriesList, errors } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteTodoCategory(e.target.id));
  };

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
                  <DeleteCategory
                    src={delteIcon}
                    onClick={handleDelete}
                    id={el.id}
                  />
                  <Link to={`/todolist/${el.id}`}>{el.name}</Link>
                </CategoryItem>
              );
            })}
      </CategoryListUl>
    </CategoryListWrap>
  );
};

export default CategoryList;
