import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  list: yup
    .string()
    .min(1, "Zadajte minimálne 1 znak.")
    .max(20, "Maximálny povolený počet znakov je 20.")
    .required("Toto pole je povinné."),
});

const AddListForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => addList(data.list);

  const addList = (name) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    };

    fetch(
      "https://626abc396a86cd64adb203dd.mockapi.io/api/list",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("list")} />
        {errors.list && <span>{errors.list?.message}</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default AddListForm;
