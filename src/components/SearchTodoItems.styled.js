import styled from "styled-components";

export const SearchBar = styled.input.attrs({ type: "search" })`
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
`;
