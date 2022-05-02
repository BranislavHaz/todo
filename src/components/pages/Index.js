import React from "react";

import { IndexWrap, IndexTitle, IndexImg } from "./Index.styled";

import indexImg from "../../img/to-do-list.png";

const Intro = () => {
  return (
    <IndexWrap>
      <IndexTitle>TODO APP</IndexTitle>
      <IndexImg src={indexImg}></IndexImg>
    </IndexWrap>
  );
};

export default Intro;
