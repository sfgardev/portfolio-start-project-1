import React, { useState } from "react";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import { S } from "./Works_Styles";
import { motion, AnimatePresence } from "framer-motion";

import socialNetworkPng from "../../../assets/images/social-network.png";
import socialNetworkWebp from "../../../assets/images/social-network.webp";
import timerPng from "../../../assets/images/timer.png";
import timerWebp from "../../../assets/images/timer.webp";

// const tabsItems = ["all", "landing page", "react", "spa"];
export type TabsItemStatus = "all" | "landing" | "react" | "spa";

export type TabsItem = {
  title: string;
  status: TabsItemStatus;
};

const tabsItems: TabsItem[] = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "Spa",
    status: "spa",
  },
];

const worksData = [
  {
    id: 1,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    webpSrc: socialNetworkWebp,
    pngSrc: socialNetworkPng,
    alt: "social work illustration",
    type: "spa",
  },
  {
    id: 2,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    webpSrc: timerWebp,
    pngSrc: timerPng,
    alt: "timer illustration",
    type: "react",
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] =
    useState<TabsItemStatus>("all");

  const filteredWorks =
    currentFilterStatus === "all"
      ? [...worksData]
      : worksData.filter((work) => work.type === currentFilterStatus);

  const handleChangeStatus = (status: TabsItemStatus) => {
    setCurrentFilterStatus(status);
  };

  return (
    <S.Works id="works">
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          currentFilterStatus={currentFilterStatus}
          onChangeStatus={handleChangeStatus}
        />
        <FlexWrapper justify="space-between" align="flex-start" $wrap>
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                style={{ width: "20.65rem", flexGrow: 1, maxWidth: "33.75rem" }}
                key={work.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
              >
                <Work
                  key={work.id}
                  title={work.title}
                  text={work.text}
                  webpSrc={work.webpSrc}
                  pngSrc={work.pngSrc}
                  alt={work.alt}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
