import React from "react";

import * as $ from "./CategoryErrorMessage.styled";

const CategoryErrorMessage = () => {
  return (
    <$.Wrap>
      <$.Text>Vyzerá to, že váš zoznam kategórií je prázdny.</$.Text>
      <$.Text>Čo tak to napraviť a jeden si pridať? 🤔</$.Text>
    </$.Wrap>
  );
};

export default CategoryErrorMessage;
