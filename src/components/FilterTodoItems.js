import React from "react";
import { useDispatch } from "react-redux";
import { setActiveFilter } from "../redux/globalSlice";

const FilterTodoItems = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setActiveFilter(e.target.id));
  };

  return (
    <nav>
      <ul>
        <a onClick={handleClick} href="/">
          <li id="all">Všetky</li>
        </a>
        <a onClick={handleClick} href="/">
          <li id="active">Aktívne</li>
        </a>
        <a onClick={handleClick} href="/">
          <li id="done">Dokončené</li>
        </a>
      </ul>
    </nav>
  );
};

export default FilterTodoItems;
