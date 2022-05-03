import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  width: 25%;
  min-height: 80vh;

  @media (max-width: 481px) {
    width: 100%;
    height: 100%;
    position: fixed;
    opacity: 0;
    background-color: #383c4b;
    color: #fff;
    z-index: 2;
    transform: translateY(-200em);
    animation: ${(props) => (props.state ? In : Out)} 0.5s forwards;
  }
`;

export const Out = keyframes`
from {
  transform: translateY(0);
  opacity: 1;
}
  to {
    transform: translateY(-200em);
    opacity: 0;
  }
`;

export const In = keyframes`
from {
    transform: translateY(-200em);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
