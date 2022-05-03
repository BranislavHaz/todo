import React from "react";
import { Link } from "react-router-dom";

import * as $ from "./Error.styled";

import errorImg from "../../img/error-404.png";

const Error = () => {
  return (
    <$.Wrap>
      <$.Image src={errorImg}></$.Image>
      <Link to={`/`}>Späť na úvodnú stránku</Link>
    </$.Wrap>
  );
};

export default Error;
