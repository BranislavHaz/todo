import styled from "styled-components";

import addIcon from "../img/add.png";

export const TodoListWrap = styled.div`
  margin: 0.3em 2em 2em 2em;
`;

export const TodoListTitle = styled.h1`
  margin: 2em 0;
  text-align: center;
  font-size: 2.3em;
`;

export const AddTodoButton = styled.div`
  width: 50%;
  height: 6em;
  margin: 1em auto 2em auto;
  padding: 1em;
  border: 1px dashed #d8ddde;
  border-radius: var(--border-radius);
  background: url(${addIcon}) no-repeat center transparent;
  background-size: 3em;
  transition: var(--transition-light);
  cursor: pointer;

  &:hover {
    filter: grayscale(60%);
  }

  @media (max-width: 1025px) {
    width: 100%;
  }
`;
