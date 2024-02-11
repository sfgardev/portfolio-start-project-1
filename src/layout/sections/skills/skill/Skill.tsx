import { ReactNode } from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";

type SkillProps = {
  title: string;
  text: string;
  icon: ReactNode;
};

export const Skill = (props: SkillProps) => {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" align="center">
        <IconWrapper>{props.icon}</IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.text}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 20.625rem;
  flex-grow: 1;
  padding: 3.875rem 1.25rem 2.5rem;

  @media ${theme.media.mobile} {
    padding: 3.875rem 0 2.5rem;
  }
`;

export const IconWrapper = styled.div`
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
