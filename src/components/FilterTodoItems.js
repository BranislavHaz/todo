import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveFilter } from "../redux/globalSlice";

import {
  FilterWrap,
  FilterList,
  FilterElement,
  FilterLink,
} from "./FilterTodoItems.styled";

const FilterTodoItems = () => {
  const { activeFilter } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setActiveFilter(e.target.id));
  };

  return (
    <FilterWrap>
      <FilterList>
        <FilterElement>
          <FilterLink
            id="all"
            onClick={handleClick}
            href="/"
            state={activeFilter === "all" && "active"}
          >
            Všetky
          </FilterLink>
        </FilterElement>
        <FilterElement>
          <FilterLink
            id="active"
            onClick={handleClick}
            href="/"
            state={activeFilter === "active" && "active"}
          >
            Aktívne
          </FilterLink>
        </FilterElement>
        <FilterElement>
          <FilterLink
            id="done"
            onClick={handleClick}
            href="/"
            state={activeFilter === "done" && "active"}
          >
            Dokončené
          </FilterLink>
        </FilterElement>
      </FilterList>
    </FilterWrap>
  );
};

export default FilterTodoItems;
