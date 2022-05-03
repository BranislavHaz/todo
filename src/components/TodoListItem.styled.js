import styled from "styled-components";
import { breakpoints } from "../App.styled";

import addIcon from "../img/add.png";

export const Wrap = styled.div`
  margin: 0.3em 2em 2em 2em;
`;

export const Title = styled.h1`
  margin: 2em 0;
  text-align: center;
  font-size: 2.3em;
`;

export const Button = styled.div`
  width: 50%;
  height: 6em;
  margin: 1em auto 2em auto;
  padding: 1em;
  border: 1px dashed var(--secondary-color);
  border-radius: var(--border-radius);
  background: url(${addIcon}) no-repeat center transparent;
  background-size: 3em;
  transition: var(--transition-light);
  cursor: pointer;

  &:hover {
    filter: grayscale(60%);
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
`;
