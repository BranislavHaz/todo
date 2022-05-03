import styled, { keyframes } from "styled-components";
import { breakpoints } from "../App.styled";

export const Form = styled.form`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    justify-content: end;
    align-items: center;
  }
`;

export const Input = styled.input.attrs({ type: "text" })`
  width: 50%;
  border-color: ${(props) => props.state === "error" && "var(--error-color)"};
  animation: ${(props) => props.state === "error" && ErrorAnimation}
    var(--error-animation);

  &:focus {
    border-color: ${(props) => props.state === "error" && "var(--error-color)"};
  }

  &::placeholder {
    color: ${(props) => props.state === "error" && "var(--error-color)"};
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }
`;

export const Submit = styled.input.attrs({ type: "submit" })`
  margin-left: 0.4em;
  padding: var(--btn-padding);
  border: none;
  border-radius: var(--btn-radius);
  background-color: var(--btn-bg-color);
  color: var(--white);
  transition: var(--transition-light);
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--btn-bg-color-hover);
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin: 1em 0 0 0;
    width: 90%;
  }
`;

// Animations

export const ErrorAnimation = keyframes`
  25% {
    transform: rotate(1deg);
  }
  75% {
    transform: rotate(-1deg);
  }
`;
