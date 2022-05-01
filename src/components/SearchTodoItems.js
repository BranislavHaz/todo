import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/todoSlice";

const SearchTodoItems = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  return (
    <>
      <input onChange={handleChange} type="text" />
    </>
  );
};

export default SearchTodoItems;
