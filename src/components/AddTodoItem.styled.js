import styled, { keyframes } from "styled-components";

export const AddTodoWrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(80, 80, 80, 0.8);
  z-index: 1;
`;

export const AddTodoForm = styled.form`
  width: 50vw;
  height: 40vh;
  padding: 2em;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: var(--border-radius);
  background-color: #f6fafb;
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
`;

export const InputTodoTitle = styled.input.attrs({ type: "text" })`
  width: 100%;
  border-color: ${(props) => props.state === "error" && "red"};
  animation: ${(props) => props.state === "error" && Error} 0.15s 3 backwards;

  &:focus {
    border-color: ${(props) => props.state === "error" && "red"};
  }
`;

export const InputTodoText = styled.textarea`
  width: 100%;
  height: 8em;
  border-color: ${(props) => props.state === "error" && "red"};
  animation: ${(props) => props.state === "error" && Error} 0.15s 3 backwards;

  &:focus {
    border-color: ${(props) => props.state === "error" && "red"};
  }
`;

export const InputTodoDate = styled.input.attrs({ type: "datetime-local" })`
  width: 100%;
  text-align: center;
  border-color: ${(props) => props.state === "error" && "red"};
  animation: ${(props) => props.state === "error" && Error} 0.15s 3 backwards;

  &:focus {
    border-color: ${(props) => props.staty === "error" && "red"};
  }
`;

export const Error = keyframes`

  25% {
    transform: translateX(0.5em);
  }
  75% {
    transform: translate(-0.5em);
  }
`;

export const InputTodoSubmit = styled.input.attrs({ type: "submit" })`
  margin-top: 2em;
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

export const ErrorMessage = styled.span`
  width: 100%;
  padding: 0 0.2em;
  position: absolute;
  bottom: -1.5em;
  left: 0;
  color: red;
  font-size: 0.8em;
`;

export const CloseTodoForm = styled.img`
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  cursor: pointer;

  &:hover {
    top: 1.45em;
  }
`;
