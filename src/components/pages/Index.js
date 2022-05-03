import React from "react";

import * as $ from "./Index.styled";

import indexImg from "../../img/to-do-list.png";

const Intro = () => {
  return (
    <$.Wrap>
      <$.Title>TODO APP</$.Title>
      <$.Image src={indexImg}></$.Image>
    </$.Wrap>
  );
};

export default Intro;
