import React from "react";
import { Link } from "react-router-dom";

import { ErrorWrap, ErrorImg, ErrorBackLink } from "./Error.styled";

import errorImg from "../../img/error-404.png";

const Error = () => {
  return (
    <ErrorWrap>
      <ErrorImg src={errorImg}></ErrorImg>
      <Link to={`/`}>Späť na úvodnú stránku</Link>
    </ErrorWrap>
  );
};

export default Error;
