import React from "react";
import { useSelector } from "react-redux";

import * as $ from "./TodoErrorMessage.styled";

import searchingImg from "../img/searching.png";
import errorImg from "../img/error.png";

const TodoErrorMessage = () => {
  const { isTodoListAvailable } = useSelector((state) => state.todo);

  return (
    <$.Wrap>
      {isTodoListAvailable && (
        <>
          <$.Image src={searchingImg} />
          <$.Text>Hľadám, hľadám ale nič.</$.Text>
          <$.Text>
            Vyber si zo zonamu kategórií, alebo nejakú novú úlohu jednoducho
            pridaj.
          </$.Text>
        </>
      )}
      {!isTodoListAvailable && (
        <>
          <$.Image src={errorImg} />
          <$.Text>
            Nefunguje? Ojoj, pravdepodobne bude chyba na strane servera, ale
            klamal by som keby tvrdím, že už na tom pracujem.
          </$.Text>
          <$.Text>Skús to jednoducho neskôr.</$.Text>
        </>
      )}
    </$.Wrap>
  );
};

export default TodoErrorMessage;
