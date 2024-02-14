import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a<{ active?: boolean }>`
  font-size: 0.88rem;
  letter-spacing: 0.06rem;
  text-transform: uppercase;
  padding: 0.625rem;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 0.63rem;
    }
  }

  &::before {
    content: "";
    height: 0;
    /* height: 0.63rem; */
    background-color: ${theme.colors.accent};
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    z-index: -1;
    transition: all 0.35s;

    ${(props) =>
      props.active &&
      css<{ active?: boolean }>`
        height: 0.63rem;
      `}
  }
`;
