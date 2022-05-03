import styled from "styled-components";

export const FilterWrap = styled.nav`
  margin-top: 2em;
`;

export const FilterList = styled.ul`
  display: flex;
  justify-content: end;
  margin-right: 2em;

  @media (max-width: 1025px) {
    justify-content: center;
    margin: 0;
  }
`;

export const FilterElement = styled.li`
  margin: 2em 0.3em 0.3em 0.3em;
`;

export const FilterLink = styled.a`
  display: flex;
  justify-content: center;
  transition: var(--transition-light);
  color: ${(props) => props.state === "active" && "#ff7562"};

  &:hover {
    color: #f3705e;
  }
`;
