import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { postTodoItem, setTodoAddForm } from "../redux/todoSlice";

import * as $ from "./TodoAddItem.styled";

import closeIcon from "../img/delete-category.png";

const schema = yup.object().shape({
  title: yup
    .string()
    .min(2, "To fakt si chcel nazvať úlohu takto? Pridaj...")
    .max(20, "Ajajaj, nebuť roztopašný! Maximum je 20."),
  text: yup
    .string()
    .min(2, "Sám tomu neveríš, pridaj tam čosi.")
    .max(300, "Šikulka, avšak načo keď maximum je 300?"),
  deadline: yup
    .date()
    .min(new Date(), "Ty snaď vieš cestovať do minulosti?")
    .typeError("Vyplňte prosím dátum deadlinu."),
});

const AddTodoItem = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { urlParams } = useSelector((state) => state.global);

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
    dispatch(setTodoAddForm(false));
  };

  const handleClick = () => {
    dispatch(setTodoAddForm(false));
  };

  return (
    <$.Wrap>
      <$.Form
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
        id="add-todo-item"
      >
        <$.InputWrap>
          <$.Input
            type="text"
            placeholder="Názov úlohy"
            {...register("title")}
            state={errors.title && "error"}
          />
          {errors.title && <$.ErrorText>{errors.title?.message}</$.ErrorText>}
        </$.InputWrap>
        <$.InputWrap>
          <$.Input
            type="text"
            placeholder="Podrobný popis úlohy"
            form="add-todo-item"
            {...register("text")}
            state={errors.text && "error"}
          />
          {errors.text && <$.ErrorText>{errors.text?.message}</$.ErrorText>}
        </$.InputWrap>
        <$.InputWrap>
          <$.Input
            type="datetime-local"
            state={errors.deadline && "error"}
            {...register("deadline")}
          />
          {errors.deadline && (
            <$.ErrorText>{errors.deadline?.message}</$.ErrorText>
          )}
        </$.InputWrap>
        <$.Submit />
        <$.CloseIcon src={closeIcon} onClick={handleClick} />
      </$.Form>
    </$.Wrap>
  );
};

export default AddTodoItem;
