import styled from "styled-components";

export const BurgerWrap = styled.div`
  width: 4em;
  height: 4em;
  display: none;
  position: absolute;
  bottom: 1em;
  right: 1em;
  border-radius: 50%;
  background-color: ${(props) => (props.state ? "#fff" : "#383c4b")};
  z-index: 4;

  @media (max-width: 481px) {
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

export const BurgerIcon = styled.img`
  width: 2em;
  height: 2em;
`;
