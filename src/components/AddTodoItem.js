import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postTodoItem, showAddTodoForm } from "../redux/todoSlice";

import {
  AddTodoWrap,
  CloseTodoForm,
  AddTodoForm,
  InputWrap,
  InputTodoTitle,
  InputTodoText,
  InputTodoDate,
  InputTodoSubmit,
  ErrorMessage,
} from "./AddTodoItem.styled";

import closeIcon from "../img/close.png";

const schema = yup.object().shape({
  title: yup
    .string()
    .min(1, "Zadajte minimálne 1 znak.")
    .max(20, "Maximálny povolený počet znakov je 20.")
    .required("Toto pole je povinné."),
  text: yup
    .string()
    .min(2, "Zadajte minimálne 2 znaky.")
    .max(300, "Maximálny povolený počet znakov je 300.")
    .required("Toto pole je povinné."),
  deadline: yup
    .date()
    .min(new Date(), "Zadajte dátum väčší ako momentálny.")
    .required("Toto pole je povinné.")
    .typeError("Vyplňte prosím dátum deadlinu."),
});

const AddTodoItem = () => {
  const formRef = useRef(null);
  const { urlParams } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    formRef.current.reset();
    dispatch(postTodoItem(urlParams, data));
    reset();
    dispatch(showAddTodoForm(false));
  };

  const handleClick = () => {
    dispatch(showAddTodoForm(false));
  };

  return (
    <AddTodoWrap>
      <AddTodoForm
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
        id="add-todo-item"
      >
        <InputWrap>
          <InputTodoTitle placeholder="Názov úlohy" {...register("title")} />
          {errors.title && <ErrorMessage>{errors.title?.message}</ErrorMessage>}
        </InputWrap>
        <InputWrap>
          <InputTodoText
            placeholder="Podrobný popis úlohy"
            form="add-todo-item"
            {...register("text")}
          />
          {errors.text && <ErrorMessage>{errors.text?.message}</ErrorMessage>}
        </InputWrap>
        <InputWrap>
          <InputTodoDate {...register("deadline")} />
          {errors.deadline && (
            <ErrorMessage>{errors.deadline?.message}</ErrorMessage>
          )}
        </InputWrap>
        <InputTodoSubmit />
        <CloseTodoForm src={closeIcon} onClick={handleClick} />
      </AddTodoForm>
    </AddTodoWrap>
  );
};

export default AddTodoItem;
