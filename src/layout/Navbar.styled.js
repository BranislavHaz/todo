import styled, { keyframes } from "styled-components";
import { breakpoints } from "../App.styled";

export const Header = styled.header`
  width: 25%;
  min-height: 80vh;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 100%;
    position: fixed;
    opacity: 0;
    background-color: var(--primary-color);
    color: var(--white);
    z-index: 2;
    transform: translateY(-200em);
    animation: ${(props) => props.state && ShowAnimation} 0.5s forwards;
  }
`;

export const ShowAnimation = keyframes`
from {
  transform: translateY(-100em);
  opacity: 0;
}
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
