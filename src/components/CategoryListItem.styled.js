import styled from "styled-components";

export const CategoryListWrap = styled.nav`
  min-height: 80vh;
  display: flex;
  justify-content: center;
`;

export const CategoryListUl = styled.ul`
  width: 80%;
  margin: 2em 0 0 0;

  @media (max-width: 481px) {
    margin: 0;
  }
`;

export const CategoryItem = styled.li`
  width: 100%;
  margin: 1em 0;
  display: flex;
  border-bottom: 1px dotted rgba(216, 221, 222, 0.5);
  align-items: center;

  a:hover {
    color: #000;
    padding-left: 0.05em;
    transition: var(--transition-light);
  }

  @media (max-width: 481px) {
    a {
      color: #fff;
    }
  }
`;