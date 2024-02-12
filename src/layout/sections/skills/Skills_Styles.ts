import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section``;

const Skill = styled.div`
  width: 20.625rem;
  flex-grow: 1;
  padding: 2.625rem 1.25rem 3.1rem;

  @media ${theme.media.mobile} {
    padding: 3.875rem 0 2.5rem;
  }
`;

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    width: 5rem;
    height: 5rem;
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    rotate: 45deg;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }
`;

const SkillTitle = styled.h3`
  margin: 4.375rem 0 1rem;
  text-transform: uppercase;
`;

const SkillText = styled.p`
  text-align: center;
`;

export const S = {
  Skills,
  Skill,
  IconWrapper,
  SkillTitle,
  SkillText,
};
