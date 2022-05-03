import styled, { keyframes } from "styled-components";
import { breakpoints } from "../App.styled";

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(80, 80, 80, 0.8);
  z-index: 1;
`;

export const Form = styled.form`
  width: 50vw;
  max-width: 650px;
  padding: 2em;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  border-radius: var(--border-radius);
  background-color: var(--white);

  @media (max-width: ${breakpoints.desktop}) {
    width: 70vw;
    padding: 1em;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 90vw;
    padding: 0.5em;
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  margin-top: 2em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-of-type(1),
  &:nth-of-type(2) {
    width: 70%;
  }

  &:nth-of-type(3) {
    width: 40%;
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    &:nth-of-type(1),
    &:nth-of-type(2) {
      width: 80%;
    }

    &:nth-of-type(3) {
      width: 80%;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  border-color: ${(props) => props.state === "error" && "var(--error-color)"};
  animation: ${(props) => props.state === "error" && ErrorAnimation}
    var(--error-animation);

  &:focus {
    border-color: ${(props) => props.state === "error" && "var(--error-color)"};
  }
`;

export const Submit = styled.input.attrs({ type: "submit" })`
  margin-top: 2em;
  padding: var(--btn-padding);
  border: none;
  border-radius: var(--input-border-radius);
  background-color: var(--btn-bg-color);
  color: var(--white);
  transition: var(--transition-light);
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--btn-bg-color-hover);
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 2em;
  }
`;

export const ErrorText = styled.span`
  width: 100%;
  padding: 0 0.2em;
  position: relative;
  bottom: -0.2em;
  left: 0;
  color: var(--error-color);
  font-size: 0.8em;
`;

export const CloseIcon = styled.img`
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  cursor: pointer;

  &:hover {
    top: 1.45em;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 0.9em;
    height: 0.9em;
    top: 1em;
    right: 1em;
  }
`;

// Animations

export const ErrorAnimation = keyframes`

  25% {
    transform: translateX(0.5em);
  }
  75% {
    transform: translate(-0.5em);
  }
`;
