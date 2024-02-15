import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll } from "react-scroll";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn onClick={() => animateScroll.scrollToTop()}>
          <Icon iconId="goToTop" height="15" width="16" viewBox="0 0 16 15" />
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  background-color: #0000004d;
  padding: 0.5rem;
  position: fixed;
  bottom: 30px;
  right: 30px;
`;
