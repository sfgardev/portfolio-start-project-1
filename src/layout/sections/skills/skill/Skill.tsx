import { ReactNode } from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Skills_Styles";

type SkillProps = {
  title: string;
  text: string;
  icon: ReactNode;
};

export const Skill = (props: SkillProps) => {
  return (
    <S.Skill>
      <FlexWrapper direction="column" align="center">
        <S.IconWrapper>{props.icon}</S.IconWrapper>
        <S.SkillTitle>{props.title}</S.SkillTitle>
        <S.SkillText>{props.text}</S.SkillText>
      </FlexWrapper>
    </S.Skill>
  );
};
