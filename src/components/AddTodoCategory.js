import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { postTodoCategory } from "../redux/todoSlice";

import {
  AddCategoryForm,
  AddCategoryInput,
  AddCategorySubmit,
} from "./AddTodoCategory.styled";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(1, "Zadajte minimálne 1 znak.")
    .max(20, "Maximálny povolený počet znakov je 20.")
    .required("Toto pole je povinné."),
});

const AddTodoCategory = () => {
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
    dispatch(postTodoCategory(data.name));
    reset();
    formRef.current.reset();
  };

  return (
    <>
      <AddCategoryForm onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <AddCategoryInput {...register("name")} />
        {errors.name && <span>{errors.name?.message}</span>}
        <AddCategorySubmit />
      </AddCategoryForm>
    </>
  );
};

export default AddTodoCategory;
