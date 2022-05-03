import styled from "styled-components";
import { breakpoints } from "../App.styled";

export const Input = styled.input.attrs({ type: "search" })`
  width: 50%;
  height: 4em;
  margin: 0 auto;
  display: block;
  border: var(--input-border);
  border-radius: var(--input-border-radius);
  font-family: var(--font);
  text-align: center;

  &:focus {
    outline: none;
    border: var(--input-border-focus);
  }

  @media (max-width: ${breakpoints.laptop}) {
    width: 80%;
  }
`;
