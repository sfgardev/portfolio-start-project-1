import { ReactNode } from "react";
import styled from "styled-components";

type SkillProps = {
  title: string;
  text: string;
  icon: ReactNode;
};

export const Skill = (props: SkillProps) => {
  return (
    <StyledSkill>
      {props.icon}
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.text}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: #fff;
  margin: 10px;
`;

const SkillTitle = styled.h3``;

const SkillText = styled.p``;
