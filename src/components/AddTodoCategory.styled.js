import styled, { keyframes } from "styled-components";

export const AddCategoryForm = styled.form`
  margin-top: 2em;
  display: flex;
  justify-content: center;
`;

export const AddCategoryInput = styled.input.attrs({ type: "text" })`
  width: 70%;
  border-color: ${(props) => props.state === "error" && "red"};
  animation: ${(props) => props.state === "error" && Error} 0.15s 3 backwards;

  &:focus {
    border-color: ${(props) => props.state === "error" && "red"};
  }

  &::placeholder {
    color: ${(props) => props.state === "error" && "red"};
  }
`;

export const Error = keyframes`

  25% {
    transform: rotate(1deg);
  }
  75% {
    transform: rotate(-1deg);
  }
`;

export const AddCategorySubmit = styled.input.attrs({ type: "submit" })`
  margin-left: 0.4em;
  padding: 0.6em 0.8em 0.8em 0.8em;
  border: none;
  border-radius: var(--input-border-radius);
  background-color: var(--btn-bg-color);
  color: #fff;
  transition: var(--transition-light);
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--btn-bg-color-hover);
  }
`;
