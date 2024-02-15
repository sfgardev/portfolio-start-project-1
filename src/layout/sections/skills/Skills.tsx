import React from "react";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Skill } from "./skill/Skill";
import { S } from "./Skills_Styles";

const skillData = [
  {
    title: "html5",
    icon: <Icon iconId="code" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    title: "css3",
    icon: <Icon iconId="css" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    title: "react",
    icon: <Icon iconId="react" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    title: "typescript",
    icon: <Icon iconId="typescript" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    title: "styled components",
    icon: <Icon iconId="styled" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    title: "web design",
    icon: <Icon iconId="figma" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills id="skills">
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper justify="space-between" $wrap>
          {skillData.map((skill) => (
            <Skill
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              text={skill.text}
            />
          ))}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
