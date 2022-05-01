import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodoItems, deleteTodoItem } from "../redux/todoSlice";

const TodoList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { todoList, urlParams } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodoItems(id));
    dispatch(setUrlParams(+id));
  }, [dispatch, id]);

  const handleClick = (e) => {
    dispatch(deleteTodoItem(urlParams, e.target.id));
    dispatch(getTodoItems(urlParams));
  };

  return (
    <div>
      {todoList.map((todo, id) => {
        <div key={id}>
          <p>{todo.text}</p>
          <button id={todo.id} onClick={handleClick}>
            Delete
          </button>
        </div>;
      })}
    </div>
  );
};

export default TodoList;
