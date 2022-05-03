import styled from "styled-components";
import { breakpoints } from "../App.styled";

export const Wrap = styled.div`
  width: 4em;
  height: 4em;
  display: none;
  position: absolute;
  bottom: 1em;
  right: 1em;
  border-radius: 50%;
  background-color: ${(props) =>
    props.state ? "var(--white)" : "var(--primary-color)"};
  cursor: pointer;
  z-index: 4;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 1em;
    right: 1em;
  }
`;

export const Icon = styled.img`
  width: 2em;
  height: 2em;
`;
