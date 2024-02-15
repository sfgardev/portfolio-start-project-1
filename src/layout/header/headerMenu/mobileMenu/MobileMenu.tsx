import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((open) => !open);
  };

  const handleCloseMobileMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={toggleMenu}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={handleCloseMobileMenu}>
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
