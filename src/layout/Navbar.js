import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodoCategories } from "../redux/todoSlice";
import CategoryAddItem from "../components/CategoryAddItem";
import CategoryListItem from "../components/CategoryListItem";
import CategoryMobileMenu from "../components/CategoryMobileMenu";

import { Header } from "./Navbar.styled";

const Navbar = () => {
  const { mobileMenu } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoCategories());
  }, [dispatch]);

  return (
    <>
      <Header state={mobileMenu}>
        <CategoryAddItem />
        <CategoryListItem />
      </Header>
      <CategoryMobileMenu />
    </>
  );
};

export default Navbar;
