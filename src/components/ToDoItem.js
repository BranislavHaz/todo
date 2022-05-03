import React, { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodoItem, editTodoItem } from "../redux/todoSlice";

import {
  TodoItemWrap,
  TodoItemColumn,
  ActionItem,
  DeadlineTodo,
  TitleTodo,
  TextTodo,
} from "./TodoItem.styled";

import deleteIcon from "../img/delete.png";
import doneIcon from "../img/done.png";
import incompleteIcon from "../img/incomplete.png";

const TodoItem = ({ data }) => {
  const { urlParams, activeFilter } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const date = new Date(data.deadline).toLocaleString();
  // const date = new Date(todo.deadline).toLocaleDateString();
  // const date = new Date(todo.deadline).toLocaleTimeString();
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
    if (activeFilter === "active") {
      setIsDone(true);
      setTimeout(() => {
        setIsDone(false);
      }, [500]);
    }
  };

  return (
    <Suspense fallback={<p>loading...</p>}>
      <TodoItemWrap state={(isDeleted && "delete") || (isDone && "done")}>
        <TodoItemColumn>
          <DeadlineTodo>{date}</DeadlineTodo>
          <TitleTodo>{data.title}</TitleTodo>
          <TextTodo>{data.text}</TextTodo>
        </TodoItemColumn>
        <TodoItemColumn>
          <ActionItem
            src={data.isCompleted ? doneIcon : incompleteIcon}
            id={data.id}
            onClick={handleEdit}
          />
          <ActionItem src={deleteIcon} id={data.id} onClick={handleDelete} />
        </TodoItemColumn>
      </TodoItemWrap>
    </Suspense>
  );
};

export default TodoItem;
