import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: string[] }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item) => (
          <ListItem key={item}>
            <Link href={`#${item}`}>
              {item}
              <Mask>
                <span>{item}</span>
              </Mask>
              <Mask>
                <span>{item}</span>
              </Mask>
            </Link>
          </ListItem>
        ))}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;

const Link = styled.a`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.875rem;
  font-weight: 400;
  color: transparent;
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

const ListItem = styled.li`
  position: relative;

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

  &:hover {
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
