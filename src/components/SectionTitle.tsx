import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 600;
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
    bottom: -1.875rem;
    left: 50%;
    translate: -50%;
  }
`;
