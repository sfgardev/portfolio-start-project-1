import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { SocialList } from "../../components/socialList/SocialList";
import { theme } from "../../styles/Theme";

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
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: 3px;
`;

const Copyright = styled.small`
  font-size: 0.75rem;
  opacity: 0.5;
`;
