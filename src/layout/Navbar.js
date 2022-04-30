import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodoList } from "../redux/todoSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  return (
    <nav>
      {list?.map((el) => {
        return <Link to={`/todolist/${el.id}`}>{el.name}</Link>;
      })}
    </nav>
  );
};

export default Navbar;
