import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { SocialList } from "../../components/socialList/SocialList";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Svetlana</Name>
        <SocialList />
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
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
