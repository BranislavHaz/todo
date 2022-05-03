import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenu } from "../redux/globalSlice";
import { postCategoryItems } from "../redux/categorySlice";

import * as $ from "./CategoryAddItem.styled";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Neskúšaj to namňa a pridaj.")
    .max(20, "Neprepískol si to? Uber na 20.")
    .required(),
});

const CategoryAddItem = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { categoryListItems } = useSelector((state) => state.category);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navSubmitCategory = () => {
    let lastCategory = categoryListItems[categoryListItems?.length - 1];
    if (categoryListItems?.length < 1) {
      navigate(`/todolist/1`);
    } else {
      navigate(`/todolist/${+lastCategory.id + 1}`);
    }
  };

  const onSubmit = (data) => {
    dispatch(postCategoryItems(data.name));
    dispatch(setMobileMenu(false));
    reset();
    formRef.current.reset();
    setTimeout(() => navSubmitCategory(), 400);
  };

  return (
    <>
      <$.Form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <$.Input
          {...register("name")}
          placeholder={errors.name ? errors.name?.message : "Pridať kategóriu"}
          state={errors.name && "error"}
        />
        <$.Submit />
      </$.Form>
    </>
  );
};

export default CategoryAddItem;
