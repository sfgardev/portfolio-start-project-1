import React from "react";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import { S } from "./Works_Styles";

import socialNetworkPng from "../../../assets/images/social-network.png";
import socialNetworkWebp from "../../../assets/images/social-network.webp";
import timerPng from "../../../assets/images/timer.png";
import timerWebp from "../../../assets/images/timer.webp";

const items = ["all", "landing page", "react", "spa"];

const workData = [
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    webpSrc: socialNetworkWebp,
    pngSrc: socialNetworkPng,
    alt: "social work illustration",
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    webpSrc: timerWebp,
    pngSrc: timerPng,
    alt: "timer illustration",
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={items} />
        <FlexWrapper justify="space-between" align="flex-start" $wrap>
          {workData.map((work) => (
            <Work
              title={work.title}
              text={work.text}
              webpSrc={work.webpSrc}
              pngSrc={work.pngSrc}
              alt={work.alt}
            />
          ))}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
