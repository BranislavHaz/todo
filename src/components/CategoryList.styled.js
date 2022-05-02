import styled from "styled-components";

export const CategoryListWrap = styled.nav`
  min-height: 80vh;
`;

export const CategoryListUl = styled.ul`
  margin-top: 0.5em;
`;

export const CategoryItem = styled.li`
  width: 100%;
  margin: 0.8em 0;
  display: flex;
  align-items: center;

  a:hover {
    color: #000;
    padding-left: 0.05em;
    transition: var(--transition-light);
  }
`;

export const DeleteCategory = styled.img`
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
  cursor: pointer;

  &:hover {
    filter: grayscale(0.5);
  }
`;
