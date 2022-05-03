import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenu } from "../redux/globalSlice";

import * as $ from "./CategoryMobileMenu.styled";

import closeMenuIcon from "../img/close-burger.png";
import openMenuIcon from "../img/open-burger.png";

const CategoryMobileMenu = () => {
  const dispatch = useDispatch();
  const { mobileMenu } = useSelector((state) => state.global);

  const handleClick = () => {
    dispatch(setMobileMenu(!mobileMenu));
  };

  return (
    <$.Wrap onClick={handleClick} state={mobileMenu}>
      <$.Icon src={mobileMenu ? closeMenuIcon : openMenuIcon} />
    </$.Wrap>
  );
};

export default CategoryMobileMenu;
