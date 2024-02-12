import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { S } from "./Header_Styles";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          {width <= breakpoint ? (
            <MobileMenu menuItems={items} />
          ) : (
            <DesktopMenu menuItems={items} />
          )}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
