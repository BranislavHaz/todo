import styled from "styled-components";
import { breakpoints } from "../App.styled";

export const Wrap = styled.section`
  width: 75%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding-top: 2em;
  }
`;
