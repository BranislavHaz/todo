import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/globalSlice";

import * as $ from "./TodoSearchItems.styled";

const TodoSearchItems = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  const handleBlur = (e) => {
    e.target.value = "";
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  return (
    <$.Input
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Hľadať..."
    />
  );
};

export default TodoSearchItems;
