import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
  margin: 1em 0;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  background-color: var(--white);
  transition: var(--transition-light);
  animation: ${(props) =>
      (props.state === "delete" && DeleteAnimation) ||
      (props.state === "done" && DoneAnimation)}
    var(--error-animation);

  &:hover {
    background-color: var(--secondary-color);
  }
`;

export const Column = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    width: 5%;
    justify-content: space-between;
    align-items: end;
  }
`;

export const Icon = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.2em;
  filter: grayscale(30%);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Date = styled.p`
  border-radius: 5px;
  font-size: 0.8em;
`;

export const Title = styled.h1`
  margin-left: 0.1em;
`;

export const Text = styled.p`
  margin-left: 0.3em;
`;

// Animations

const DeleteAnimation = keyframes`
to {
  transform: scale(0);
}
`;

const DoneAnimation = keyframes`
to {
  transform: scale(1.1);
  opacity: 0;
}
`;
