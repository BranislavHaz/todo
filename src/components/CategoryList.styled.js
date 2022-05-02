import styled from "styled-components";

export const Navigation = styled.nav`
  min-height: 80vh;
`;

export const List = styled.ul`
  margin-top: 0.5em;
`;

export const ListItem = styled.li`
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

export const DeleteItem = styled.img`
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
  cursor: pointer;

  &:hover {
    filter: grayscale(0.5);
  }
`;

export const Title = styled.h3`
  margin-top: 2em;
  position: relative;
`;
