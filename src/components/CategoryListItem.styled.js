import styled from "styled-components";
import { breakpoints } from "../App.styled";

export const Wrap = styled.nav`
  min-height: 80vh;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  width: 80%;
  margin: 2em 0 0 0;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
  }
`;

export const Item = styled.li`
  width: 100%;
  margin: 1em 0;
  display: flex;
  border-bottom: 1px dotted rgba(216, 221, 222, 0.5);
  align-items: center;
  transition: var(--transition-light);

  a:hover {
    color: var(--hover-text-color);
    padding-left: 0.05em;
  }

  @media (max-width: ${breakpoints.tablet}) {
    a {
      color: var(--white);
    }
  }
`;
