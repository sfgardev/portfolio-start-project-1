import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

const MenuItem = styled.li`
  position: relative;
`;

const Mask = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.accent};
  transition: all 0.35s;

  & + span {
    top: 50%;

    span {
      display: inline-block;
      translate: 0 -50%;
    }
  }
`;

const NavLink = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.875rem;
  font-weight: 400;
  color: transparent;

  &::before {
    content: "";
    display: inline-block;
    background-color: ${theme.colors.accent};
    height: 3px;
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    scale: 0;
    translate: 0 -50%;
    transition: all 0.35s;
  }

  &:hover,
  &.active {
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }

    &::before {
      scale: 1;
    }
  }
`;

// Mobile menu
const MobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(31, 31, 31, 0.9);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  translate: 0 -100%;
  transition: all 0.35s;

  ul {
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.35s;
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      translate: 0;

      & ul {
        gap: 30px;
      }
    `}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before,
    &::after {
      content: "";
      height: 2px;
      background-color: ${theme.colors.font};
      display: block;
      position: absolute;
    }

    &::before {
      width: 100%;
      translate: 0 -10px;

      ${(props) =>
        props.isOpen &&
        css`
          translate: 0 0;
          rotate: 45deg;
        `}
    }

    &::after {
      width: 24px;
      translate: 0 10px;

      ${(props) =>
        props.isOpen &&
        css`
          width: 100%;
          translate: 0 0;
          rotate: -45deg;
        `}
    }
  }
`;

// Desktop menu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;

export const S = {
  NavLink,
  Mask,
  MenuItem,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu,
};
