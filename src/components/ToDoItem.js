import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoItem, editTodoItem } from "../redux/todoSlice";

import * as $ from "./TodoItem.styled";

import deleteIcon from "../img/delete.png";
import doneIcon from "../img/done.png";
import incompleteIcon from "../img/incomplete.png";

const TodoItem = ({ data }) => {
  const dispatch = useDispatch();
  const { urlParams, activeFilter } = useSelector((state) => state.global);
  const date = new Date(data.deadline).toLocaleString();

  const [isDeleted, setIsDeleted] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleDelete = (e) => {
    dispatch(deleteTodoItem(urlParams, e.target.id));
    setIsDeleted(true);
    setTimeout(() => {
      setIsDeleted(false);
    }, [500]);
  };

  const handleEdit = (e) => {
    dispatch(editTodoItem(urlParams, e.target.id));
    if (activeFilter !== "all") {
      setIsDone(true);
      setTimeout(() => {
        setIsDone(false);
      }, [500]);
    }
  };

  return (
    <$.Wrap state={(isDeleted && "delete") || (isDone && "done")}>
      <$.Column>
        <$.Date>{date}</$.Date>
        <$.Title>{data.title}</$.Title>
        <$.Text>{data.text}</$.Text>
      </$.Column>
      <$.Column>
        <$.Icon
          src={data.isCompleted ? doneIcon : incompleteIcon}
          id={data.id}
          onClick={handleEdit}
        />
        <$.Icon src={deleteIcon} id={data.id} onClick={handleDelete} />
      </$.Column>
    </$.Wrap>
  );
};

export default TodoItem;
