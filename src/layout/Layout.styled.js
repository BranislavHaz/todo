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

  @media (max-width: 1025px) {
    padding: 1em;
  }

  @media (max-width: 481px) {
    padding: 0;
  }
`;
