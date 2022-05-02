import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/globalSlice";

import { SearchBar } from "./SearchTodoItems.styled";

const SearchTodoItems = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  return (
    <SearchBar onChange={handleChange} type="text" placeholder="Hľadať..." />
  );
};

export default SearchTodoItems;
