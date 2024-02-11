import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";

import socialNetworkPng from "../../../assets/images/social-network.png";
import socialNetworkWebp from "../../../assets/images/social-network.webp";
import timerPng from "../../../assets/images/timer.png";
import timerWebp from "../../../assets/images/timer.webp";
import { Container } from "../../../components/Container";

const items = ["all", "landing page", "react", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={items} />
        <FlexWrapper justify="space-between" align="flex-start" $wrap>
          <Work
            title="Social Network"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            webpSrc={socialNetworkWebp}
            pngSrc={socialNetworkPng}
            alt="social work illustration"
          />
          <Work
            title="Timer"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
            webpSrc={timerWebp}
            pngSrc={timerPng}
            alt="timer illustration"
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 1.875rem;
  }
`;
