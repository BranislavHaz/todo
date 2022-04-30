import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { postTodoList, getTodoList } from "../redux/todoSlice";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(1, "Zadajte minimálne 1 znak.")
    .max(20, "Maximálny povolený počet znakov je 20.")
    .required("Toto pole je povinné."),
});

const AddTodoList = () => {
  const formRef = useRef(null);
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
    dispatch(postTodoList(data.name));
    dispatch(getTodoList());
    reset();
    formRef.current.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <input type="text" {...register("name")} />
        {errors.name && <span>{errors.name?.message}</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default AddTodoList;
