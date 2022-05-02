import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  display: flex;
  padding: 2em;
  overflow-x: hidden;
  color: var(--primary-text-color);
  font-family: var(--font);

  > * {
    &:first-child {
      border-right: 1px solid #d8ddde;
    }
  }
`;
