import styled, { keyframes } from "styled-components";

const Delete = keyframes`
to {
  transform: scale(0);
}
`;

const Done = keyframes`
to {
  transform: rotate(5deg) translate(200em, 0);
}
`;

export const TodoItemWrap = styled.div`
  margin: 1em 0;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  background-color: #fff;
  transition: var(--transition-light);
  animation: ${(props) =>
      (props.state === "delete" && Delete) || (props.state === "done" && Done)}
    0.3s linear forwards;

  &:hover {
    background-color: #fbfbfb;
  }
`;

export const TodoItemColumn = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    width: 5%;
    justify-content: space-between;
    align-items: end;
  }
`;

export const ActionItem = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.2em;
  filter: grayscale(30%);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const DeadlineTodo = styled.p`
  border-radius: 5px;
  font-size: 0.8em;
`;

export const TitleTodo = styled.h1`
  margin-left: 0.1em;
`;

export const TextTodo = styled.p`
  margin-left: 0.3em;
`;
