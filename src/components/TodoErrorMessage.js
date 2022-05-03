import React from "react";

import {
  ErrorMessage,
  ErrorMessageImg,
  ErrorMessageText,
} from "./TodoErrorMessage.styled";

import searchingImg from "../img/searching.png";

const TodoErrorMessage = () => {
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

export default TodoErrorMessage;
