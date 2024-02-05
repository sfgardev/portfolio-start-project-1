import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  font-family: inherit;
  font-size: 0.875rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 10.625rem;
  height: 2rem;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 45%;
    height: 0.625rem;
    background-color: ${theme.colors.accent};
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50%;
    transition: all 0.35s;
    z-index: -1;
  }

  &:hover {
    &::before {
      width: 100%;
      height: 100%;

    }
  }
`;
