import React from "react";
import { Icon } from "../icon/Icon";
import { animateScroll } from "react-scroll";

export const Logo: React.FC = () => {
  return (
    <a href="#" onClick={() => animateScroll.scrollToTop}>
      <Icon iconId="code" />
    </a>
  );
};
