import styled from "styled-components";
import { breakpoints } from "../App.styled";

export const Wrap = styled.nav`
  margin-top: 2em;
`;

export const List = styled.ul`
  display: flex;
  justify-content: end;
  margin-right: 2em;

  @media (max-width: ${breakpoints.desktop}) {
    justify-content: center;
    margin: 0;
  }
`;

export const Element = styled.li`
  margin: 2em 0.3em 0.3em 0.3em;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  transition: var(--transition-light);
  color: ${(props) => props.state === "active" && "#ff7562"};

  &:hover {
    color: var(--btn-bg-color-hover);
  }
`;
