import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Link } from "../../../components/Link";
import { Button } from "../../../components/Button";

const Works = styled.section`
  position: relative;

  ${FlexWrapper} {
    gap: 1.875rem;
  }
`;

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 20.625rem;
  flex-grow: 1;

  ${Link} {
    padding: 0.625rem 0;

    & + ${Link} {
      margin-left: 1.25rem;
    }
  }

  @media ${theme.media.desktop} {
    max-width: 33.75rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    transition: all 0.25s;

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(0.5rem);
    opacity: 0;
    transition: all 0.25s;
  }

  &:hover {
    &::before {
      /* background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(0.5rem); */
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  /* display: block; */
`;

const WorkDescription = styled.div`
  padding: 1.5625rem 1.25rem;
`;

const WorkTitle = styled.h3``;

const WorkText = styled.p`
  margin: 0.875rem 0 0.625rem;
`;

export const S = {
  Works,
  Work,
  ImageWrapper,
  WorkImage,
  WorkDescription,
  WorkTitle,
  WorkText,
};
