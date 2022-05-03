import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 4em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 250px;
  height: auto;
  margin-bottom: 3em;
`;

export const Text = styled.p`
  margin-top: 0.4em;
  color: var(--error-color-text);
  text-align: center;

  &:last-of-type {
    margin-top: 3em;
    font-size: 0.9em;
  }
`;
