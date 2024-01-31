import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";

import socialNetworkPng from "../../../assets/images/social-network.png";
import socialNetworkWebp from "../../../assets/images/social-network.webp";
import timerPng from "../../../assets/images/timer.png";
import timerWebp from "../../../assets/images/timer.webp";

const items = ["all", "landing page", "react", "spa"];


export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={items} />
      <FlexWrapper justify="space-around">
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
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #3468bc;
`;
