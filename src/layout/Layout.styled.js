import styled from "styled-components";
import { breakpoints } from "../App.styled";

export const Main = styled.main`
  width: 100vw;
  display: flex;
  padding: 2em;
  overflow-x: hidden;
  color: var(--primary-text-color);
  font-family: var(--font);

  > * {
    &:first-child {
      border-right: 1px solid var(--secondary-color);
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 1em;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`;
