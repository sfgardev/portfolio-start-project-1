import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Main = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
  display: flex;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 22.5rem;
    height: 29.38rem;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 19.625rem;
      height: 25.875rem;
      top: -17px;
      left: 20px;
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 4.0625rem;
  }
`;

const Photo = styled.img`
  width: 21.875rem;
  height: 26.875rem;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 19.375rem;
    height: 23.75rem;
  }
`;

const MainTitle = styled.h1`
  ${font({ weight: 400, fMax: 1.6875, fMin: 1.25 })}

  p {
    display: none;
  }
`;

const Name = styled.h2`
  ${font({
    family: '"Josefin Sans", sans-serif',
    weight: 700,
    fMax: 3.125,
    fMin: 2.5,
  })}

  letter-spacing: 5%;
  margin: 0.625rem 0;

  @media ${theme.media.mobile} {
    margin: 0.9375rem 0 1.375rem;
  }

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 1.25rem;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const SmallText = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;
`;

export const S = {
  Main,
  PhotoWrapper,
  Photo,
  MainTitle,
  Name,
  SmallText,
};
