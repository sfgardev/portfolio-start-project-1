import styled from "styled-components";
import { theme } from "../../styles/Theme";

const SocialList = styled.ul`
  display: flex;
  gap: 1.25rem;
  margin: 1.875rem 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: ${theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.35s;

  &:hover {
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};
    translate: 0 -4px;
  }
`;

export const S = {
  SocialList,
  SocialItem,
  SocialLink,
};
