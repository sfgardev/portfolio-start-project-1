import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const SocialList = () => {
  return (
    <StyledSocialList>
      <SocialItem>
        <SocialLink>
          <Icon iconId="instagram" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon iconId="telegram" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon iconId="vk" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon iconId="linkedin" />
        </SocialLink>
      </SocialItem>
    </StyledSocialList>
  );
};

const StyledSocialList = styled.ul``;

const SocialItem = styled.li``;

const SocialLink = styled.li``;
