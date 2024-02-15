import styled from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  position: relative;
  padding: 2.5rem 0;
  background-color: ${theme.colors.primaryBg};
`;

const Name = styled.span`
  ${font({
    family: '"Josefin Sans", sans-serif',
    weight: 700,
    fMax: 1.375,
    fMin: 1,
  })}
  letter-spacing: 3px;
`;

const Copyright = styled.small`
  font-size: 0.75rem;
  opacity: 0.5;
`;

export const S = {
  Footer,
  Name,
  Copyright,
};
