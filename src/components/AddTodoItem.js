import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postTodoItem, getTodoItems } from "../redux/todoSlice";

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
  const { urlParams } = useSelector((state) => state.todo);
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
    dispatch(getTodoItems(urlParams));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <input type="text" {...register("title")} />
      {errors.title && <span>{errors.title?.message}</span>}
      <input type="text" {...register("text")} />
      {errors.text && <span>{errors.text?.message}</span>}
      <input type="datetime-local" {...register("deadline")} />
      {errors.deadline && <span>{errors.deadline?.message}</span>}
      <input type="submit" />
    </form>
  );
};

export default AddTodoItem;
