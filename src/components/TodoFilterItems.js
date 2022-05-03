import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFilter } from "../redux/globalSlice";

import * as $ from "./TodoFilterItems.styled";

const TodoFilterItems = () => {
  const dispatch = useDispatch();
  const { activeFilter } = useSelector((state) => state.global);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setActiveFilter(e.target.id));
  };

  return (
    <$.Wrap>
      <$.List>
        <$.Element>
          <$.Link
            id="all"
            onClick={handleClick}
            href="/"
            state={activeFilter === "all" && "active"}
          >
            Všetky
          </$.Link>
        </$.Element>
        <$.Element>
          <$.Link
            id="active"
            onClick={handleClick}
            href="/"
            state={activeFilter === "active" && "active"}
          >
            Aktívne
          </$.Link>
        </$.Element>
        <$.Element>
          <$.Link
            id="done"
            onClick={handleClick}
            href="/"
            state={activeFilter === "done" && "active"}
          >
            Dokončené
          </$.Link>
        </$.Element>
      </$.List>
    </$.Wrap>
  );
};

export default TodoFilterItems;
