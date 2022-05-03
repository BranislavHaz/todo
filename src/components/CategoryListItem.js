import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenu } from "../redux/globalSlice";

import * as $ from "./CategoryListItem.styled";

const CategoryListItem = () => {
  const dispatch = useDispatch();
  const { categoryListItems } = useSelector((state) => state.category);

  const handleClick = () => {
    dispatch(setMobileMenu(false));
  };

  const getListItems = () => {
    return categoryListItems
      ?.slice()
      .sort((a, b) => (a > b ? 1 : -1))
      .map((el) => {
        return (
          <$.Item key={el.id}>
            <Link to={`/todolist/${el.id}`} onClick={handleClick}>
              {el.name}
            </Link>
          </$.Item>
        );
      });
  };

  return (
    <$.Wrap>
      <$.List>{getListItems()}</$.List>
    </$.Wrap>
  );
};

export default CategoryListItem;
