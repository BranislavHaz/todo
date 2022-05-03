import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a:hover {
    color: var(--btn-bg-color-hover);
  }
  a:before {
    content: "←";
    margin-right: 1em;
  }
`;

export const Image = styled.img``;
