import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMobileMenu } from "../redux/globalSlice";

import { BurgerWrap, BurgerIcon } from "./CategoryMobileMenu.styled";

import closeMenuIcon from "../img/close-burger.png";
import openMenuIcon from "../img/open-burger.png";

const CategoryMobileMenu = () => {
  const { mobileMenu } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setMobileMenu(!mobileMenu));
  };

  return (
    <BurgerWrap onClick={handleClick} state={mobileMenu}>
      <BurgerIcon src={mobileMenu ? closeMenuIcon : openMenuIcon} />
    </BurgerWrap>
  );
};

export default CategoryMobileMenu;
