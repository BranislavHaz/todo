import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenu } from "../redux/globalSlice";

import * as $ from "./CategoryMobileMenu.styled";

import closeMenuIcon from "../img/close-burger.png";
import openMenuIcon from "../img/open-burger.png";

const CategoryMobileMenu = () => {
  const dispatch = useDispatch();
  const { showMobileMenu } = useSelector((state) => state.global);

  const handleClick = () => {
    dispatch(setMobileMenu(!showMobileMenu));
  };

  return (
    <$.Wrap onClick={handleClick} state={showMobileMenu}>
      <$.Icon src={showMobileMenu ? closeMenuIcon : openMenuIcon} />
    </$.Wrap>
  );
};

export default CategoryMobileMenu;
