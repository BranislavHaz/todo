import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import * as $ from "./CategoryListItem.styled";

const CategoryListItem = () => {
  const { categoryListItems } = useSelector((state) => state.category);

  const getListItems = useCallback(() => {
    return categoryListItems
      ?.slice()
      .sort((a, b) => (a > b ? 1 : -1))
      .map((el, id) => {
        return (
          <$.Item key={id}>
            <Link to={`/todolist/${el.id}`}>{el.name}</Link>
          </$.Item>
        );
      });
  }, [categoryListItems]);

  return (
    <$.Wrap>
      <$.List>{getListItems()}</$.List>
    </$.Wrap>
  );
};

export default CategoryListItem;
