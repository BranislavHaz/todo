import React from "react";

import { ErrorMessage, ErrorMessageText } from "./CategoryErrorMessage.styled";

const CategoryErrorMessage = () => {
  return (
    <ErrorMessage>
      <ErrorMessageText>
        Vyzerá to, že váš zoznam kategórií je prázdny.
      </ErrorMessageText>
      <ErrorMessageText>
        Čo tak to napraviť a jeden si pridať? 🤔
      </ErrorMessageText>
    </ErrorMessage>
  );
};

export default CategoryErrorMessage;
