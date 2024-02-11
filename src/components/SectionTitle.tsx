import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({
    family: '"Josefin Sans", sans-serif',
    weight: 600,
    fMax: 2.25,
    fMin: 1.875,
  })}

  text-align: center;
  letter-spacing: 0.3125rem;
  margin-bottom: 5.625rem;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    bottom: -30px;
    left: 50%;
    translate: -50%;

    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }
`;
