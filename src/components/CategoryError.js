import React from "react";

import { ErrorMessage, ErrorMessageText } from "./CategoryError.styled";

const CategoryError = () => {
  return (
    <ErrorMessage>
      <ErrorMessageText>
        Vyzerá to, že váš zoznam kategórií je prázdny.
      </ErrorMessageText>
      <ErrorMessageText>
        Čo tak to napraviť a jeden si pridať? 🤔
      </ErrorMessageText>
      <ErrorMessageText>
        Nefunguje? Ojoj, pravdepodobne bude chyba na strane servera, ale klamal
        by som keby tvrdím, že už na tom pracujem.
      </ErrorMessageText>
    </ErrorMessage>
  );
};

export default CategoryError;
