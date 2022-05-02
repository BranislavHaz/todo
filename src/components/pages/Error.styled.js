import styled from "styled-components";

export const ErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a:hover {
    color: #f3705e;
  }
  a:before {
    content: "←";
    margin-right: 1em;
  }
`;

export const ErrorImg = styled.img``;
