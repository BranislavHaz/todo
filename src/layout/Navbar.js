import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryItems } from "../redux/categorySlice";
import CategoryAddItem from "../components/CategoryAddItem";
import CategoryListItem from "../components/CategoryListItem";
import CategoryMobileMenu from "../components/CategoryMobileMenu";
import CategoryErrorMessage from "../components/CategoryErrorMessage";

import * as $ from "./Navbar.styled";

const Navbar = () => {
  const { mobileMenu } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const { isCategoryListLoaded } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryItems());
  }, [dispatch]);

  return (
    <>
      <$.Header state={mobileMenu}>
        <CategoryAddItem />
        {isCategoryListLoaded ? <CategoryListItem /> : <CategoryErrorMessage />}
      </$.Header>
      <CategoryMobileMenu />
    </>
  );
};

export default Navbar;
