import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { postNameList } from "../redux/globalSlice";

const schema = yup.object().shape({
  list: yup
    .string()
    .min(1, "Zadajte minimálne 1 znak.")
    .max(20, "Maximálny povolený počet znakov je 20.")
    .required("Toto pole je povinné."),
});

const AddListForm = () => {
  const formRef = useRef();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(postNameList(data.list));
    formRef.current.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <input type="text" {...register("list")} />
        {errors.list && <span>{errors.list?.message}</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default AddListForm;
