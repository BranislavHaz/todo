import styled from "styled-components";

export const ErrorMessage = styled.div`
  margin-top: 4em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorMessageImg = styled.img`
  max-width: 250px;
  height: auto;
  margin-bottom: 3em;
`;

export const ErrorMessageText = styled.p`
  margin-top: 0.8em;
  color: #b9c2c3;
  text-align: center;

  &:last-of-type {
    margin-top: 3em;
    font-size: 0.9em;
  }
`;
