import React from "react";

import {
  ErrorMessage,
  ErrorMessageImg,
  ErrorMessageText,
} from "./TodoError.styled";

import searchingImg from "../img/searching.png";

const TodoError = () => {
  return (
    <ErrorMessage>
      <ErrorMessageImg src={searchingImg}></ErrorMessageImg>
      <ErrorMessageText>Hľadám, hľadám ale nič.</ErrorMessageText>
      <ErrorMessageText>
        Vyber si zo zonamu kategórií, alebo nejakú novú jednoducho pridaj.{" "}
      </ErrorMessageText>
      <ErrorMessageText>
        Nefunguje? Ojoj, pravdepodobne bude chyba na strane servera, ale klamal
        by som keby tvrdím, že už na tom pracujem.
      </ErrorMessageText>
    </ErrorMessage>
  );
};

export default TodoError;
