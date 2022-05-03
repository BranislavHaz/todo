import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { postTodoCategory } from "../redux/todoSlice";

import {
  AddCategoryForm,
  AddCategoryInput,
  AddCategorySubmit,
} from "./CategoryAddItem.styled";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(1, "Zadajte minimálne 1 znak.")
    .max(20, "Maximálny povolený počet znakov je 20.")
    .required("Toto pole je povinné."),
});

const CategoryAddItem = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const { categoriesList } = useSelector((state) => state.todo);
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
    const lastCategory = categoriesList[categoriesList?.length - 1];
    navigate(`/todolist/${+lastCategory.id + 1}`);
  };

  return (
    <>
      <AddCategoryForm onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <AddCategoryInput
          {...register("name")}
          placeholder={errors.name && errors.name?.message}
          state={errors.name && "error"}
        />
        <AddCategorySubmit />
      </AddCategoryForm>
    </>
  );
};

export default CategoryAddItem;
