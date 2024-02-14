import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const MobileMenu: React.FC<{ menuItems: string[] }> = (props) => {
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
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
